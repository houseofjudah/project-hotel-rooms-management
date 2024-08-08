
import mongoose from "mongoose";


const RoomTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true

    }
})

const RoomType = mongoose.model('room-type', RoomTypeSchema)

export default RoomType