const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/getRate', function (req, res) {
	var weight = Math.ceil(req.query.weight);
    var mailType = req.query.mailType;
    var price = 0;
    if(mailType === 'lettersStamped') {
    	if (weight > 4) {
    		price = 1.00;
    	} else {
    		price = .40 + (weight * .15);
    	}
    	price = price.toFixed(2);
    } else if(mailType === 'lettersMetered') {
    	if (weight > 4) {
    		price = .95;
    	} else {
    		price = .35 + (weight * .15);
    	}
    	price = price.toFixed(2);
    } else if(mailType === 'largeEnvelopesFlats') {
    	if (weight > 13) {
    		price = 3.40;
    	} else {
    		price = .80 + (weight * .20);
    	}
    	price = price.toFixed(2);
    } else if(mailType === 'firstClassPackageServiceRetail') {
    	if(weight < 5) {
    		price = 3.80;
    	} else if(weight < 9) {
    		price = 4.60;
    	} else if(weight < 13) {
    		price = 5.30;
    	} else if(weight >= 13) {
    		price = 5.90;
    	}
    	price = price.toFixed(2);
    }

    res.render('pages/rates', {
        weight: weight,
        mailType: mailType,
        price: price
    });
});


