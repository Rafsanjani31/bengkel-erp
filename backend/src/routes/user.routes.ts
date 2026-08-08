import express from 'express';
import { authMiddleware, adminOnly } from '../middleware/auth';

const router = express.Router();

router.get('/', authMiddleware, adminOnly, (req, res) => {
  res.json({ success: true, message: 'Get all users' });
});

export default router;
