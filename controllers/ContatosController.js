// para teste, assumindo que o usuario logado é o id-1;
const uid = 1;


module.exports = {
    listarContatos: (req, res)=>{
        //importar contato do usuario
        let contatos = require(`../database/contatos_${uid}.json`)
        //res.send("Olá... já ja eu mando seus contatos");
        res.send(contatos);
    },

    capturarContato: (req, res) => {
        //importar o contato do usuario
        let contatos = require(`../database/contatos_${uid}.json`);

        //descobrir o ID que o usuario quer
        let idDoContato = req.params.id;

        //encontrar no array de contatos o id desejado
        let contato = contatos.find(c=> {
            return c.id == idDoContato)};

        //retornar o contato para o cliente ou a mensagem de não existente
        if(contato === undefined){
            res.send("O contato buscado não existe");
        };
        else {
            res.send(contato);
        }
    }
};

// copiar do routes a função do req, res