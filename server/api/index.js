import { Router } from 'express';

import auth from './auth';

const router = Router();

// Add USERS Routes
router.use(auth);

export default router;
