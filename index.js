import express from 'express';
import mongoose from 'mongoose';
import router from "./router.js";


const PORT = 5000;
const app = express();
const DB_URL = 'mongodb://localhost:27017/';
app.use(express.json());
app.use('', router);

async function startApp () {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    }
    catch (e){
        console.log(e);
    }
}

startApp();
