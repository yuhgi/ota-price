import express from 'express';

import api from './api';
import mock from './mock';

const router = express.Router();

router.use('/api',api);
router.use('/mock',mock);

export default router;
