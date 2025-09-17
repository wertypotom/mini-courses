# Base
FROM node:20-alpine AS base
WORKDIR /app
# Prisma engines often need openssl
RUN apk add --no-cache openssl

# ---------------- Deps (shared) ----------------
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ---------------- Dev (hot reload) ----------------
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
# Source code will be bind-mounted by docker-compose.dev.yml
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---------------- Build (for prod) ----------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate || true
RUN npm run build

# ---------------- Prod (runtime) ----------------
FROM base AS prod
ENV NODE_ENV=production
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/next.config.* ./
COPY --from=build /app/prisma ./prisma  # ← UNCOMMENT THIS LINE
EXPOSE 3000
CMD ["sh","-lc","npx prisma migrate deploy && npm start -- -p ${PORT:-3000} -H 0.0.0.0"]