// <--------------- For Loop ---------------->

// 1st

let Teas = ["green tea", "black tea", "chai", "oolon tea"];
let selectedTeas = [];

for(let T = 0; T <= Teas.length; T++){

  if(Teas[T] === "chai"){
    break;
  }

  selectedTeas.push(Teas[T])

}

// console.log(selectedTeas);

// 2nd

let city = ["London", "New York", "Paris", "Berlin"];
let VisitedCitiys = [];

for(let c = 0; c < city.length; c++){
  if(city[c] === "Paris"){
   continue;
  }

  VisitedCitiys.push(city[c]);


}
// console.log(VisitedCitiys);

// <--------------- Forof Loop ---------------->

// 3rd

let Numbers = [1, 2, 3, 4, 5,];
let smallNumbers = [];

for (const num of Numbers) {

  if(num === 4){
    break;

  }
  smallNumbers.push(num)

}

// console.log(smallNumbers);

// 4th

let Tea = ["chai", "harbal tea", "black tea", "green tea"];
let preferredTea = [];


for (const A of Tea) {
  if(A === "harbal tea"){

    continue;

  }

  preferredTea.push(A)

}
// console.log(preferredTea);

// <--------------- ForIn Loop ---------------->

// 1st

let citiesPopulation = {
  "London": 600000,
  "Paris": 700000,
  "New York": 40000,
  "Berlin": 20000
}

let cityPopulation = {}

for (const city in citiesPopulation) {
  if (city === "New York") {
    break;

  }

  cityPopulation[city] = citiesPopulation[city]
}
// console.log(cityPopulation);

// 2nd

let BiharCities = {
  "Patna": 5000000,
  "Muzffarpur": 2000000,
  "Baglpur": 5000000,
  "Motihari": 3000000,
  "Sivhar" : 4000000
};

let LargeCities = {};

for (const city in BiharCities) {

  if (BiharCities[city] < 3000000) {
    continue;

  }
  LargeCities[city] = BiharCities[city];
}


// console.log(LargeCities);


//  <--------------- ForEach Loop ---------------->
// 1st

let TeaCollection = [ "harbal tea", "black tea", "chai", "green tea"];

let avlibilaTeas = [];

TeaCollection.forEach((Tea) => {

  if( Tea === 'chai'){
    return;
  }

  avlibilaTeas.push(Tea)

})
// console.log(avlibilaTeas);

// 2nd

let Town = ["London", "New York", "Paris", "Berlin"];
let travaledTown =  [];

Town.forEach((City) => {

if ( City ===  "Paris"){
return;
}

travaledTown.push(City);

})

// console.log(travaledTown);


let Number  = [1, 2, 3, 7, 4, 5, 6];
let doubledNumbers = [];

for(let i = 1; i <= Number.length; i++){

  if(i === 7) {
    continue;
  }

 doubledNumbers.push(i * 2)

}
// console.log(doubledNumbers);



let teaName =  [ "chai", "harbal tea", "black tea",  "green tea", "oloon tea"]

let sortTeas = [];

for (const Tea of teaName) {

  if(Tea.length >= 8){
    continue;

  }

  sortTeas.push(Tea)
}

console.log(sortTeas);
