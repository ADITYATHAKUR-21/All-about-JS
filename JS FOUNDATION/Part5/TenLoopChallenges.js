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
console.log(VisitedCitiys);
