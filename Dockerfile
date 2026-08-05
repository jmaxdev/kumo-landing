# Stage 1: Builder using Kumo
FROM ghcr.io/jmaxdev/kumo:next AS builder

RUN kumo runtime use 24

WORKDIR /app

# Copy package definition and kumo config
COPY package.json kumo.config.json* ./

# Install dependencies inside container
RUN kumo install

# Copy source code
COPY . .

# Build production bundle
RUN kumo run build

# Stage 2: Runner
FROM nginx:alpine AS runner

# Copy SPA Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]