import express from 'express';
const router = express.Router();
<<<<<<< HEAD:S.O.SProject/routers/HelpRequestsRouter.js
import controller from '../controllers/HelpRequestController.js';
=======
import controller from '../controllers/Need_helpController.js';
>>>>>>> 4cc448611b32a827d2712d1b2dc42897c031928c:S.O.SProject/routers/Needs_helpRouter.js






router.get('/', controller.getAll);

router.get('/:id', controller.get);

router.post('/', controller.insert);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);


export default router;