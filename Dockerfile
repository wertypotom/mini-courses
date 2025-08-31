# --- 1. Build stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build


# --- 2. Production stage ---
FROM node:20-alpine AS runner

WORKDIR /app

# Set NODE_ENV for production
ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev --frozen-lockfile

# Copy built files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]
