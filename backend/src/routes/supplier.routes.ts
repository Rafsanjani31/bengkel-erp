import express from 'express';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.json({ success: true, message: 'Get all suppliers' });
});

export default router;
