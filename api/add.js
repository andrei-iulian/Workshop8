module.exports = function(db){

    db.collection('product').find({'id': '001'}).count(function(err, found) {
        if (err) return console.log(err);

        if (!found) {
            db.collection('product').insertMany(
                [   {'id': '001', 'name': 'Keyboard', 'price': 69.99, 'type': 'Razer', 'description': 'Latest Razer Keyboard, includes LED backlighting, ergonomic keys and matte black finnish'},
                    {'id': '002', 'name': 'Mouse', 'price': 39.99, 'type': 'Logitech', 'description': 'Logitech G502 Mouse, weighted mouse with up to 4000DPI!'},
                    {'id': '003', 'name': 'Head Set', 'price': 100.00, 'type': 'HyperX', 'description': 'HyperX Cloud Flight, latest wireless headset with long battery life and surround sound'}
                ], function(err, res) {
                    if (err) return console.log(err);
                    console.log('Inserted Products');
            });
        }
    });
}