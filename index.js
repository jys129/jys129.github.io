var titleArray = ["Hey, World."];
var textArray = [
	"Every cloud has a silver lining.",
	"No pain No gain",
	"Fortune favors the brave.",
	"Good luck does not always repeat itself.",
	"If there is no wind, row.",
	"Better late than never.",
	"Where there’s a will, there’s a way.",
	"Actions speak louder than words.",
	"There’s no such thing as a free lunch.",
	"Will is power.",
	"Let bygones be bygones.",
	"Make hay while the sun shines.",
	"Opportunity did not knock until I built a door.",
	"When one door shuts, another opens.",
	"Learn to walk before you run.",
	"The harder you work, the luckier you get.",
	"Strike while the iron is hot.",
	"You can’t have your cake and eat it too.",
];

var titleString = "";
var textString = "";

var titlePos = 0;
var textPos = 0;
var titleSpeed = 100; /* The speed/duration of the effect in milliseconds */
var textSpeed = 5; /* The speed/duration of the effect in milliseconds */

var textDone = false;
var titleDone = false;

function start() {
	titleString = titleArray[getRandomInt(titleArray.length)];
	textString = textArray[getRandomInt(textArray.length)];

	titleSpeed = 1000 / titleString.length;
	textSpeed = 1000 / textString.length;

	typeTitleWriter();
	typeTextWriter();
}

function typeTitleWriter() {
	if (titlePos < titleString.length) {
		document.getElementById("title").innerHTML += titleString.charAt(titlePos);
		titlePos++;
		setTimeout(typeTitleWriter, titleSpeed);
	} else {
		titleDone = true;
		showMail();
	}
}

function typeTextWriter() {
	if (textPos < textString.length) {
		document.getElementById("text").innerHTML += textString.charAt(textPos);
		textPos++;
		setTimeout(typeTextWriter, textSpeed);
	} else {
		console.log("done!");
		textDone = true;
		showMail();
	}
}

function showMail() {
	if (titleDone && textDone) {
		document.getElementById("mail").style.visibility = "visible";
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
