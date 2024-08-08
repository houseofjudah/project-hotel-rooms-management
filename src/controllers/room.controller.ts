import {Request, Response}  from 'express';
import roomServices from '../services/room.service';

const {
    getAllRooms,
    getRoom,
    getRoomByFilter,
    createRoom,
    editRoom,
    deleteRoom
} = new roomServices();


export default class RoomComtroller {

// creating Room
async createRoom (req: Request, res: Response) {
    try {
        // get the data the user sends from req.body
        const data = req.body
       // check to see if the user name has already been used since the name field is unique
       const foundRoom = await getRoomByFilter({name: data.name})
       if(foundRoom) {
        return res.status(409).send({
            message: 'Name already exist',
            success: false
        })
       }
       // we go ahead to creating room
       const createdRoom = await createRoom(data)
       return res.status(201).send({
        message: 'Room created successfully',
        success: true,
        data: createdRoom
       })

    } catch(err: any) {
       res.status(500).send({
        message: "Failed to create room",
        error: err.message
       })
    }
}

// Get a Room
 async getRoomById(req: Request, res: Response) {
    // get the id the user sends through req.params
    const roomId = req.params.roomId
    // checks the database to see if a room with the id exits
    const room = await getRoom(roomId)
    // sends an error if it does not exist
    if(!room) {
        return res.status(404).send({
            message: 'Room not found',
            success: false
        })
        // else return the room to the user if it exists
    } else {
        return res.status(200).send({
            message: 'Room Found',
            success: true,
            data: room
        })
    }
    
 }
 // update Room by id
 async updateRoom (req: Request, res: Response){
    // gets the data the user send through req.body which contains the fields the user wishes to update 
        const data = req.body
       // get the id the user sends throught req.params
       const roomId = req.params.roomId
        // checks if the room exisits and sends an error if it doesn't
        const room = await getRoom(roomId)
        // sends an error if it doesn't exist
        if(!room) {
            return res.status(404).send({
                message : 'Room not found',
                success: false
            })
        }
        const updatedRoom = await editRoom(roomId, data)
        return res.status(200).send({
            message: 'Room Updated',
            success: true,
            data: updatedRoom
        })
 }

 async deleteRoom (req: Request, res: Response) {
    // get the id the user sends through req.params
    const {roomId} = req.params
    // checks if the room exists and send and error if it does not
    const room = await getRoom(roomId)
    // sends an error if it does not exist
    if(!room) {
        return res.status(404).send({
            message: 'Room not found',
            success: false
        })
    }
    // else delete the room if a room is found and return the deleted room to the user
     const deletedRoom = await deleteRoom(roomId)
     return res.status(200).send({
        message: 'Room deleted successfully',
        data: deletedRoom
     })
 }

 // Room by filter

 async getRoomByFilter (req: Request, res: Response){
    // get the queries the user sends through req.query
    const { search, roomType, minPrice, maxPrice} = req.query
    // create an empty object which we will populate with available queries since the query fields are optional and it's possible for the user not to include any of the queries
        let queries: any = {}
     // checks if the user sent each of the keywords and attach them to queries object if they did
     if (search) {
        queries.search = search
    } if (roomType) {
        queries.roomType = roomType
    } if (minPrice) {
        queries.price = {$gte: parseInt(minPrice as string)}
    } if (maxPrice) {
        queries.price = {$gte: parseInt(maxPrice as string)}
    }
    // we use the queries object to search for the room that fits the description and sends it to the user
    const roomByFilter = await getRoomByFilter(queries)
    return res.status(200).send({
        message: "Room with filters found successfully",
        success: true,
        data: roomByFilter
    })

 }










































}