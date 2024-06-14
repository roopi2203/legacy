const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const Content = require('./models/contentModel')

app.use(express.json())

app.get('/content', async(req, res) => {
    try {
        const contents = await Content.find({});
        res.status(200).json(contents);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/content/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const content = await Content.findById(id);
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/content', async(req, res) => {
    try {
        const content = await Content.create(req.body)
        res.status(200).json(content);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update Content
app.put('/content/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const content = await Content.findByIdAndUpdate(id, req.body);
        // produk tidak di temukan di databse 
        if(!content) {
            return res.status(404).json({message: `Konten dengan id ${id} tidak di temukan`});
        }
        const updatedContent = await Content.findById(id);
        res.status(200).json(updatedContent);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product
app.delete('/content/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const content = await Content.findByIdAndDelete(id);
        // produk tidak di temukan di databse 
        if(!content) {
            return res.status(404).json({message: `Konten dengan id ${id} tidak di temukan`});
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://sayuti123:ucok123@cluster0.45ehmnd.mongodb.net/Legacy-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(port, () => {
            console.log(`Server berjalan di http://localhost:${port}`);
        });
        console.log('Connected to mongoDB')
    }).catch(() => {
        console.log("error bro!")
    })

