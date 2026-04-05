# Usamos Node 24 (Alpine es una versión muy ligera y segura)
FROM node:24-alpine AS build

WORKDIR /app

# Copiamos archivos de configuración
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código (tu CV)
COPY . .

# Construimos el proyecto (suponiendo que usas Vite o similar)
RUN npm run build

# --- Etapa de Producción ---
FROM nginx:stable-alpine
# Copiamos el resultado del build a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]