import { Request, response, Response } from "express";
import roomTypeService from '../services/roomType.service'

const {
    getAllRoomType,
    getRoomType,
    createRoomType,
    getRoomTypeByFilter

} = new roomTypeService()

export default class RoomTypeController {
    async createRoomType( req: Request, res: Response) {
        const data = req.body

        // checks to see if the name has already been used since the name field is unique
     const foundRoomType = await getRoomTypeByFilter({name: data.name}) 
     console.log(foundRoomType)  
     // if found send an error to the user that roomtype exist
       if(foundRoomType) {
        return res.status(409).send({
            message: 'Name already exits',
            success: false
        })
       }
       // else we go ahead to crate the roomtype and send the created room type to user
       const createdRoomType = await createRoomType(data)
       return res.status(201).send({
        message: 'Room-Type created successfully',
        success: true,
        data: createdRoomType
       })
    } catch (err: any){
        response.status(500).send({
            message: 'Failed to create room',
            error: err.message
        })
    }

    async getallRoomType(req: Request, res:Response) {
        // retrieves all the roomtypes in the database
        const existingRoomType = await getAllRoomType()
        return res.status(200).send({
            message: 'Roomtype all fetched successfully',
            success: true,
            data: existingRoomType
        })

    }
} 