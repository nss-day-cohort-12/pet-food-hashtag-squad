console.log(Date.now());

function executeThisCodeIfXHRFails() {
	alert("XHR FAILED");
};



function executeThisCodeAfterFileIsLoaded () {
	var data = JSON.parse(this.responseText);
	var contentEl = document.getElementById("mainContent");




	var dogFoodData = "";
	var currentFood = "";

	for(var i = 0; i < data.dog_brands.length; i++) {
		currentFood = data.dog_brands[i];
		dogFoodData += `<div class='petFoodOutput'>`;
		dogFoodData += `<h1>${data.dog_brands[i].name}</h1>`;


		for (var j = 0; j < data.dog_brands[i].length; j++) {
			dogFoodData += `<p>${currentFood.types[j].type}</p>`;


		for (var j = 0; j < data.dog_brands[i].types[j]; j++) {
			dogFoodData += `<p>${currentFood.types[j].volumes}</p>`;
			console.log(currentFood.types[j].volumes);

			};
			
		};

	};
};




		
		// contentEl.innerHTML = dogFoodData;

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.open("GET", "dogfood.json");
myRequest.send();

// console.log("Last line in the JavaScript file");
// console.log(Date.now());

