const express = require('express'); // importar o modulo do express
const app = express(); // armazenar o express dentro da variavel app
const bodyParser = require('body-parser'); 
const connection = require('./DataBase/dataBase.js');

connection
    .authenticate()
    .then(()=>{
        console.log('Conectado ao banco')
    }).catch((msgError) => {
        console.error(msgError)
    })


app.set('view engine','ejs'); //informa ao express para fazer uso so EJS como view engine
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas
app.get('/', (req, res)=>{
    res.render('index')
});
app.get('/perguntar', (req, res)=>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send('Formlario recebido' + ' ' + titulo + ' ' + descricao)
})

// inicialização do servidor
app.listen(8085,()=>{
    console.log("App rodando")
});