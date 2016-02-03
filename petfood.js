console.log(Date.now());

function executeThisCodeIfXHRFails() {
	alert("XHR FAILED");
};



function executeThisCodeAfterFileIsLoaded () {

	console.log("got json");
	var data = JSON.parse(this.responseText);
	console.log(data);

	var contentEl = document.getElementById("mainContent");




	var dogFoodData = "";
	var currentFood = "";

	for(var i = 0; i < data.dog_brands.length; i++) {
		currentFood = data.dog_brands[i];
		dogFoodData += `<div class='petFoodOutput'>`;

		dogFoodData += `<h1>${data.dog_brands[i].name}</h1></div>`;

		for (var j = 0; j < data.dog_brands[i].types.length; j++) {
			dogFoodData += `<p>${currentFood.types[j].type}</p>`;


		for (var k = 0; k < data.dog_brands[i].types[k]; k++) {
			console.log("hello");
			dogFoodData += `<p>${currentFood.types[k].volumes}</p>`;
			console.log(currentFood.types[k].volumes);


			};
			
		};

	
	};
contentEl.innerHTML = dogFoodData;

};




		


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.open("GET", "dogfood.json");
myRequest.send();

console.log("Last line in the JavaScript file");
console.log(Date.now());


