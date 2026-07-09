# ===== Build stage =====
FROM node:22-alpine AS builder

WORKDIR /app

# Separate dependency install for layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Build the static site
COPY . .
RUN npm run build

# ===== Serve stage =====
FROM nginx:stable-alpine

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Minimal nginx config: SPA-friendly 404 → /index.html, caching
RUN echo 'server { \
    listen       80; \
    server_name  localhost; \
    root   /usr/share/nginx/html; \
    index  index.html; \
    # gzip text assets \
    gzip on; \
    gzip_types text/html text/css application/javascript image/svg+xml; \
    gzip_min_length 256; \
    # fallback for SPA routes \
    location / { \
        try_files $uri $uri/ /index.html =404; \
    } \
    # long-lived asset cache \
    location ~* \.(?:ico|css|js|svg|png|jpg|webp|avif|woff2?)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]