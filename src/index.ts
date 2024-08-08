import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import connectDB from "./db.config";
import userRoutes from "./routes/user.route";
import roomRoutes from './routes/room.route';
import roomTypeRoutes from "./routes/roomType.route";
import {Request, Response} from 'express'
import cookie from 'cookie-parser';

const app = express();
const port = process.env.PORT;
connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie())
app.use(userRoutes)
app.use( roomRoutes )
app.use( roomTypeRoutes )




app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`,'And' +connectDB);
});