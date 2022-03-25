// importar o express
const express = require("express");

// importar o ContatosController
const ContatosController = require('../controllers/ContatosController')

// criar o roteador
const router = express.Router();

//pedir para o roteador definir uma rota (método: ger, endereço)
//router.get('/contatos', (req, res)=>{
//    res.send("Olá... já já eu mando seus contatos.")
//});

// mudando a rota get para controller
router.get('/contatos', ContatosController.listarContatos);
router.get('/contatos/:id',ContatosController.capturarContato);
//router.get('/contatos/create', ContatosController.mostrarTelaDeCadastro)
//exportar o roteador
module.exports = router;

