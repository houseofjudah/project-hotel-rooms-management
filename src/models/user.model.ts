import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    role: {
        type: String,
        trim: true,
        enum: ['guest', 'admin'],
        default: 'guest'
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        const salt = await bcrypt.genSalt(6);
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
    }
    next()

})

const userModel = model('user', userSchema)

export default userModel

