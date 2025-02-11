const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware для логов
app.use(express.json());
app.use(morgan("combined", { stream: fs.createWriteStream("./logs.log", { flags: "a" }) }));

// Эндпоинт для приёма логов
app.post("/log", (req, res) => {
    const logEntry = `${new Date().toISOString()} - ${JSON.stringify(req.body)}\n`;
    fs.appendFileSync("./logs.log", logEntry);
    console.log(logEntry);
    res.status(200).json({ message: "Log saved" });
});

// Запуск сервиса
app.listen(PORT, () => {
    console.log(`Log Service running on port ${PORT}`);
});
