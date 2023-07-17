import Livro from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    Livro.find()
      .then((livros) => {
        res.status(200).json(livros);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Erro ao buscar os livros");
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new Livro(req.body);

    livro.save()
      .then((livroSalvo) => {
        res.status(201).send(livroSalvo.toJSON());
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
      });
  };
}

export default LivroController;
