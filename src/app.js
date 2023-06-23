import express from "express";


const app = express();

const livros = [
    {id:1, "titulo": "Pai rico, Pai pobre"},
    {id:2, "titulo": "Manual da Eficiencia"}
]

app.get('/', (req,res) => {
    res.status(200).send("Curso de Node");
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})


export default app