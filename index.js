const express = require('express');
const path = require('path');
require('dotenv').config;

const app = express();

const PORT = process.env.PORT || 5500;

app.use(express.static('./public'));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))