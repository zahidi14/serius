import mongoose from "mongoose";
import express  from "express";
import cors from "cors";
import Rute from "./routes/Rute.js";


const app = express();
mongoose.connect('mongodb+srv://zahidi:12qwerty@merndb.l61ga.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('db connect'));

app.use(cors());
app.use(express.json());
app.use(Rute);

app.listen(5000, ()=> console.log('server running'));
