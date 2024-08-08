import { Schema, model, Types } from 'mongoose'
import roomTypeSchema from '../schemas/roomType.schema'


const RoomSchema = new Schema({
    name: { type: String,
         required: true,
         trim:true,
         lowercase: true
    },

    price: {
        type: Number,
        unique: false,
        required: true
    },
    roomType: {
        type: Types.ObjectId,
        ref: 'room-type',
        trim: true
    }


})

const Room = model('room', RoomSchema)

export default Room;