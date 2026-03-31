import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import v1 from "./routes/v1";

export const createServer = () => {
    const app = express();
    app
        .disable("x-powered-by")
        .use(morgan("dev"))
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors());

    // EXAMPLE ROUTE TO CHECK SERVER HEALTH
    app.get("/health", (req: Request, res: Response) => {
        res.json({ ok: true, environment: config.env });
    });

    // ROUTER
    app.use("/v1", v1);

    return app;
};

const server = createServer();

server.listen(config.port, () => {
    console.log(`Server running @ port:${config.port}`);
})