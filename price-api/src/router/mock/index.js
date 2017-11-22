import express from 'express';

const router = express.Router();
import {hotAreas,departureAreas,destinationAreas} from './area';

router.get('/hotAreas',hotAreas);
router.get('/departureAreas',departureAreas);
router.get('/destinationAreas',destinationAreas);

router.use('*',(req,res) => {
    res.end('404 ERROR');
});

export default  router;