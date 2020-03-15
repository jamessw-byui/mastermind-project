function nextGuess() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var guess = JSON.parse(this.responseText);
            console.log(guess);
            console.log(this.responseText);
            // console.log(personData.personid[0]);
            console.log(guess[0].firstColor);
            table = document.createElement("table");
            headerRow = table.insertRow();
            var firstHeaderLabelCell = headerRow.insertCell();
            firstHeaderLabelCell.innerHTML = "Guess";
            var firstColorHeaderLabelCell = headerRow.insertCell();
            firstColorHeaderLabelCell.innerHTML = "First Color";
            var secondColorHeaderLabelCell = headerRow.insertCell();
            secondColorHeaderLabelCell.innerHTML = "Second Color";
            var thirdColorHeaderLabelCell = headerRow.insertCell();
            thirdColorHeaderLabelCell.innerHTML = "Third Color";
            var fourthColorHeaderLabelCell = headerRow.insertCell();
            fourthColorHeaderLabelCell.innerHTML = "Fourth Color";

            firstGuessRow = table.insertRow();
            var guessLabelCell = firstGuessRow.insertCell();
            guessLabelCell.innerHTML = "1";
            var firstColorGuessCell = firstGuessRow.insertCell();
            firstColorGuessCell.innerHTML = guess[0].firstcolor;
            var secondColorGuessCell = firstGuessRow.insertCell();
            secondColorGuessCell.innerHTML = guess[0].secondcolor;
            var thirdColorGuessCell = firstGuessRow.insertCell();
            thirdColorGuessCell.innerHTML = guess[0].thirdcolor;
            var fourthColorGuessCell = firstGuessRow.insertCell();
            fourthColorGuessCell.innerHTML = guess[0].fourthcolor;
            
            
            

            // firstColorRow = table.insertRow();
            // var firstColorlabelcell = firstColorRow.insertCell();
            // firstColorlabelcell.innerHTML = "First Color";
            // var firstColorCell = firstColorRow.insertCell();
            // firstColorCell.innerHTML = guess[0].firstcolor;

            // secondColorRow = table.insertRow();
            // var secondColorlabelcell = secondColorRow.insertCell();
            // secondColorlabelcell.innerHTML = "Second Color";
            // var secondColorCell = secondColorRow.insertCell();
            // secondColorCell.innerHTML = guess[0].secondcolor;

            // thirdColorRow = table.insertRow();
            // var thirdColorlabelcell = thirdColorRow.insertCell();
            // thirdColorlabelcell.innerHTML = "Third Color";
            // var thirdColorCell = thirdColorRow.insertCell();
            // thirdColorCell.innerHTML = guess[0].thirdcolor;

            // fourthColorRow = table.insertRow();
            // var fourthColorlabelcell = fourthColorRow.insertCell();
            // fourthColorlabelcell.innerHTML = "Fourth Color";
            // var fourthColorCell = fourthColorRow.insertCell();
            // fourthColorCell.innerHTML = guess[0].fourthcolor;
            document.getElementById("guesses").appendChild(table);


        }
    };
    xhttp.open("GET", "/nextGuess", true);
    xhttp.send();

}