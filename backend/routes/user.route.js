import express from 'express';
import { protectUser } from '../middleware/protectUser.js';
import { signup,login,logout } from '../controller/user.controller.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',protectUser,logout);

export default router;