import express from "express";
import myUserController from "../controllers/myUserController";

const router = express.Router();

// /api/my/user
router.get("/my/user", myUserController.getCurrentUser);
router.post("/my/user", myUserController.createCurrentUser);
router.put("/my/user", myUserController.updateCurrentUser);

export default router;
