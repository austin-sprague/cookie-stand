
var hoursOfOps = ["10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM"];

var pikePlace={
  location: 'Pike Place',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesPurch: 5.2,
  randCustHour: function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function (){
    return Math.floor(this.randCustHour() * this.avgCookiesPurch);
  },
  totalCookiesDay: function (){
    return totalCookiesHour()*randCustHour();
  }
}; 
function pike(){
  var array = [];
  for (var i=0; i<hoursOfOps.length;i++){
    array.push(pikePlace.totalCookiesHour());
  }
  for (var i=0; i<array.length;i++){
    var list = document.getElementById("pike");
    var item = document.createElement("ul");
    var total = document.getElementById("pikeTotal");
    item.appendChild(document.createTextNode(hoursOfOps[i] + ': ' + array[i] + " cookies"));
    list.appendChild(item);
    item.appendChild(total);
  }
  return list;
}

pike();



var seaTac={
  location: 'SeaTac Airport',
  minCustHour: 6,
  maxCustHour: 44,
  avgCookiesPurch: 1.2,
  randCustHour: function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function (){
    return Math.floor(this.randCustHour() * this.avgCookiesPurch);
  }
}; 
function seaTacAirport(){
  var array = [];
  for (var i=0; i<hoursOfOps.length;i++){
    array.push(seaTac.totalCookiesHour());
  }
  for (var i=0; i<array.length;i++){
    var list = document.getElementById("seatac");
    var item = document.createElement("ul");
    var total = document.getElementById("seatacTotal");
    item.appendChild(document.createTextNode(hoursOfOps[i] + ': ' + array[i] + " cookies"));
    list.appendChild(item);
    item.appendChild(total);
  }
  return list;
}

seaTacAirport();

var southCenter={
  location: 'Southcenter Mall',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookiesPurch: 1.9,
  randCustHour: function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function (){
    return Math.floor(this.randCustHour() * this.avgCookiesPurch);
  }
}; 
function southCenterMall(){
  var array = [];
  for (var i=0; i<hoursOfOps.length;i++){
    array.push(southCenter.totalCookiesHour());
  }
  for (var i=0; i<array.length;i++){
    var list = document.getElementById("southcenter");
    var item = document.createElement("ul");
    var total = document.getElementById("southcenterTotal");
    item.appendChild(document.createTextNode(hoursOfOps[i] + ': ' + array[i] + " cookies"));
    list.appendChild(item);
    item.appendChild(total);
  }
  return list;
}

southCenterMall();

var bellevueSq={
  location: 'Bellevue Square',
  minCustHour: 20,
  maxCustHour: 48,
  avgCookiesPurch: 3.3,
  randCustHour: function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function (){
    return Math.floor(this.randCustHour() * this.avgCookiesPurch);
  }
}; 
function bellevueSquare(){
  var array = [];
  for (var i=0; i<hoursOfOps.length;i++){
    array.push(southCenter.totalCookiesHour());
  }
  for (var i=0; i<array.length;i++){
    var list = document.getElementById("bellevue square");
    var item = document.createElement("ul");
    var total = document.getElementById("bellevueTotal");
    item.appendChild(document.createTextNode(hoursOfOps[i] + ': ' + array[i] + " cookies"));
    list.appendChild(item);
    item.appendChild(total);
  }
  return list;
}

bellevueSquare();

var alki={
  location: 'Alki Beach',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookiesPurch: 2.6,
  randCustHour: function (){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  },
  totalCookiesHour: function (){
    return Math.floor(this.randCustHour() * this.avgCookiesPurch);
  }
}; 
function alkiBeach(){
  var array = [];
  for (var i=0; i<hoursOfOps.length;i++){
    array.push(alki.totalCookiesHour());
  }
  for (var i=0; i<array.length;i++){
    var list = document.getElementById("alki");
    var item = document.createElement("ul");
    var total = document.getElementById("alkiTotal");
    item.appendChild(document.createTextNode(hoursOfOps[i] + ': ' + array[i] + " cookies"));
    list.appendChild(item);
    item.appendChild(total);
  }
  return list;
}

alkiBeach();
