let frontCard = null;
let backCard = null;

function initialize()
{
	frontCard = document.getElementById("front");
	backCard = document.getElementById("back");
	frontCard.style.display = "none";
	backCard.style.display = "block";
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

window.onload = initialize;