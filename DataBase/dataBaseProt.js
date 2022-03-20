const Sequelize = require('sequelize')
const connection = new Sequelize ("C19D08_226579_RM_PRO","CLT116579-WRITE-SQL","vtzpq65728JYMAU@?",{
    localhost: "181.41.180.157",
    dialect: "mariadb"

})

module.exports = connection