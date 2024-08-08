import IRoomType from "../interfaces/roomType.interface";
import RoomType from "../models/roomType.model";


export default class RoomTypeService {
    // create Roomtype
    async createRoomType (roomType: IRoomType){
        const newRoomType = await RoomType.create(roomType)
        return newRoomType
    }
    async getRoomType(id: string){
        const roomType = await RoomType.findById(id)
        return roomType
    }

    async getRoomTypeByFilter(filter: {}){
        const roomFilter = await RoomType.findOne(filter)
        return roomFilter
    }

    async getAllRoomType(){
        const allRoomType = await RoomType.find({})
        return allRoomType
    }
}