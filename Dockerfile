# Stage 1: Builder using Kumo (stable image)
FROM ghcr.io/jmaxdev/kumo AS builder

RUN kumo runtime use 24

WORKDIR /app

# Copy package definition and kumo config first for layer caching
COPY package.json kumo.config.json* ./

# Install dependencies (includes devDependencies needed for vite build)
RUN kumo install

# Copy source
COPY . .

# Production bundle via Vite (no tsc — avoids Kumo+TS execve EACCES and @types layout bugs)
RUN kumo run build

# Stage 2: Static runner
FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
