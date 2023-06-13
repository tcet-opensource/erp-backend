import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { logger } from "#util";
import indexRouter from "#routes/index";
import usersRouter from "#routes/users";
import authRouter from "#routes/auth";

const app = express();

app.use(morgan(
  ":remote-addr - :remote-user \":method :url HTTP/:http-version\" :status \":referrer\" \":user-agent\"",
  { stream: logger.stream },
));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use("/users", usersRouter);
app.use("/auth", authRouter);

export default app;
