var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

const randomBetween = (min,max) => min + Math.floor(Math.random() * (max - min + 1));

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	var r1 = randomBetween(0, 255);
	var g1 = randomBetween(0, 255);
	var b1 = randomBetween(0, 255);

	var r2 = randomBetween(0, 255);
	var g2 = randomBetween(0, 255);
	var b2 = randomBetween(0, 255);

	console.log(r1);
	console.log(g1);
	console.log(b1);

	body.style.background = "linear-gradient(to right, " + "rgb("+r1+" "+g1+" "+b1+")" + ", " + "rgb("+r2+" "+g2+" "+b2+")" + ")";

	css.textContent = body.style.background + ";";

}

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);

