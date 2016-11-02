var request = require('request');
// error contains problems with the http request, like no wifi
request(
	'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', 
	function (error, response, body) {
		if (!error && response.statusCode == 200) { // 200 == succesful request
			var parsedData = JSON.parse(body);
			// log the current conditions
	    	var conditions = parsedData["query"]["results"]["channel"]["item"]["condition"]; 
	    	console.log("Conditions for " + conditions["date"]);
	    	console.log("Temp: " + conditions["temp"] + " Precipition: " + conditions["text"]);
	    } else {
			// Should handle a different statusCode for completeness IMNSO
			console.log("Error!");
			console.log(error);
	    }
})
