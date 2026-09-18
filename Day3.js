//functions

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot (25));
console.log(calculateSquareRoot (100));


//function practice 1

let booWho=num=>{
  if(num===true || num===false){
    return true;
  }else
  return false
}



//email masking practice

function maskEmail(email){
  let string=email.slice(email[1],((email.indexOf("@")-1)));
return email.replace(email.slice(1,((email.indexOf("@")-1))),"*".repeat(string.length-1));
}
const email="Satyajitjena960@gmail.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))



//function with if else

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg= getLoanMessage(65000, 690);
const carLoanMsg= getLoanMessage(45000, 660);
const noLoanMsg= getLoanMessage(25000, 550);

console.log(duplexLoanMsg)
console.log(condoLoanMsg)
console.log(carLoanMsg)
console.log(noLoanMsg)


//convert f to c

function convertCtoF(a){
  return (a * 9/5) + 32

}