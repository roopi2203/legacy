const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 3000;

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = 'mydatabase';

let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    })
    .catch(error => console.error(error));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/data', async (req, res) => {
    try {
        const collection = db.collection('mycollection');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
