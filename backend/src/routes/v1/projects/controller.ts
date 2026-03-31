import { Request, Response } from "express";

export function listProjects(req: Request, res: Response) {
    res.status(200).json([]);
};

export function getProject(req: Request, res: Response) {
    res.status(200).json({ id: 1, name: "Project 1" });
};

export function listProjectTasks(req: Request, res: Response) {
    res.status(200).json([]);
};