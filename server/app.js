const express = require('express')

const app = express();

app.get('/',(req, res) => {
    res.send('<h1>Welcome to the HomePage<h1>');
})

app.use((req, res) =>{
        res.status(404).send('<h1> 404 - Page Not Found </h1>');
});

app.listen(3001, () => {
    console.log("runing at http://localhost:3001");
});
