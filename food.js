//begin js file -------------

//get reference to output div
var outputDiv = document.getElementById('output-div');

//define handleDogFoodPrint function
function handleDogFoodPrint() {
  var data = JSON.parse(event.target.responseText);
  console.log(data);
  var htmlString = "";

  for ( var i = 0; i < data.dogBrands.length; i++) {
    htmlString += `<div class="row">`;
    htmlString += `<p>${data.dogBrands[i].name}</p>`;
    htmlString += `<p>${data.dogBrands[i].types[0].type}</p>`;
    htmlString += `<p>${data.dogBrands[i].types[0].volumes[0].name}:  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[0].price}  |  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[1].name}:  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[1].price}</p>  `;
    htmlString += `</div>`;
    outputDiv.innerHTML = htmlString;

  }// end for loop for dog brand array
}



//XHR begin request
//make request
var myRequest = new XMLHttpRequest();

//add event listener for XHR load
myRequest.addEventListener("load", handleDogFoodPrint);

//get request/object
myRequest.open("GET", "food.json");

//send request
myRequest.send();
