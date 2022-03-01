// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs') // usar ejs como view engine
// app.use(express.static('public')) // carregar arquivos css

// // exibindo variaves no html 
//  app.get('/:nome/:lang', (req, res) => {
//      var nome = req.params.nome
//      var lang = req.params.lang
//      var exibirMsg = true;
//      var produtos = [
//         {nome:'doritos',peso:'500g',valor:"12,00"},
//         {nome:'fantaLaranja',litros:'2lt',valor:"10,00"},
//         {nome: 'coca-cloba',litros: "2,5lt",valor:'15,00'}
//      ];
//     res.render('index',{
//         nome:nome,
//         lang:lang,
//         empresa:'socib',
//         inscritos: 1,
//         msg:exibirMsg,
//         produtos:produtos

//     })
//  })

//  app.get('/home', (req, res) => {
//      res.render('home')
//  })




//  app.listen(8080,()=>{
//      console.log('app rodando')
//  })