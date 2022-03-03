const app = require('./DataBase/dataBaseProt')
app.user(passport.session())
.then(()=>{
    console.log('Conexao com o banco feita com sucesso!')
})
.catch((msgErro) =>{
    console.log(msgErro)
})

