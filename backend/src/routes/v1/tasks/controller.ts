import { Request, Response } from "express";

export function listTasks(req: Request, res: Response) {
    res.status(200).json([]);
};

export function getTask(req: Request, res: Response) {
    res.status(200).json({ id: 1, name: "Task 1" });
};