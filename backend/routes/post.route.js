import express from 'express';
import { protectUser } from '../middleware/protectUser.js';
import { postPrompt,fetchPrompt } from '../prompt/postPromt.js';

const router = express.Router();

router.post('/generate',protectUser,postPrompt);
router.get('/getpost',protectUser,fetchPrompt);

export default router;