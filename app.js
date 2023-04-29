import express from "express";
import path, {dirname} from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from 'url';


import indexRouter from "#routes/index";
import usersRouter from "#routes/users";
import authRouter from "#routes/auth";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

export default app;
