import express from 'express';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/stock', authMiddleware, (req, res) => {
  res.json({ success: true, message: 'Get stock data' });
});

export default router;
