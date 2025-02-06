# Используем Node.js 18
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы
COPY package*.json ./
RUN npm install

# Копируем оставшиеся файлы
COPY . .

# Открываем порт 8001
EXPOSE 8001

# Запускаем приложение
CMD ["node", "index.js"]
