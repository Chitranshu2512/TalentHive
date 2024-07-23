import { Router } from 'express';
import { createOpportunity, getOpportunities, applyForOpportunity } from '../controllers/opportunityController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, createOpportunity);
router.get('/', getOpportunities);
router.post('/:id/apply', authMiddleware, applyForOpportunity); // Add this line

export default router;
