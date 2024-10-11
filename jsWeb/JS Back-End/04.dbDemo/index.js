import mongoose from "mongoose";

try {
    await mongoose.connect('mongodb://localhost:27017/test1')
    console.log('YESSS')
    
} catch(err) {
    console.log('NOO')
    console.log(err.message)

}