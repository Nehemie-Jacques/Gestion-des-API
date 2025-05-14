import { Router } from 'express';
import dogsController from '../Controllers/controllers.js';

const router = Router();

router.get('/', dogsController.getAllDogs);
router.post('/create', dogsController.createDog);
/*router.put('/update/:id', dogsController.updateDog);
router.delete('/delete/:id', dogsController.deleteDog); */

export default router;