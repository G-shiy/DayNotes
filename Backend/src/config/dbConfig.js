const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://admin:admin@HelloWorld.nfevk.mongodb.net/annotations?retryWrites=true&w=majority";
const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;