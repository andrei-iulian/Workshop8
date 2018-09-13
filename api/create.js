module.exports = function(db){

    db.createCollection('product', function(err, res) {
        if (err) return console.log(err);
    });

}