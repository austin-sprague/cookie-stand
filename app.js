var hoursOfOps = ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];


var CookieStand = function (location, minCustHour, maxCustHour, avgCookiesPurch, id) {
  this.place = location; 
  this.minCustHour = minCustHour; 
  this.maxCustHour = maxCustHour; 
  this.avgCookiesPurch = avgCookiesPurch; 
  this.totalCookiesList = []; 
  this.id = id;

  // Generates a random number between the values of Min and Max customer per hour
  this.randCustHour = function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  };

  this.randCustHour();  
  
  // Calculates the number of cookies per hour based on the random number function
  this.totalCookiesHour = function (){
    for (var i=0; i < hoursOfOps.length; i++){
      this.totalCookiesList.push(Math.floor(this.randCustHour() * this.avgCookiesPurch));
      console.log(hoursOfOps[i] + " " + this.place + " will need " + this.totalCookiesList[i] + " cookies");
    }
  };

  // this.totalCookiesHour();
    
  this.totalCookiesDay = function (){
    var total = 0;
    for (var i=0; i < this.totalCookiesList.length; i++){
      total = total + this.totalCookiesList[i];
    }
    return total;
  }; 
  this.totalCookiesDay();


  this.makeTable= function(id){
    for (var i=0; i < this.totalCookiesList.length; i++){
      var list = document.getElementById(this.id);
      var item = document.createElement("tr");
      item.appendChild(document.createTextNode(this.totalCookiesList[i]));
      list.appendChild(item);
    }
  }

  this.makeTable(this.id);
}; 

var pikePlace = new CookieStand ('Pike Place Market', 17, 88, 5.2,'pike');
var seaTac = new CookieStand ('SeaTac Ariport', 6,44,1.2,'seatac');
var southCenter = new CookieStand('Southcenter Mall', 11,38,1.9,'southcenter');
var bellevueSquare = new CookieStand('Bellevue Square', 20,48,3.3,'bellevue');
var alki = new CookieStand('Alki Beach',3,24,2.6,'alki');


// var locations = ['Pike Place Market','SeaTac','Southcenter','Bellevue Square','Alki'];



// event.target.formInputsID.value


