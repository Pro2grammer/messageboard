// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Store messages in memory
let messages = [];

// Get all messages
app.get('/api/messages', (req, res) => {
    res.json(messages);
});

// Add a new message
app.post('/api/messages', (req, res) => {
    const message = {
        id: Date.now(),
        text: req.body.text,
        author: req.body.author,
        timestamp: new Date().toLocaleString()
    };
    messages.push(message);
    res.status(201).json(message);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
