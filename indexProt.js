const connection = require('./DataBase/dataBaseProt')
connection
.authenticate()
.then(()=>{
    console.log('Conexao com o banco feita com sucesso!')
})
.catch((msgErro) =>{
    console.log(msgErro)
})

