// var	products= [{
// 			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
// 			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
// 			"image": "1.jpeg",
// 			"quantity":"10"
// 		},
// 		{
// 			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
// 			"description": "15.2cm (5.99) large display",
// 			"image": "2.jpeg",
// 			"quantity":"20"
// 		},
// 		{
// 			"title": "Apple iphone 32GB",
// 			"description": "11.4 cm(4.7)display",
// 			"image": "3.jpeg",
// 			"quantity":"30"
// 		},
// 		{
// 			"title": "red mi note 6 pro",
// 			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
// 			"image": "4.jpeg",
// 			"quantity":"40"
// 		}
// 	];

var bodyparser = require('body-parser');
var fs = require('fs');

var urlencodedParser = bodyparser.urlencoded({extended:false});

var tempproducts = fs.readFileSync('cat.json');
var jsonproducts = JSON.parse(tempproducts);


module.exports = function(app) {

    app.get('/', function(req, res) {
        console.log('Get request received');
        res.render('products', {data: jsonproducts.products});
    });
    
    // app.get('/:item', function(req, res) {
    //     console.log('Edit request received');
    //     console.log(req.params.item);
    //     res.render('products', {data: jsonproducts.products})
    // });

    app.post('/', urlencodedParser, function(req, res) {
        // get data from the view and add it to mongodb
        console.log(req.body);
        
        // data.push(req.body);
        // res.json({todos: data});
        for(var i=0;i<jsonproducts.products.length;i++) {
            console.log("here");
            if (jsonproducts.products[i].title === req.body.titleOld) {
                jsonproducts.products[i].title = req.body.title;
                jsonproducts.products[i].description = req.body.prodesc;
                jsonproducts.products[i].quantity = req.body.quantity;
            }
        }    
            const towrite = JSON.stringify(jsonproducts);

            fs.writeFileSync('cat.json', towrite);
    
            var tempres = fs.readFileSync('cat.json');
            var jsonres = JSON.parse(tempres);
            res.json({data: jsonres.products});

        
    });
    
    app.delete('/:item', function(req, res) {
        console.log('Delete request received');
        console.log(req.params.item);
        jsonproducts.products = jsonproducts.products.filter(function(prod) {
            return prod.title.replace(/ /g, '-') !== req.params.item;
        });
        const towrite = JSON.stringify(jsonproducts);

        fs.writeFileSync('cat.json', towrite);

        var tempres = fs.readFileSync('cat.json');
        var jsonres = JSON.parse(tempres);
        res.json({data: jsonres.products});
    });
    
    };