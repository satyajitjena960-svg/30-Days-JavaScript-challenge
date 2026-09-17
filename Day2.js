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



