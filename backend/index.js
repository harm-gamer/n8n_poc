const express = require('express');
const mongoose = require('mongoose');
const Email = require('./model/lead.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mypoc').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.post('/api/leads' , async (req, res) => {
    try{      
            console.log('Received Body:', req.body);

        const lead = await Email.create(req.body);
    
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