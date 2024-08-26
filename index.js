const editor1 = document.getElementById("editor1");
const editor2 = document.getElementById("editor2");
const url1 = document.getElementById("url1");
const url2 = document.getElementById("url2");
const pseudocode = document.getElementById("pseudocode");
const domParser = new DOMParser();
var editor1Val = "";
var editor2Val = "";
var url1Val = "";
var url2Val = "";

if (editor1.addEventListener) {
	editor1.addEventListener('input', function() {
		editor1Val = this.value;
		var val = parserToHtml(diff(editor1Val, editor2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}
else if (editor1.attachEvent) {
	editor1.attachEvent('onpropertychange', function() {
		editor1Val = this.value;
		var val = parserToHtml(diff(editor1Val, editor2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}

editor1.addEventListener('keydown', function(e) {
	if (e.key == "Tab") {
	}
});

if (editor2.addEventListener) {
	editor2.addEventListener('input', function() {
		editor2Val = this.value;
		var val = parserToHtml(diff(editor1Val, editor2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}
else if (editor2.attachEvent) {
	editor2.attachEvent('onpropertychange', function() {
		editor2Val = this.value;
		var val = parserToHtml(diff(editor1Val, editor2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}

editor2.addEventListener('keydown', function(e) {
	if (e.key == "Tab") {
	}
});

if (url1.addEventListener) {
	url1.addEventListener('input', function() {
		url1Val = httpGet(this.value);
		var val = parserToHtml(diff(url1Val, url2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}
else if (url1.attachEvent) {
	url1.attachEvent('onpropertychange', function() {
		url1Val = httpGet(this.value);
		var val = parserToHtml(diff(url1Val, url2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}

if (url2.addEventListener) {
	url2.addEventListener('input', function() {
		url2Val = httpGet(this.value);
		var val = parserToHtml(diff(url1Val, url2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}
else if (url2.attachEvent) {
	url2.attachEvent('onpropertychange', function() {
		url2Val = httpGet(this.value);
		var val = parserToHtml(diff(url1Val, url2Val));
		var doc = domParser.parseFromString(val,"text/html");
		const element = doc.getElementById("pseudocode-body");
		pseudocode.parentNode.insertBefore(element,pseudocode);
	});
}

function httpGet(theUrl) {
	// create a new XMLHttpRequest object
	let xmlHttp = new XMLHttpRequest();
	
	// open a GET request with the URL
	xmlHttp.open("GET", theUrl, false);
	
	// send the request
	xmlHttp.send(null);
	// return the response as a string
	return xmlHttp.responseText;
}

function diff(editor1, editor2) {
	var i = 0, j = 0;
	var str = "";

	while (i < editor1.length && j < editor2.length) {
		if ((editor1[i] != editor2[j])&&(editor1.length < editor2.length)) {
			str += editor2[j++];
		}
		else if ((editor1[i] != editor2[j])&&(editor2.length <= editor1.length)) {
			str += editor1[i++];
		}
		else {
			i++;
			j++;
		}
	}

	while (i < editor1.length) {
		str += editor1[i++];
	}

	while (j < editor2.length) {
		str += editor2[j++];
	}

	return str;
}


function parserToHtml(text) {
	var lines = text.split('\n');
	const body = document.getElementById("pseudocode-body");
	if (body !== null) {
				body.remove();
			}
	var result = "<div id=\"pseudocode-body\">";

	for(var i = 0; i < lines.length; i++)
		{
			var tabs = 0;
			for (var t = 0; t < lines[i].length; t++) {
				if (lines[i][t] === "\t") {
					tabs++;
				}
			}

			result += "<p style=\"text-indent:"+ (40*tabs) + "px\">";
			//result += parser(lines[i]);	
			result += lines[i];
			result += "</p>";
		}

	result += "</div>";
	
	return result;
}

