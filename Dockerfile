# Stage de base
FROM node:latest AS base
WORKDIR /app
COPY package*.json ./

# Stage de développement
FROM base AS development
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Stage de production
FROM base AS production
RUN npm install --production
COPY . .
RUN npm run build

# Stage final
FROM nginx:alpine AS final
COPY --from=production /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]