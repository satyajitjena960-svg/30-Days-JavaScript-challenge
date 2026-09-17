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