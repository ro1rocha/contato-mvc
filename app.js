// importar o express
const express = require("express");

// importar os roteadores
const ContatosRouter = require('./routes/ContatosRouter');

// criar um servidor/aplicação com o express
let app = express();

// configurar o ejs como o template enginer
app.set('view engine', 'ejs');

// criar rota get no endereço '/' para responder a requisição
app.get('/', (req, res)=>{
    res.send("Olá");
});

// usando os roteadores
app.use('/', ContatosRouter);

//levantar rota / executar e visualizar a aplicação
app.listen(3000, ()=>{console.log("Aplicação escutando a porta 3000")});
