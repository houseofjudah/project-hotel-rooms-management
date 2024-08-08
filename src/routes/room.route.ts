import express from 'express'
import roomControllers from '../controllers/room.controller'
import authenticate from '../middlewares/authentication.middleware'
import validate from '../middlewares/validate.middleware'
import isAdmin from '../middlewares/authorization.middleware'
import { creatRoomSchema, editRoomSchema }  from '../schemas/room.schema'
const router = express.Router();

const {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoomByFilter,
    getRoomById
} = new roomControllers()

router.post('/api/v1/rooms', authenticate, isAdmin, validate(creatRoomSchema), createRoom)
router.get('/api/v1/rooms', getRoomByFilter)
router.get('/api/v1/rooms/:roomId', getRoomById)
router.patch('/api/v1/rooms/:roomId', authenticate, isAdmin, validate(editRoomSchema), updateRoom)
router.delete('/api/v1/rooms/:roomId', authenticate, isAdmin, deleteRoom)


export default router