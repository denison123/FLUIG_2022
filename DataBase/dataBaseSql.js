const Sequelize = require('sequelize')
const connection = new Sequelize('guiaperguntas','root','root',{
    host: '127.0.0.1',
    dialect:'mysql',
    port: 3306
})


module.exports = connection