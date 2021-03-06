import express from "express";
import mongoose from "mongoose";
// import route
import route from "./routes/index.js";
// end import route

const app = express();

// db connect
mongoose.connect("mongodb+srv://vouch-admin:vouch@cluster0.xr0cn.mongodb.net/db_yogie_betest?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(express.json());
app.use('/',route);

// listening to port
const PORT = process.env.PORT || 3000;
export default app.listen(PORT,()=> console.log(`Server Running at port: ${PORT}`));