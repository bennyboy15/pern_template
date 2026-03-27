import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";
import { getIdParamsSchema } from "../schemas/params.schema";

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = getIdParamsSchema.parse(req.params);
    const user = await userService.getUser(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const data = createUserSchema.parse(req.body);
    const user = await userService.createUser(data);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = getIdParamsSchema.parse(req.params);
    const data = updateUserSchema.parse(req.body);
    const user = await userService.updateUser(id, data);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}