import { Schema, model, Types } from "mongoose";

const volcanoSchema = new Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minLength: 2
    },
    location: {
        type:String,
        required: [true, "Location is required"],
        minLength: 3
    },
    elevation: {
        type: Number,
        required: [true, "Elevation is required"],
        min: 0
    },
    lastEruption: {
        type: Number,
        required: [true, "Last eruption is required"],
        min:0,
        max: 2024
    },
    imageUrl: {
        type:String,
        required: [true, "Image is required"],
        validate: /^https?:\/\//
    },
    volcanoType: {
        type: String,
        required: true,
        enum: ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield']
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
    voteList: [{
        ref: 'User',
        type: Types.ObjectId,
    }]
    

});

const Volcano = model('Volcano', volcanoSchema);

export default Volcano