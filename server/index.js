const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Keren cok!"
    })
})

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});