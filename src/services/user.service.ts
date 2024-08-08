import IUser from "../interfaces/user.interface";
import userModel from "../models/user.model";

export default class UserService {
    // creating a User
    async create(data: IUser){
        return await userModel.create(data)
    }
    // editing a User
    async update(id: string, update: Partial<IUser>) {
        return await userModel.findByIdAndUpdate(id, update, {new: true})
    }
    //deleting a user 
    async remove(id: string){
        return await userModel.findByIdAndDelete(id)
    }
    //finding a Single user bt id
    async findById (id: string) {
        return await userModel.findById(id)
    }
    //find a Single user by name
    async findByUsername(username: string) {
        return await userModel.findOne({username: username})
    }
    // find all Users
    async findAll() {
        return await userModel.find({})
    }
};