require('dotenv').config();
const express=require('express');
const axios =require('axios');

const app=express();
const PORT=process.env.PORT||5000;


//route
app.get('/me',async(req,res)=>{
   try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact;

    const data = {
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Unable to fetch cat fact at this time.",
      timestamp: new Date().toISOString(),
    });
  }
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

