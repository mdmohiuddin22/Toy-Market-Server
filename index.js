
const express=require('express');
const cors =require('cors');
const app=express();

//middleware
app.use(cors());
app.use(express.json());

const port =process.env.PORT || 5000;
const toys=require('./toys.json');
app.get('/', (req,res)=>{
    res.send ("server is running")
})

app.get('/toys',(req,res)=>{
    res.send(toys);
})



app.listen(port,()=>{
    console.log(`ser is running on port:${port}`)
})
