import express from "express";
import { getUserData, getUserDataById, createUserData, updateUserData, deleteUserData } from "../controllers/userController.js";

const router = express.Router();
 
router.get('/', getUserData);
router.get('/:id', getUserDataById);
router.post('/', createUserData);
router.patch('/:id', updateUserData);
router.delete('/:id', deleteUserData);
 
// export router
export default router;