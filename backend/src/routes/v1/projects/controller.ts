import { NextFunction, Request, Response } from "express";

export async function listProjects(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json([]);
    } catch (error) {
        next(error)
    }
};

export async function getProject(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json({ id: 1, name: "Project 1" });
    } catch (error) {
        next(error)
    }
};

export async function listProjectTasks(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json([]);
    } catch (error) {
        next(error)
    }
};