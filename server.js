const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;  

app.use(cors());  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/submit', (req, res) => {
    console.log('Received request body:', req.body);  
    res.json(req.body);  
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

