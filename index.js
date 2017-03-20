var express = require('express')
var sprintf = require("sprintf-js").sprintf,
    vsprintf = require("sprintf-js").vsprintf
var app = express()

app.get('/', function (req, res) {
    var result = new Array("");

    for (var i=1;i<101;i++){
		var happy = isHappy(i);

		if (happy) {
            result.push(sprintf("%1$i->%2$s", i, happy));
		}
	}

    res.send(result.toString().replace(/,/g,"</br>"));
})

function isHappy(i) {
    var numberToTest = i;
    var hnSeries = new Array();

    do {
		var numberToTestS = numberToTest.toString();
		var sumOfSquares = 0;

		for (var j=0;j<numberToTestS.length;j++) {
			sumOfSquares += Math.pow(numberToTestS[j], 2);
		}

		if (sumOfSquares == 1) {
			return true;
		} else if (hnSeries.includes(sumOfSquares)) {
			return false;
		} else {
			hnSeries.push(sumOfSquares);
		}

        numberToTest = sumOfSquares;
	} while (true)

    return sumOfSquares;
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})