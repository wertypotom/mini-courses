#!/bin/sh
set -e

# 1) Install deps if needed (missing or lockfile changed)
FINGERPRINT_FILE="node_modules/.pkglock.hash"
CURRENT_HASH="$(md5sum package-lock.json | awk '{print $1}')"
INSTALLED_HASH="$(cat "$FINGERPRINT_FILE" 2>/dev/null || echo "none")"

if [ ! -d node_modules ] || [ "$CURRENT_HASH" != "$INSTALLED_HASH" ]; then
  echo "→ Installing dependencies with npm ci..."
  npm ci
  echo "$CURRENT_HASH" > "$FINGERPRINT_FILE"
else
  echo "→ Dependencies are up to date."
fi

# 2) Prisma (safe & idempotent)
npx prisma generate || true
npx prisma migrate deploy || true
# npx prisma db seed || true  # uncomment if you want auto-seed

# 3) Start Next.js dev server
exec npm run dev
