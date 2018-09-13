module.exports = function(db) {
    db.collection('product').find({}).toArray(function(err, res) {
        if (err) return console.log(err);
        console.log(res);
    });
}