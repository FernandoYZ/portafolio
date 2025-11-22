FROM oven/bun:1.3.1-alpine AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

EXPOSE 3100
CMD ["bun", "run", "preview", "--port", "3100", "--host", "0.0.0.0"]
