import { Request } from "express";
import IUser from './user.interface';

export default interface AuthReqest extends Request {
    user: IUser
}