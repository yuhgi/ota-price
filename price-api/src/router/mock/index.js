import express from 'express';

const router = express.Router();
import {hotAreas,departureAreas,destinationAreas} from './area';

router.get('/area/hotAreas',hotAreas);
router.get('/area/departureAreas',departureAreas);
router.get('/area/destinationAreas',destinationAreas);

router.use('*',(req,res) => {
    res.end('404 ERROR');
});

export default  router;