import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../errors/EntityNotFound";

export async function listTasks(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json([]);
    } catch (error) {
        next(error)
    }
};

export async function getTask(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json({ id: 1, name: "Task 1" });
    } catch (error) {
        throw new EntityNotFoundError({ message: "Entity not found", statusCode: 404, code: "ERR_NF" });
    }
};