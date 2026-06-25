import express from 'express';
import { getDonors, registerDonor } from '../controllers/donorController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
  .get(getDonors)
  .post(protect, registerDonor);

export default router;
