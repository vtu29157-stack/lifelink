import express from 'express';
import { createBloodRequest, getBloodRequests } from '../controllers/requestController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
  .get(getBloodRequests)
  .post(protect, createBloodRequest);

export default router;
