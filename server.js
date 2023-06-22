const http = require('http')
const port = 3000;

const rota = {
    '/': 'curso de node',
    '/livros': 'Lista de livros',
    '/autores': 'Lista de autores',
    '/editores': 'Lista de editores',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rota[req.url]);
}) 


server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})