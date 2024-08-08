import express from 'express';
import roomTypeController from '../controllers/roomType.controller';
import authenticate from '../middlewares/authentication.middleware';
import isAdmin from '../middlewares/authorization.middleware';
import validate from '../middlewares/validate.middleware';
import roomTypeSchema from '../schemas/roomType.schema';
const router = express.Router();

const {
    createRoomType,
    getallRoomType
} = new roomTypeController();

router.post('/api/v1/room-types', authenticate, isAdmin, validate(roomTypeSchema), createRoomType)
router.get('/api/v1/room-types', getallRoomType)

export default router