import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../prisma-client";
import EntityNotFoundError from "../../../errors/EntityNotFound";

export async function listProjects(req: Request, res: Response, next: NextFunction) {
    try {
        const projects = await prisma.project.findMany();
        return res.status(200).json({projects});
    } catch (error) {
        next(error)
    }
};

export async function getProject(req: Request, res: Response, next: NextFunction) {
    try {
        const project = await prisma.project.findUnique({
            where: {
                id: req.params.id as string
            }
        });
        if (!project) throw new EntityNotFoundError({
            message: "Project not found",
            statusCode: 404,
            code:"ERR_NF"
        });
        return res.status(200).json({project});
    } catch (error) {
        next(error)
    }
};

export async function listProjectTasks(req: Request, res: Response, next: NextFunction) {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                project_id: req.params.id as string
            }
        });
        return res.status(200).json({tasks});
    } catch (error) {
        next(error)
    }
};