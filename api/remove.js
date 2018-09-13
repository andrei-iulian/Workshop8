module.exports = function(db){
    db.collection('product').deleteOne({'id': '002'}, function(err, res) {
        if (err) return console.log(err);
        console.log('Removed Product: id = 002');
    })
}