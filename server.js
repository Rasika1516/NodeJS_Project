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
        console.log("Record has been added");
        
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

app.get('/',async(req,res)=>{
   try {
    const users = await User.find({});
    res.json(users);
    console.log("Records fetched successfully");
   } catch (error) {
    res.status(400).json({message:error.message});
   }
});

app.put("/update/:id",async(req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        // const result = user.update(req.body);
        res.send(updatedUser);
        console.log("Record has been updated successfully"); 
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

app.listen(PORT,()=>{
    console.log(`App is running on port http://localhost:${PORT}`);
});