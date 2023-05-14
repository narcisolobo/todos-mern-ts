import { connect } from 'mongoose';
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB = process.env.DB;
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB}`;
const options = {
    retryWrites: true,
};
async function dbConnect() {
    try {
        await connect(URI, options);
        console.log('DB Connection successful.');
    }
    catch (err) {
        console.log('err:', err);
    }
}
export default dbConnect;
