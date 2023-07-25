import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)
  .get("/livros/editora", LivroController.listarLivroPorEditora);

export default router;
