const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const connectionString = process.env.DATABASE_URL || "postgres://cmalkffnikczsk:155be07472b619fbea272135847c4746404cee34dcca79aef3902a70e749d848@ec2-23-22-156-110.compute-1.amazonaws.com:5432/d5e2pts0k6k4?ssl=true";
const { Pool } = require('pg');
const pool = new Pool({ connectionString: connectionString });

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/initiate', function (req, res) {
	let firstColor = req.query.firstColor;
    let secondColor = req.query.secondColor;
    let thirdColor = req.query.thirdColor;
    let fourthColor = req.query.fourthColor;

    var resRows;
    var sql1 = "Update codePossibilities SET possibleMatch = true;";
    pool.query(sql1, function(err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        resRows = result.rows;
        console.log(resRows);
    });

    var sql2 = "DELETE FROM guesses;";
    pool.query(sql2, function(err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        resRows = result.rows;
        console.log(resRows);
    });
    
    res.render('pages/mastermind', {
        firstColor: firstColor,
        secondColor: secondColor,
        thirdColor: thirdColor,
        fourthColor: fourthColor
    });
});

app.get('/nextGuess', function (req, res) {

    var resRows;
    var sql1 = "Select firstColor, secondColor, thirdColor, fourthColor FROM codePossibilities Where firstColor = 'green' AND secondColor = 'orange' AND thirdColor = 'pink' AND fourthColor = 'purple'";
    pool.query(sql1, function(err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        resRows = result.rows;
        console.log(resRows);
        res.json(resRows)
    });
});


