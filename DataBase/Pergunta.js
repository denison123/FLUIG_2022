const Sequelize = require('sequelize'); // importação do sequelize
const connection = require('./dataBase'); // importando banco de dados

// definição de model
const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// força a sincronização no bando de dados, caso nao estenha ele cria, se cado exista ela nao cria
// Pergunta.sync({force:false}).then(()=>{
//     console.log('Tabela alimentada com sucesso')
// }).catch((msgErro) =>{
//     console.log(msgErro)
// })