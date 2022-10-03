const syncronize_models = async (model_to_sync) => {        
    await model_to_sync.sync()
    .then(() => {console.log(`to_dos syncronized`)})
    .catch(e => {console.log(`error with to_dos syncronization: ${e}`)})
    return null
}

module.exports = {
    syncronize_models
}