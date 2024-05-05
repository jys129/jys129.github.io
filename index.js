var i = 0;
var txt = "Hey, World."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("title").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
