







//PART B
//1
let score = prompt("Enter student's score: ");

if (score >= 80 && score <= 100) {
  console.log("Student's grade is: A");
} else if (score >= 70 && score <= 89) {
  console.log("Student's grade is: B");
} else if (score >= 60 && score <= 69) {
  console.log("Student's grade is: C");
} else if (score >= 50 && score <= 59) {
  console.log("Student's grade is: D");
} else if (score >= 0 && score <= 49) {
  console.log("Student's grade is: F");
} else {
  console.log("Invalid score entered.");
}

//2
let month = prompt("Enter a month: ");

if (['September', 'October', 'November'].includes(month)) {
  season = 'Autumn';
} else if (['December', 'January', 'February'].includes(month)) {
  season = 'Winter';
} else if (['March', 'April', 'May'].includes(month)) {
  season = 'Spring';
} else if (['June', 'July', 'August'].includes(month)) {
  season = 'Summer';
} else {
  console.log("Invalid input entered.");
  exit();
}

console.log("The season is:", season);

//3
for (let i = 0; i <= 10; i++) {
    if (i < 10) {
      console.log(`${i} x ${i} = ${i * i}`);
    } else {
      console.log(`${i} x ${i} = ${i * i}`);
    }
  }

//4
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("The sum of all numbers from 0 to 100 is:", sum);


//5
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log("The sum of all even numbers from 0 to 100 is:", sumEven);
console.log("The sum of all odd numbers from 0 to 100 is:", sumOdd);


//6
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

const sums = [sumEven, sumOdd];

console.log("The sum of all even numbers and odd numbers from 0 to 100 are:", sums);

const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let i = 0; i < techStack.length; i++) {
  console.log(techStack[i]);
}

//7
const fruits = ['banana', 'orange', 'mango', 'lemon'];

// create an empty array to store the reversed elements
const reversedFruits = [];

// iterate over the original array from the end to the beginning
for (let i = fruits.length - 1; i >= 0; i--) {
  // add each element to the new array
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits); // output: ['lemon', 'mango', 'orange', 'banana']


//PART C
//1
const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

// create an empty array to store the countries containing 'land'
const landCountries = [];

// iterate over the original array and check if each element contains 'land'
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    landCountries.push(countries[i]);
  }
}

console.log(landCountries); // output: ['Finland', 'Ireland']


//2
const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

let longestCountry = countries[0]; // assume the first country has the longest name

// iterate over the array and compare the length of each country to the current longest country
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}

console.log(longestCountry); // output: "Ethiopia"

//3
const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithLand = [];

// iterate over the array and check if each country contains the word "land"
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes("land")) {
    countriesWithLand.push(countries[i]);
  }
}

console.log(countriesWithLand); // output: ["Finland", "Ireland"]

//4
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countriesWithFourChars = [];

// iterate over the array and check if each country has four characters
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    countriesWithFourChars.push(countries[i]);
  }
}

console.log(countriesWithFourChars); // output: ["Japan", "Kenya"]

//5
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'United States of America', 'United Kingdom', 'South Korea'];

const countriesWithTwoOrMoreWords = [];

// iterate over the array and check if each country has two or more words
for (let i = 0; i < countries.length; i++) {
  if (countries[i].indexOf(' ') !== -1) {
    countriesWithTwoOrMoreWords.push(countries[i]);
  }
}

console.log(countriesWithTwoOrMoreWords); // output: ["United States of America", "United Kingdom", "South Korea"]


//6
const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const reversedAndCapitalizedCountries = [];

for(let i = countries.length - 1; i >= 0; i--) {
  let capitalizedCountry = countries[i].toUpperCase().charAt(0) + countries[i].toLowerCase().slice(1);
  reversedAndCapitalizedCountries.push(capitalizedCountry);
}

console.log(reversedAndCapitalizedCountries);


//7
//(1)
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
  }

//(2)
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
  }
  

//(3)
const allergicItem = 'Honey';
shoppingCart = shoppingCart.filter(item => item !== allergicItem);

//(4)
shoppingCart[2] = 'Green Tea';

//8
let countries = ['United States', 'Canada', 'Mexico'];

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}

//9
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

//10
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[middleIndex - 1] + ages[middleIndex]) / 2 : ages[middleIndex];

// Find the average age
const sum = ages.reduce((total, age) => total + age, 0);
const averageAge = sum / ages.length;

// Find the range of the ages
const ageRange = maxAge - minAge;

console.log("Sorted Ages: ", ages);
console.log("Minimum Age: ", minAge);
console.log("Maximum Age: ", maxAge);
console.log("Median Age: ", medianAge);
console.log("Average Age: ", averageAge);
console.log("Age Range: ", ageRange);


//11
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countriesUppercase = countries.map(country => country.toUpperCase());

console.log(countriesUppercase);
// Output: ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


//12
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countriesLength = countries.map(country => country.length);

console.log(countriesLength);
// Output: [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


//13
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
  // Output: ['Finland', 'Ireland', 'Iceland']
} else {
  console.log('All these countries are without land');
}

//14
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countriesEndsWithIA = countries.filter(country => country.endsWith('ia'));

if (countriesEndsWithIA.length > 0) {
  console.log(countriesEndsWithIA);
  // Output: ['Albania', 'Bolivia', 'Ethiopia']
} else {
  console.log('These are countries ends without ia');
}

//15
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countryWithMaxCharacters = countries.reduce((acc, country) => {
  if (country.length > acc.length) {
    return country;
  } else {
    return acc;
  }
});

console.log(countryWithMaxCharacters);
// Output: 'Ethiopia'


//16
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countriesWithFiveCharacters = countries.filter(country => country.length === 5);

console.log(countriesWithFiveCharacters);
// Output: ['Japan', 'Kenya']


//17
let maxSkills = 0;
let maxSkillsUser = '';

for (const user in users) {
  if (users.hasOwnProperty(user)) {
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      maxSkillsUser = user;
    }
  }
}

console.log(maxSkillsUser);

//18