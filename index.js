var CURSOR_CHAR = "";
var titleArray = ["Hey, World."];
var textArray = [
    "Every cloud has a silver lining.",
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
    "Don’t make a mountain out of an anthill.",
    "Better late than never.",
    "Success comes to those who never give up.",
    "The moment you give up, is the moment you let someone else win.",
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
        document.getElementById("title").innerHTML = document.getElementById("title").innerHTML.replace(CURSOR_CHAR, "") + titleString.charAt(titlePos) + CURSOR_CHAR;
        document.getElementById("title2").innerHTML = document.getElementById("title").innerHTML;
        titlePos++;
        setTimeout(typeTitleWriter, titleSpeed);
    } else {
        titleDone = true;
        document.getElementById("title").innerHTML = document.getElementById("title").innerHTML.replace(CURSOR_CHAR, "");
        document.getElementById("title2").innerHTML = document.getElementById("title").innerHTML;
        showMail();
    }
}

function typeTextWriter() {
    if (textPos < textString.length) {
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.replace(CURSOR_CHAR, "") + textString.charAt(textPos) + CURSOR_CHAR;
        textPos++;
        setTimeout(typeTextWriter, textSpeed);
    } else {
        console.log("done!");
        textDone = true;
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.replace(CURSOR_CHAR, "");
        showMail();
        setTimeout(function () {
            hideMail();
            deleteTextWriter();
        }, titleSpeed * 50);
    }
}

function deleteTextWriter() {
    textDone = false;
    if (textPos >= 0) {
        document.getElementById("text").innerHTML = textString.substring(0, textPos);
        textPos--;
        setTimeout(deleteTextWriter, textSpeed / 2);
    } else {
        console.log("done!");
        setTimeout(function () {
            textString = textArray[getRandomInt(textArray.length)];
            typeTextWriter();
        }, textSpeed * 20);
    }
}

function showMail() {
    if (titleDone && textDone) {
        document.getElementById("mail").style.visibility = "visible";
    }
}

function hideMail() {
    document.getElementById("mail").style.visibility = "hidden";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const cottonCursor = new Cotton("#cotton-cursor", {
    speed: 0.9,
});
