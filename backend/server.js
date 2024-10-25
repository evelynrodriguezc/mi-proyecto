const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

//no puede tener el mismo puerto que el front
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let messages = [];
app.post("/messages", (req, res) => {
    const { message } = req.body
    messages.push(message)
    res.status(201).send()
});

app.get("/messages", (req, res) => {
    res.json(messages)
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})