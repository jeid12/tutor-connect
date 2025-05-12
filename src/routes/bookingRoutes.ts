import { Router } from 'express';
import * as controller from '../controllers/bookingController';

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteById);
router.get('/student/:studentId', controller.getByStudent);
router.get('/tutor/:tutorId', controller.getByTutor);

export default router;