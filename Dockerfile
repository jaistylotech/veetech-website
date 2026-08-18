FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

# Expose the default preview port used by Vite
EXPOSE 4173
EXPOSE 5173

# Start the application using vite preview for production serving, 
# or use npm run dev in docker-compose for development
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
