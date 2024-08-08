import joi from 'joi'

const roomTypeSchema = joi.object({
    name: joi.string( ).required().trim().lowercase()

})

export default roomTypeSchema