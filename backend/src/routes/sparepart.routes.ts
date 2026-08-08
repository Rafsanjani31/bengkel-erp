import express from 'express';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Routes akan diimplementasikan
router.get('/', authMiddleware, (req, res) => {
  res.json({ success: true, message: 'Get all spareparts' });
});

export default router;
