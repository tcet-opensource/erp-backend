import express from "express";
import path, { dirname } from "path";
import morgan from "morgan";
import winston from "winston";
const { combine, timestamp, align, printf, colorize, json } = winston.format;
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from 'url';
import 'winston-daily-rotate-file';

import indexRouter from "#routes/index";
import usersRouter from "#routes/users";
import authRouter from "#routes/auth";
import { logLevel } from "#constant";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFileTransport = new winston.transports.DailyRotateFile({
    level: logLevel[process.env.ENVIRONMENT] || 'info',
    filename: `./logs/application-${process.env.ENVIRONMENT}-%DATE%.log`,
    handleExceptions: true,
    json: true,
    colorize: false,
    format: combine(
        timestamp({
            format: 'DD-MM-YYYY hh:mm:ss.SSS A',
        }),
        json()
    ),
    datePattern: 'DD-MM-YYYY',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d'
});

export let logger = winston.createLogger({
    transports: [
        logFileTransport,
        new winston.transports.Console({
            level: logLevel[process.env.ENVIRONMENT] || 'info',
            format: combine(
                colorize({ all: true }),
                timestamp({
                    format: 'YYYY-MM-DD hh:mm:ss.SSS A',
                }),
                align(),
                printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
            ),
            handleExceptions: true,
            json: false,
            colorize: true,
        })
    ],
    exitOnError: false
});

logger.stream = {
    write: function (message) {
        logger.info(message.trim());
    }
};

app.use(morgan(
    ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status ":referrer" ":user-agent"',
    { "stream": logger.stream }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

export default app;
