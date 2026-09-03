const express = require("express");

const app = express();

const PORT = 3004;

app.use(express.json());

let students = [
    {
        id:1,
        name: "Rahul",
        course: "MCA",
        age: 22
    },
    {
        id: 2,
        name : "Sahil",
        course : "MCA",
        age: 23
    },
    {
        id: 3,
        name : "Kumar",
        course : "MCA",
        age: 24
    }

];

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Student REST API"
    });
});

app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});


app.listen(PORT, () => {
    console.log(`REST API running at http://localhost:${PORT}`)
});