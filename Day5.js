//recipe tracker


const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes)



//build a device Loan ledger
const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

// Helper function to clone an object deeply without mutating the original
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Helper function to convert a date string "M/D/YYYY" into a comparable string "YYYYMMDD"
function normalizeDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("/");
  const month = parts[0].padStart(2, "0");
  const day = parts[1].padStart(2, "0");
  const year = parts[2];
  return `${year}${month}${day}`;
}

// 1. Checkout Device
function checkoutDevice(ledger, assetTag, borrower) {
  // Check if device exists
  if (!ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device with asset tag "${assetTag}" was not found.`
    };
  }

  // Check if device is already checked out
  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device "${assetTag}" is already checked out.`
    };
  }

  // Clone ledger to ensure immutability
  const updatedLedger = clone(ledger);

  // Update device fields
  updatedLedger[assetTag].borrower = {
    name: borrower.name,
    email: borrower.email
  };
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device "${assetTag}" successfully checked out to ${borrower.name}.`
  };
}

// 2. Checkin Device
function checkinDevice(ledger, assetTag) {
  // Check if device exists
  if (!ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device with asset tag "${assetTag}" was not found.`
    };
  }

  // Clone ledger to ensure immutability
  const updatedLedger = clone(ledger);

  // Reset device fields
  updatedLedger[assetTag].borrower = { name: "", email: "" };
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device "${assetTag}" successfully checked in.`
  };
}

// 3. List Overdue Devices
function listOverdueDevices(ledger, today) {
  const todayNormalized = normalizeDate(today);
  const overdueDevices = [];

  for (const tag in ledger) {
    const device = ledger[tag];

    if (device.status === "CheckedOut" && device.dueDate) {
      const dueDateNormalized = normalizeDate(device.dueDate);

      // Check if dueDate is strictly before today
      if (dueDateNormalized < todayNormalized) {
        overdueDevices.push(device);
      }
    }
  }

  // Sort by dueDate in ascending order (earliest due date first)
  overdueDevices.sort((a, b) => {
    const dateA = normalizeDate(a.dueDate);
    const dateB = normalizeDate(b.dueDate);
    return dateA.localeCompare(dateB);
  });

  return overdueDevices;
}

// 4. Serialize Ledger
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

// 5. Load Ledger
function loadLedger(json) {
  return JSON.parse(json);
}


//Build a  Quiz game


let questions=[{category:"Hard",question:"what is java?",choices:["programming language","toy","laptop"],answer:"programming language"

},{category:"easy",question:"what is your name?",choices:["satyajit","rama","hari"],answer:"satyajit"

},{category:"easy",question:"how old are you?",choices:["1","2","3"],answer:"2"

},{category:"hard",question:"what is javascript?",choices:["programming language","toy","laptop"],answer:"programming language"

},{category:"hard",question:"what is object?",choices:["real life entity","i dont know","help"],answer:"real life entity"

},]



function getRandomQuestion (arr){
  const min = 1;
const max = arr.length-1;

const randomNum2 = Math.random() * (max - min) + min;
  return arr[Math.round(randomNum2)]
}

function getRandomComputerChoice (arr){
  const min = 1;
const max = arr.length-1;

const randomNum2 = Math.random() * (max - min) + min;
  return arr[Math.round(randomNum2)]
}

function getResults (obj,choice){
 if (obj.answer==choice){
  return "The computer's choice is correct!"
 }else
 return `The computer's choice is wrong. The correct answer is: ${obj.answer}`

}