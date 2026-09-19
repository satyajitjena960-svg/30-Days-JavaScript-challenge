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