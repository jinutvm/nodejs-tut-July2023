const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: [true,'product name must be provided'],
        maxLength: [20, 'Name cannot be greater than 20 charactors']
    },
    price: {
        type: Number,
        required: [true,'product price must be provided']
    },
    company: {
        type: String,
        // To limit the possible values provide enum. 
        //enum: ['ikea','liddy','caressa','marcos']
        // to provide a message if any other fields are given, the below option can be done
        enum: {
            values : ['ikea','liddy','caressa','marcos'],
            message: '{VALUE} is not supported'
        }
    }
})


module.exports = mongoose.model('Product',ProductSchema)