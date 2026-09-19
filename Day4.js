//Bulid a shopping List
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));



// Lunch picker PRogram

const lunches =[]
function addLunchToEnd (arr,string){
arr.push(string)
console.log(`${string} added to the end of the lunch menu.`);
return arr;
}
function addLunchToStart (arr,string){
  arr.unshift(string)
  console.log(`${string} added to the start of the lunch menu.`)
  return arr;
}
function removeLastLunch  (arr){
  if(arr.length<=0){
    console.log("No lunches to remove.")
  }else{
     let element=arr.pop();
console.log(`${element} removed from the end of the lunch menu.`);
}
return arr;
}
function removeFirstLunch   (arr){
  if(arr.length<=0){
    console.log("No lunches to remove.")
  }else{
     let element=arr.shift();
console.log(`${element} removed from the start of the lunch menu.`);
}
return arr;
}

function getRandomLunch (arr){
  if(arr.length<=0){
    console.log("No lunches available." )
  }else{
      const randomIndex = Math.floor(Math.random() * arr.length);

console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}
}
function showLunchMenu (arr){
  if(arr.length<=0){
    console.log("The menu is empty.")
  }else{
     console.log(`Menu items: ${arr.join(", ")}`)
  }

}



//golf score translator

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(num1,num2){
  if(num2==1){
    return "Hole-in-one!";
  }else if(num2<=num1-2){
    return "Eagle";
  }
  else if(num2==num1-1){
    return "Birdie";
  }else if(num2==num1){
    return "Par";
  }else if(num2==num1+1){
    return "Bogey";
  }else if(num2==num1+2){
    return "Double Bogey";
  }else if(num2>=num1+3){
    return "Go Home!"
  }
}




//Wild life tracker

const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal , propertyName) => animal[propertyName]


console.log(getProperty(tiger, "species"))
console.log(getProperty(elephant, "age"))


//cargo manifest validator need to practice more


let normalizeUnits = function (manifest) {
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
};

let validateManifest = function (manifest) {
  const errors = {};
  const requiredKeys = ["containerId", "destination", "weight", "unit", "hazmat"];

  for (const key of requiredKeys) {
    if (!(key in manifest) || manifest[key] === undefined) {
      errors[key] = "Missing";
    }
  }

  if ("containerId" in manifest && manifest.containerId !== undefined) {
    if (
      typeof manifest.containerId !== "number" ||
      !Number.isInteger(manifest.containerId) ||
      manifest.containerId <= 0
    ) {
      errors.containerId = "Invalid";
    }
  }

  if ("destination" in manifest && manifest.destination !== undefined) {
    if (
      typeof manifest.destination !== "string" ||
      manifest.destination.trim().length === 0
    ) {
      errors.destination = "Invalid";
    }
  }

  if ("weight" in manifest && manifest.weight !== undefined) {
    if (
      typeof manifest.weight !== "number" ||
      Number.isNaN(manifest.weight) ||
      manifest.weight <= 0
    ) {
      errors.weight = "Invalid";
    }
  }

  if ("unit" in manifest && manifest.unit !== undefined) {
    if (manifest.unit !== "kg" && manifest.unit !== "lb") {
      errors.unit = "Invalid";
    }
  }

  if ("hazmat" in manifest && manifest.hazmat !== undefined) {
    if (typeof manifest.hazmat !== "boolean") {
      errors.hazmat = "Invalid";
    }
  }

  return errors;
};

let processManifest = function (manifest) {
  const errors = validateManifest(manifest);
  const isValid = Object.keys(errors).length === 0;

  if (isValid) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
};