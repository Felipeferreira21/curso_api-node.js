import express, { json } from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get('/livros', (req, res) => {
    livros.find()
      .then((livros) => {
        res.status(200).json(livros);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Erro ao buscar os livros");
      });
  });
  
app.get('/livros/:id', (req, res) => {
    let index = buscaId(req.params.id);
    res.json(livros[index]);
    
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaId(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros); 
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaId(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
        
})

function buscaId(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app