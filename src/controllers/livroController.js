import livros from "../models/Livro.js";
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

  static listarLivroId = (req, res) => {
    const id = req.params.id;
  
    livros.findById(id)
      .then((livro) => {
        if (!livro) {
          res.status(404).send({ message: 'Livro não encontrado' });
        } else {
          res.status(200).json(livro);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
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

  static atualizarLivro = (req, res) => {
    const id = req.params.id;
    const livroData = req.body;
  
    livros.findByIdAndUpdate(id, { $set: livroData })
      .then(() => {
        res.status(200).send({ message: 'Livro Atualizado com sucesso' });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  static livroId = (req, res) => {
    const id = req.params.id;
    const livroData = req.body;
  
    livros.findById(id, { $set: livroData })
      .then(() => {
        res.status(200).json(this.livroId)
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  static deletarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id)
      .then((livro) => {
        if (!livro) {
          res.status(404).send({ message: 'Livro não encontrado' });
        } else {
          res.status(200).send({ message: 'Livro excluído com sucesso' });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
  
}


export default LivroController;
