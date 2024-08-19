let name = "James"; // declaring a variable
let age = 69; // variable
let score = 55; // variable
let hasHobby = true; // bool
let hobbies = ["Reading", "Eating"]; // this is an array
console.log("\n"); // new line 

// accessing array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);

function summarizeUser(userName, userAge, userHasHobby){
    return {
        "Name is " : userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby
    };
}

// function to summarize the name, age and hobbies bool.
// console.log(summarizeUser(name, age, hasHobby));

function add(x, y){
    // let sum = x + y;

    return x + y;
}
// function to add 
// console.log(add(1,1)); = 2

function studentPass(score){
    if (score > 75){
        return "has passed";
    }else{
        return "have not passed";
    }
}

// function to check if student passed or not
// console.log(studentPass(66)); = have not passed
function boolcheck(bool){
    if (bool == true){
        console.log("Bool is true");
    }else {
        console.log("Bool is false")
    }
}

// looping through array
// method 1
for (let hobby of hobbies){
 //   console.log(hobby);
}

// method 2
hobbies.map((hobby) => {
//    console.log(hobby);
});

// method 3
hobbies.forEach((hobby) => {
  //  console.log(hobby);
});

// this is an object
const person = {
    name: "James", // key: pair = value
    age: 25,
    greet: function(){
        console.log("Hello, I am " + person.name);
    },
};

// accessing object properties
// console.log(person.greet());

console.log(person.greet());