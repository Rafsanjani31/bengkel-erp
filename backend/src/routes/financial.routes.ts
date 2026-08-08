import express from 'express';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/summary', authMiddleware, (req, res) => {
  res.json({ success: true, message: 'Get financial summary' });
});

export default router;
