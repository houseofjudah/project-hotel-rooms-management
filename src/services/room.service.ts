import IRoom from "../interfaces/room.interface";
import Room
 from "../models/room.model";
 

 export default class RoomServices {
    async createRoom (room : IRoom) {
        const newRoom = await Room.create(room)
        return newRoom
    }

    async editRoom (id: string, data: Partial<IRoom>){
        const updateRoom = await Room.findByIdAndUpdate(id, data)
        return updateRoom
    }
    async getRoom (id: string){
        const room = await Room.findById(id)
        return room
    }
    async getAllRooms() {
        const allRooms = await Room.find({})
        return allRooms
    }
    async getRoomByFilter(filter: {}){
        const roomFilter = await Room.findOne(filter)
        return roomFilter
    }
    async deleteRoom(id:string){
        const deleteRoom = await Room.findByIdAndDelete(id)
        return deleteRoom
    }

 }