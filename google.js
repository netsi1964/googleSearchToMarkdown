var google = require('google');
var merge = require('merge');

var OSXChrome42 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36";
var IOSIPad2Safari = "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53";

google.requestOptions = {
	headers: {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'en;q=0.5',
		'Cache-Control': 'max-age=0',
		'Connection': 'keep-alive',
		'DNT': 1
		// "User-Agent": OSXChrome42
	}
}

google.resultsPerPage = 10;
var nextCounter = 0;
var query = "KS 6456-90 F X";
var start = new Date();
var CRLF = "\n";

var output = "# Google search for `" + query + "` " + CRLF;
output += "> Using user-agent: `" + google.requestOptions.headers["User-Agent"] + "`" + CRLF + CRLF;
google(query, function (err, next, links) {
	if (err) console.error(err)
	for (var i = 0; i < links.length; ++i) {
		output += i + ".  " + links[i].title + ": [" + links[i].link + "](" + links[i].link + ") " + links[i].description.substr(0, 50) + "&#8230;" + CRLF;
	}


	if (nextCounter < 4) {
		nextCounter += 1
		if (next) {
			next()
		}
	} else {
		console.log(output);
	}
})