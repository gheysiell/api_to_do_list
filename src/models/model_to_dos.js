const db = require('./index')
const syncronize_model = require('./sync_model')

const model_to_dos = db.database.define('to_dos', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    name: db.DataTypes.STRING,
    status: db.DataTypes.BOOLEAN,
})

const call_sync = async () => {
    await syncronize_model.syncronize_models(model_to_dos)
}

call_sync()

module.exports = { 
    model_to_dos
}