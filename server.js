import express from 'express';
import connectDB from './db/config.js';
import { User } from './db/models/user.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.post('/user',async(req,res)=>{
    try {
        const newUser = new User(req.body);
        const result = await newUser.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

app.get('/',async(req,res)=>{
   try {
    const users = User.find();
    res.send(users);
   } catch (error) {
    res.status(400).json({message:error.message});
   }
});

app.listen(PORT,()=>{
    console.log(`App is running on port http://localhost:${PORT}`);
});