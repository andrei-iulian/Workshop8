module.exports = function(db){
    db.collection('product').updateOne({'id': '001'}, {$set: {'price' : 54.99}}, function(err, res) {
        if (err) return console.log(err);
        console.log('Updated id: 001 Price -> 54.99');
    })
}