import express from 'express';
import userController from '../controllers/user.controller'
import validate from '../middlewares/validate.middleware'
import { createUserSchema, editUserSchema} from '../schemas/user.schema'
const router = express.Router();

const {
    createUser,
    findAll,
    findOne,
    updateUser,
    deleteUser,
    login

} = new userController();

router.post('/api/v1/users', validate(createUserSchema),createUser );
router.post('/api/v1/users', findAll)
router.get('/api/v1/users/:id',findOne)
router.patch('/api/v1/:id', validate(editUserSchema),updateUser)
router.delete('/api/v1/users/:id', deleteUser)
router.post('/api/v1/users/login', login)

export default router;