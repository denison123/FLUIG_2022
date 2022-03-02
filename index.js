const express = require('express'); // importar o modulo do express
const app = express(); // armazenar o express dentro da variavel app
const bodyParser = require('body-parser'); 
const connection = require('./DataBase/dataBase')
const Pergunta = require('./DataBase/Pergunta') // importando o medel pergunta

// validação de conexao com banco de dados
// connection
// .authenticate()
// .then(()=>{
//     console.log('Conexao com o banco feita com sucesso!')
// })
// .catch((msgErro) =>{
//     console.log(msgErro)
// })

app.set('view engine','ejs'); //informa ao express para fazer uso so EJS como view engine
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas
app.get('/', (req, res)=>{
    Pergunta.findAll({raw:true}).then(perguntas =>{     // select * from perguntas
        res.render('index',{
            perguntas:perguntas
        })
    }) 
    
});
app.get('/perguntar', (req, res)=>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({        // inserindo dados no banco de dados
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect('/')
    })
})

// inicialização do servidor
app.listen(8085,()=>{
    console.log("App rodando")
});