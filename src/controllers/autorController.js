import autores from "../models/Autor.js";
import Autor from "../models/Autor.js";

class AutorController {
  static listarAutores = (req, res) => {
    Autor.find()
      .then((autores) => {
        res.status(200).json(autores);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Erro ao buscar os autores");
      });
  };

  static listarAutorId = (req, res) => {
    const id = req.params.id;
  
    autores.findById(id)
      .then((autor) => {
        if (!autor) {
          res.status(404).send({ message: 'Autor não encontrado' });
        } else {
          res.status(200).json(autor);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
  
  static cadastrarAutor = (req, res) => {
    let autor = new Autor(req.body);

    autor.save()
      .then((autorSalvo) => {
        res.status(201).send(autorSalvo.toJSON());
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar Autor.` });
      });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;
    const autorData = req.body;
  
    autores.findByIdAndUpdate(id, { $set: autorData })
      .then(() => {
        res.status(200).send({ message: 'Autor Atualizado com sucesso' });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  static autorId = (req, res) => {
    const id = req.params.id;
    const autorData = req.body;
  
    autores.findById(id, { $set: autorData })
      .then(() => {
        res.status(200).json(this.autorId)
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  static deletarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id)
      .then((autor) => {
        if (!autor) {
          res.status(404).send({ message: 'Autor não encontrado' });
        } else {
          res.status(200).send({ message: 'Autor excluído com sucesso' });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
  
}


export default AutorController;
