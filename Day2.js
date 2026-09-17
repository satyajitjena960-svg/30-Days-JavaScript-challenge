let adjective="Beautyfull";
let noun="Satyajit";
let verb="work";
let place="Bhadrak";
let adjective2="Good";
let noun2="Chicken";
let firstStory;

firstStory="Once upon a time, there was a(n) "+ adjective+" "+noun+" who loved to eat "+noun2+". "+ "The "+noun+" lived in a "+place+" and had "+adjective2+" nostrils that blew fire when it was "+verb+".";

console.log("First story: "+firstStory);

 adjective="Cute";
 noun="Chicken";
 verb="Big";
 place="Bhubaneswar";
 adjective2="Prity";
 noun2="Satyajit";

 let secondStory="Once upon a time, there was a(n) "+ adjective+" "+noun+" who loved to eat "+noun2+". "+ "The "+noun+" lived in a "+place+" and had "+adjective2+" nostrils that blew fire when it was "+verb+".";

 console.log("Second story: "+secondStory);

 //String manupulation


 let string1="Satyajit Jena";
 console.log(string1[0]);
 console.log(string1[0]+string1[9]);

 let subString= string1.indexOf("Jena");
 //let subString= string1.indexOf("jena");//return -1 due to it is case sensitive
 console.log(subString);


 //string Interpolation
 let name="Satyajit";
 let greeting=`hello! ${name}`;
 console.log(greeting)

 let poem = `Roses are red,
    Violets are blue,
    JavaScript is fun,
    And so are you.`;

console.log(poem);


//Symbol in string
let story="\"wow\" this is a great story";
console.log(story);


//taking user input by prompt
let x=prompt("Whats ur name");
console.log(x,typeof x);



//practice

console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");

//practice 2

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().")


//practice 3

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase()+lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);

//practice 4

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

//practice 5

const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = "8" - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);


//numerical operation

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);


//practice 5

const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 18;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}
//PRACTICE 6

let fortune1="Your cat will look very cuddly today.";
let fortune2="The weather will be nice tomorrow.";
let fortune3="Be cautious of your new neighbors.";
let fortune4="You will find a new hobby soon.";
let fortune5="It would be wise to avoid the color red today.";

let randomNumber=Math.floor(Math.random() * 5) + 1 

let selectedFortune ;

if(randomNumber==1){
  selectedFortune=fortune1;
}else if(randomNumber==2){
  selectedFortune=fortune2;
}else if(randomNumber==3){
  selectedFortune=fortune3;
}else if(randomNumber==4){
  selectedFortune=fortune4;
}else {
  selectedFortune=fortune5;
}
console.log(selectedFortune )

//PRACTICE 7

const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!")