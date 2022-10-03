const { Sequelize, DataTypes } = require('sequelize')
const configs = require('../config')

const database = new Sequelize(configs.db_name, configs.db_user, configs.db_password, {
    host: configs.db_host,
    dialect: 'mysql'
})

const database_authenticate = async () => {
    await database.authenticate()
    .then(() => console.log('database to_do_list syncronized.'))
    .catch(e => console.log(`error with database to_do_list syncronization: ${e}`))
    return null
}

database_authenticate()

module.exports = { 
    database,
    DataTypes,
}