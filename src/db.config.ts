import  mongoose from 'mongoose';
mongoose.set('strictQuery', true);



export default function  connectDB() {
    mongoose.connect(process.env.DB_URI!)
    .then(()=> {
        console.log('Connected to MongoDB')
    })
    .catch((err)=> {
        console.log('Unable to connect to MongoDB');
        
    })

}
