const express = require('express');
const mongoose = require('mongoose');
const Lead = require('../model/lead.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mypoc').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.post('/api/leads' , async (req, res) => {
    try{      
        const lead = await Lead.findOneAndUpdate(
      { email: req.body.email },
      req.body,
      {
        new: true,
        upsert: true
      }
    );
    
    res.status(200).json({
      success: true,
      lead
    });
    }catch(err){
        res.status(500).json({ error: 'Failed to create lead' ,message: err.message });
    }
})

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})