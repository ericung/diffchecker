const editor1 = document.getElementById("editor1");
const editor2 = document.getElementById("editor2");
const pseudocode = document.getElementById("pseudocode");
const domParser = new DOMParser();

if (editor1.addEventListener) {
	editor1.addEventListener('input', function() {
	});
}
else if (editor1.attachEvent) {
	editor1.attachEvent('onpropertychange', function() {
	});
}

editor1.addEventListener('keydown', function(e) {
	if (e.key == "Tab") {
	}
});

if (editor2.addEventListener) {
	editor2.addEventListener('input', function() {
	});
}
else if (editor2.attachEvent) {
	editor2.attachEvent('onpropertychange', function() {
	});
}

editor2.addEventListener('keydown', function(e) {
	if (e.key == "Tab") {
	}
});

function diff(editor1, editor2) {
	var i = 0, j = 0;
	var str = "";

	while (i < editor1.length && j < editor2.length) {
		if (editor1[i] != editor2[j]) {
			str += editor2[j];
			j++;
		}
	}

	return str;
}

