const express =require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const users = [
    {id: 1, name: 'John', email: 'hM0U4@example.com'},
    {id: 2, name: 'Jane', email: '4jg0I@example.com'},
    {id: 3, name: 'Bob', email: 'hM0U4@example.com'}
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
console.log(req.body);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});