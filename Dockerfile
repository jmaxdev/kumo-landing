# Stage 1: Builder using Kumo (stable, not :next / alpha)
FROM ghcr.io/jmaxdev/kumo AS builder

RUN kumo runtime use 24

WORKDIR /app

# Copy package definition and kumo config (resolve for container platform)
COPY package.json kumo.config.json* ./

# Install all deps (including devDependencies needed for the build)
RUN kumo install

# Copy source (includes scripts/fix-kumo-types.mjs used by build)
COPY . .

# Build production bundle (typecheck + vite)
RUN kumo run build

# Stage 2: Runner
FROM nginx:alpine AS runner

# Copy SPA Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
