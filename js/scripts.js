// const fs = require('fs').promises;
// import fs from "../node_modules/fs-js/index.js";
// const db = 


var streak = 0;
var main = document.getElementsByTagName("main")[0];

var changingEasyFlags = allEasyFlags;
var changingMediumFlags = allMediumFlags;
var changingHardFlags = allHardFlags;

function wrongButtons(difficulty) {
	document.getElementsByTagName("footer")[0].innerHTML += "<br>INCORRECT!";
	changeColors();
	streak = 0;
	updateStreak();
	setTimeout(generateQuestion, 3500, difficulty);
}

function correctButton(difficulty) {
	document.getElementsByTagName("footer")[0].innerHTML += "<br>CORRECT!";
	changeColors();
	streak++;
	updateStreak();
	setTimeout(generateQuestion, 1500, difficulty);
}

function updateStreak() {
	document.getElementsByTagName("footer")[0].innerHTML =
		"<br><p id='streakNum'>Streak: " + streak + "</p>";
}
function changeColors() {
	for (let i = 0; i < 3; i++) {
		document.getElementsByClassName("incorrect")[i].style.transition = "background-color 0.2s";
		document.getElementsByClassName("incorrect")[i].style.transition = "transform 0.4s";
		document.getElementsByClassName("incorrect")[i].style.backgroundColor =
			"red";
		document.getElementsByClassName("incorrect")[i].disabled =
			true;
	}
	document.getElementsByClassName("correct")[0].style.transition = "background-color 0.2s";
	document.getElementsByClassName("correct")[0].style.transition = "transform 0.4s";
	document.getElementsByClassName("correct")[0].style.backgroundColor = "green";
	document.getElementsByClassName("correct")[0].disabled = true;
}

function easyBtn() {
	generateQuestion("easy");
}
function mediumBtn() {
	generateQuestion("medium");
}
function hardBtn() {
	generateQuestion("hard");
}

function congratsScr(difficulty) {
	main.innerHTML =
		"<p>Congrats! You got all the " + difficulty + " flags correct!</p>";
}

function generateQuestion(difficulty) {
	document.getElementsByTagName('header')[0].innerHTML = "<button onclick='difficultyButtons()'>Back To Menu</button>"

	if (
		changingEasyFlags.length == 0 ||
		changingMediumFlags.length == 0 ||
		changingHardFlags.length == 0
	) {
		congratsScrn(difficulty);
	}

	if (difficulty == "easy") {
		var easyFlags = allEasyFlags;
		var randCountry = Math.floor(Math.random() * changingEasyFlags.length);
		var correctCountry = changingEasyFlags[randCountry].replace(".png", "");

		main.innerHTML =
			"<section id='flagImg'><img src='" +
			changingEasyFlags[randCountry] +
			"' alt='" +
			changingEasyFlags[randCountry] +
			"'></section>";

		changingEasyFlags = changingEasyFlags.filter(
			(item) => !item.includes(correctCountry)
		);
		easyFlags = easyFlags.filter((item) => !item.includes(correctCountry));

		correctCountry = correctCountry.replace("flags/easy/", "");
		correctCountry = correctCountry.split(" ");
	} else if (difficulty == "medium") {
		var mediumFlags = allMediumFlags;
		var randCountry = Math.floor(Math.random() * changingMediumFlags.length);
		var correctCountry = changingMediumFlags[randCountry].replace(".png", "");

		main.innerHTML =
			"<section id='flagImg'><img src='" +
			changingMediumFlags[randCountry] +
			"' alt='" +
			changingMediumFlags[randCountry] +
			"'></section><br>";

		changingMediumFlags = changingMediumFlags.filter(
			(item) => !item.includes(correctCountry)
		);
		mediumFlags = mediumFlags.filter((item) => !item.includes(correctCountry));

		correctCountry = correctCountry.replace("flags/medium/", "");
		correctCountry = correctCountry.split(" ");
	} else {
		var hardFlags = allHardFlags;
		var randCountry = Math.floor(Math.random() * changingHardFlags.length);
		var correctCountry = changingHardFlags[randCountry].replace(".png", "");

		main.innerHTML =
			"<section id='flagImg'><img src='" +
			changingHardFlags[randCountry] +
			"' alt='" +
			changingHardFlags[randCountry] +
			"'></section><br>";

		changingHardFlags = changingHardFlags.filter(
			(item) => !item.includes(correctCountry)
		);
		hardFlags = hardFlags.filter((item) => !item.includes(correctCountry));

		correctCountry = correctCountry.replace("flags/hard/", "");
		correctCountry = correctCountry.split(" ");
	}

	for (let i = 0; i < correctCountry.length; i++) {
		correctCountry[i] =
			correctCountry[i][0].toUpperCase() + correctCountry[i].substr(1);
	}
	correctCountry = correctCountry.join(" ");

	console.log(correctCountry);
	var randNum = Math.floor(Math.random() * 4);

	main.innerHTML += "<section id='answerBtns'></section>";
	for (let i = 0; i < 4; i++) {
		var btnsSection = document.getElementById("answerBtns");
		if (randNum == i) {
			btnsSection.innerHTML +=
				"<button type='button' id='btn" +
				i +
				"' onclick='correctButton(`" +
				difficulty +
				"`)' class='correct'>" +
				correctCountry +
				"</button>";
		} else {
			if (difficulty == "easy") {
				randCountry = Math.floor(Math.random() * easyFlags.length);
				country = easyFlags[randCountry].replace(".png", "");
				country = country.replace("flags/easy/", "");
				country = country.split(" ");
				easyFlags = easyFlags.filter((item) => item !== easyFlags[randCountry]);
			} else if (difficulty == "medium") {
				randCountry = Math.floor(Math.random() * mediumFlags.length);
				country = mediumFlags[randCountry].replace(".png", "");
				country = country.replace("flags/medium/", "");
				country = country.split(" ");
				mediumFlags = mediumFlags.filter(
					(item) => item !== mediumFlags[randCountry]
				);
			} else {
				randCountry = Math.floor(Math.random() * hardFlags.length);
				country = hardFlags[randCountry].replace(".png", "");
				country = country.replace("flags/hard/", "");
				country = country.split(" ");
				hardFlags = hardFlags.filter((item) => item !== hardFlags[randCountry]);
			}

			for (let i = 0; i < country.length; i++) {
				country[i] = country[i][0].toUpperCase() + country[i].substr(1);
			}
			country = country.join(" ");
			btnsSection.innerHTML +=
				"<button type='button' id='btn" +
				i +
				"' onclick='wrongButtons(`" +
				difficulty +
				"`)' class='incorrect'>" +
				country +
				"</button>";
		}
		if (i == 1) {
			btnsSection.innerHTML += "<br>";
		}
		console.log(btnsSection.innerHTML);
	}
}

function difficultyButtons() {
	document.getElementsByTagName('header')[0].innerHTML = "";
	main.innerHTML =
		"<section id='difficultyBtns'><button type='button' onclick='easyBtn()'>Easy</button><br><button type='butthttps://flags-game.yahiamh.repl.coon' onclick='mediumBtn()'>Medium</button><br><button type='button' onclick='hardBtn()'>Hard</button></section>";
}


const form = document.getElementsByTagName('form')[0];

// form.addEventListener('submit', function(event) {
// 	var fetchedItem = fetch('../connect.php');
// 	console.log(fetchedItem);
// 	// event.preventDefault();
// 	difficultyButtons();
// });

difficultyButtons();