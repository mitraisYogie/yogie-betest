import express from "express";
import { getUserData, getUserDataById, createUserData, updateUserData, deleteUserData, getUserDataByIdentityNumber, getUserDataByAccountNumber } from "../controllers/userController.js";
import { generateJWT, verifyJWT } from '../controllers/jwtController.js'
 

const router = express.Router();
 
// user_data route
router.get('/users/all', verifyJWT, getUserData);
router.get('/users/:id', verifyJWT, getUserDataById);
router.get('/users/accountNum/:accountNum', verifyJWT, getUserDataByAccountNumber);
router.get('/users/userId/:userId', verifyJWT, getUserDataByIdentityNumber)
router.post('/users/create', verifyJWT, createUserData);
router.patch('/users/update/:id', verifyJWT, updateUserData);
router.delete('/users/delete/:id', verifyJWT, deleteUserData);

//jwt route
 router.get('/jwt/generate', generateJWT);
// export router
export default router;