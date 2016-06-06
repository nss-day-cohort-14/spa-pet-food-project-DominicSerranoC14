// begin js file -------------

//XHR begin request to print dog food to page
//make request
var myRequest = new XMLHttpRequest();

//add event listener for XHR load
myRequest.addEventListener("load", handleDogFoodPrint);

//get request/object
myRequest.open("GET", "food.json");

//send request
myRequest.send();


//XHR begin request to print cat food to page
//make request
var myRequest = new XMLHttpRequest();

//add event listener for XHR load
myRequest.addEventListener("load", handleCatFoodPrint);

//get request/object
myRequest.open("GET", "catFood.json");

//send request
myRequest.send();



//get reference to output div for dog food
var outputDiv = document.getElementById('output-div');

//get reference to output div for dog food
var outputCatDiv = document.getElementById('outputCatDiv');



//define handleDogFoodPrint function
function handleDogFoodPrint() {
  var data = JSON.parse(event.target.responseText);
  var htmlString = "";

  for ( var i = 0; i < data.dogBrands.length; i++) {
    htmlString += `<div class="row">`;
    htmlString += `<p>${data.dogBrands[i].name}</p>`;
    htmlString += `<p>${data.dogBrands[i].types[0].type}</p>`;
    htmlString += `<p>${data.dogBrands[i].types[0].volumes[0].name}:  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[0].price} |  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[1].name}:  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[1].price}</p>  `;
    htmlString += `</div>`;
    outputDiv.innerHTML = htmlString;

  }// end for loop for dog brand array

}//end handleDogFoodPrint function



//define handleCatFoodPrint function
function handleCatFoodPrint() {
  var data = JSON.parse(event.target.responseText);
  var htmlString = "";

  for ( var i = 0; i < data.catBrands.length; i++ ) {
    htmlString += `<div class="col">`;
    htmlString += `<p>${data.catBrands[i].name}</p>`;
    htmlString += `</div>`;
    for ( var j = 0; j < data.catBrands[i].breeds.length; j++ ) {
      htmlString += `<div class="col">`;
      htmlString += `<p>${data.catBrands[i].breeds[j]}</p>`;
      htmlString += `</div>`;

    }//end second for loop
    for ( var k = 0; k < data.catBrands[i].volumes.length; k++ ) {
      htmlString += `<div class="col">`;
      htmlString += `<p>${data.catBrands[i].volumes[k].name}`;
      htmlString += `${data.catBrands[i].volumes[k].size}`;
      htmlString += `${data.catBrands[i].volumes[k].price}</p>`;
      htmlString += `</div>`;
    }//end third for loop
  }//end of first for loop
  console.log(htmlString);
  outputCatDiv.innerHTML = htmlString;

}//end of handleCatFoodPrint function
