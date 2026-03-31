import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = () => {
    const app = express();
    app
        .disable("x-powered-by")
        .use(morgan("dev"))
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors());

    app.get("/health", (req: Request, res: Response) => {
        res.json({ ok: true });
    });

    return app;
};

const server = createServer();

server.listen(3000, () => {
    console.log("Server running @ localhost:3000");
})