var hoursOfOps = ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

// constructor function for cookie stand

var CookieStand = function (location, minCustHour, maxCustHour, avgCookiesPurch, id) {
  this.place = location; 
  this.minCustHour = minCustHour; 
  this.maxCustHour = maxCustHour; 
  this.avgCookiesPurch = avgCookiesPurch; 
  this.totalCookiesList = []; 
  this.id = id;

  // generates a random number between the values of Min and Max customer per hour
  
  this.randCustHour = function (){
    
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  }
  
  // calculates the number of cookies per hour based on the random number function
  
  this.totalCookiesHour = function (){

    for (var i=0; i < hoursOfOps.length; i++){
      this.totalCookiesList.push(Math.floor(this.randCustHour() * this.avgCookiesPurch));
      console.log(hoursOfOps[i] + " " + this.place + " will need " + this.totalCookiesList[i] + " cookies");
    }
  }
  this.totalCookiesHour();

  // calculates total cookies sold per day
 
    
  this.totalCookiesDay = function (){
    
    var total = 0;
    
    for (var i=0; i < this.totalCookiesList.length; i++){
      this.total = this.total + this.totalCookiesList[i];
    }
    return total;
  }
  this.totalCookiesDay();
  // function to create sales data table

  this.makeTable = function(id){
    var table = document.getElementById('table');
    var row = document.createElement('tr');
    row.appendChild(document.createTextNode(this.id));
    
    for (var i=0; i < this.totalCookiesList.length; i++){
      var data = document.createElement('td');
      data.appendChild(document.createTextNode(this.totalCookiesList[i]));
      row.appendChild(data);
    }
    
    table.appendChild(row);
    data.appendChild(document.createTextNode(this.totalCookiesDay()));
  }
  
  this.makeTable();
}; 

var pikePlace = new CookieStand ('Pike Place Market', 17, 88, 5.2,'pike');
var seaTac = new CookieStand ('SeaTac Ariport', 6,44,1.2,'seatac');
var southCenter = new CookieStand('Southcenter Mall', 11,38,1.9,'southcenter');
var bellevueSquare = new CookieStand('Bellevue Square', 20,48,3.3,'bellevue');
var alki = new CookieStand('Alki Beach',3,24,2.6,'alki');

// New cookie stand function

var newCookieStand = function(e){
  e.preventDefault(e);

  var newPlace = document.getElementById("location");
  var newMaxCustHour = document.getElementById("newMaxCustHour");
  var newMinCustHour = document.getElementById("newMinCustHour");
  var newAvgCookiesPurch = document.getElementById("avgCookiesPurch");
  var newId = document.getElementById("newId");

  // error checking

  // if (!newPlace.value || !newMaxCustHour.value || !newMinCustHour.value || !newAvgCookiesPurch.value) {
  //   return alert('Please enter correct values');
  // }
  // else if (isNan(this.newMinCustHour.value) || isNan(this.newMaxCustHour) || isNan(this.newAvgCookiesPurch)) {
  //   return alert ('Please enter a number in correct fields');
  
  //   console.log(this.newPlace.value);
  //   console.log(this.newMaxCustHour.value);
  //   console.log(this.newMinCustHour.value);
  //   console.log(this.newAvgCookiesPurch.value);
  // }

  var newStand = new CookieStand(newPlace.value, newMinCustHour.value, newMaxCustHour.value, newAvgCookiesPurch.value, newId.value);
};


// add store button to Event Listener

var addStoreButton = document.getElementById("addStoreButton");
addStoreButton.addEventListener("click", newCookieStand);

// event.target.formInputsID.value


