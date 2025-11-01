FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Экспонируем порт 8080
EXPOSE 8080

# Запуск preview-сервера Vite
CMD ["npm", "run", "preview", "--", "--port", "8080", "--host"]
