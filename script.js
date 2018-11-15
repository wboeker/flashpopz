let frontCard = null;
let backCard = null;
let cardLetter = null;
let cardWord = null;
let footerLetter = null;
let footerWord = null;
var skyline;

function initialize()
{
	frontCard = document.getElementById("front");
	backCard = document.getElementById("back");
	frontCard.style.display = "none";
	backCard.style.display = "block";

	cardLetter = document.getElementById("letter");
	cardWord = document.getElementById("word");
	footerLetter = document.getElementById("footer-letter");
	footerWord = document.getElementById("footer-word");

	//skyline = document.getElementById("skyline").src;
}

function toggleFlashcard()
{
	if(backCard.style.display === "block")
	{
		frontCard.style.display = "block";
		backCard.style.display = "none";
	}
	else
	{
		frontCard.style.display = "none";
		backCard.style.display = "block";
	}
}

function nextFlashcard()
{
	cardLetter.innerHTML = "B";
	cardWord.innerHTML = "Beijing";
	footerLetter.innerHTML = "B";
	footerWord.innerHTML = "Beijing";
	document.getElementById("skyline").src = "beijing.png";

}

window.onload = initialize;