import { Router } from "express";
import * as userController from "../controller/user.controller";
import { protectRoute } from "../middleware/protectRoute.middleware";

const router = Router();

router.get("/", protectRoute, userController.getUsers);
router.get("/:id", protectRoute, userController.getUser);
router.post("/", protectRoute, userController.createUser);
router.patch("/:id", protectRoute, userController.updateUser);

export default router;