import { connect } from "mongoose";

export default async function mongooseInit() {
    try {
        const url =  'mongodb://localhost:27017';

        await connect(url, { dbName: 'volcanoes' }); // imeto на db е според изпита

        console.log('Successfully connected to DB!');
    } catch (err) {
        console.log('Cannot connect to DB!' + err.message);
    }
}