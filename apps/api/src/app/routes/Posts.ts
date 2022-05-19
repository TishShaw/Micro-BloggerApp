import { Request, Response, Router } from 'express';
import { dbCollection } from '../../database';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const result = await dbCollection.find({}).toArray();

    return res.json({
        status: 'ok',
        result,
    });
});

router.post('/', (req: Request, res: Response) => '');
router.post('/:id/comment',(req: Request, res: Response) => '');


export { router as PostRoutes };