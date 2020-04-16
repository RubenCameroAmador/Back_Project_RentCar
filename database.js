const mongoose = require('mongoose');
const uri = 'mongodb://rdcamero:1234@cluster0-shard-00-00-vi3e6.mongodb.net:27017,cluster0-shard-00-01-vi3e6.mongodb.net:27017,cluster0-shard-00-02-vi3e6.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));