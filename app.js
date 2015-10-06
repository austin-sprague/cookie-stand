
var hoursOfOps = ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

var CookieStand = function (location, minCustHour, maxCustHour, avgCookiesPurch, iD) {
  this.place = location; 
  this.minCustHour = minCustHour; 
  this.maxCustHour = maxCustHour; 
  this.avgCookiesPurch = avgCookiesPurch; 
  this.totalCookiesList = []; 
  this.iD = iD;

  this.randCustHour = function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  };
  
  this.totalCookiesHour = function (){
    for (var i=0; i < hoursOfOps.length; i++){
      this.totalCookiesList.push(Math.floor(this.randCustHour() * this.avgCookiesPurch));
      console.log("At " + hoursOfOps[i] + " " + this.place + " will need " + this.totalCookiesList[i] + " cookies");
    }
  };
    
  this.totalCookiesDay = function (){
    var total = 0;
    for (var i=0; i < this.totalCookiesList.length; i++){
      total = total + this.totalCookiesList[i];
    }
    return total;
  }; 

  function display(){
    for (var i=0; i < this.totalCookiesList.length; i++){
      var list = document.getElementById("item");
      var item = document.createElement("li");
      var total = document.getElementById("total");
      item.appendChild(document.createTextNode(hoursOfOps[i] + ': ' + this.totalCookiesList[i] + " cookies"));
      list.appendChild(list);
      item.appendChild(total);
    }
    return list;
  }
  this.totalCookiesHour();
  this.totalCookiesDay();
}; 

var pikePlace = new CookieStand ('Pike Place Market', 17, 88, 5.2,'pike');
var seaTac = new CookieStand ('SeaTac Ariport', 6,44,1.2,'seatac');
var southCenter = new CookieStand('Southcenter Mall', 11,38,1.9,'southcenter');
var bellevueSquare = new CookieStand('Bellevue Square', 20,48,3.3,'bellevue');
var alki = new CookieStand('Alki Beach',3,24,2.6,'alki');


