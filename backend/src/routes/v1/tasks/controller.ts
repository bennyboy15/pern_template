import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../errors/EntityNotFound";
import { prisma } from "../../../prisma-client";

export async function listTasks(req: Request, res: Response, next: NextFunction) {
    try {
        const tasks = await prisma.task.findMany();
        return res.status(200).json({tasks});
    } catch (error) {
        next(error)
    }
};

export async function getTask(req: Request, res: Response, next: NextFunction) {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: req.params.id as string
            }
        });
        if (!task) return new EntityNotFoundError({ message: "Task not found", statusCode: 404, code: "ERR_NF" });
        return res.status(200).json({task});
    } catch (error) {
        throw new EntityNotFoundError({ message: "Entity not found", statusCode: 404, code: "ERR_NF" });
    }
};