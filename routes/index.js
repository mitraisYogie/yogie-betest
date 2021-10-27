import express from "express";
import { getUserData, getUserDataByIdentityNumber, getUserDataByAccountNumber, createUserData, updateUserDataByIdentityNumber, updateUserDataByAccountNum, deleteUserDataByIdentityNumber, deleteUserDataByAccountNum} from "../controllers/userController.js";
import { generateJWT, verifyJWT } from '../controllers/jwtController.js'
 

const router = express.Router();
 
// user_data route
router.get('/users/all', verifyJWT, getUserData);
router.get('/users/accountNum/:accountNum', verifyJWT, getUserDataByAccountNumber);
router.get('/users/identityNumber/:identityNumber', verifyJWT, getUserDataByIdentityNumber)
router.post('/users/create', verifyJWT, createUserData);
router.patch('/users/update/accountNum/:accountNum', verifyJWT, updateUserDataByAccountNum);
router.patch('/users/update/identityNumber/:identityNumber', verifyJWT, updateUserDataByIdentityNumber)
router.delete('/users/delete/accountNum/:accountNum', verifyJWT, deleteUserDataByAccountNum);
router.delete('/users/delete/identityNumber/:identityNumber', verifyJWT, deleteUserDataByIdentityNumber)


//jwt route
 router.get('/jwt/generate', generateJWT);
// export router
export default router;