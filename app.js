const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
    if (err) {return console.log(err)}
    
    const dbName = 'mydb';
    const db = client.db(dbName);

    require('./api/create.js')(db);
    require('./api/add.js')(db);
    require('./api/remove.js')(db);
    require('./api/update.js')(db);
    require('./api/find.js')(db);
});
