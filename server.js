import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("this is the root");
});

app.listen(PORT,()=>{
    console.log(`App is running on port http://localhost:${PORT}`);
});