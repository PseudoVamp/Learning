console.log("This is not a test")

if (1 + 1 === 2) {
    console.log("the universe is real")
}

let random = Math.random();
if (random < 0.5) {
    console.log("We got less than 0.5")
    console.log(random)
}

else if (random > 0.5) {
    console.log("It's higher than 0.5")
    console.log(random)
}






if (random % 2 > 0) {
    console.log("even")
}




const dayOfWeek = prompt("Enter a day").toLowerCase;

if (dayOfWeek === "monday") {
    console.log("Mondays SUCK.")
}
else if (dayOfWeek === "friday") {
    console.log("Get ready to party tonight.")
}
else {
    console.log("It's not a great day.")
}







const age = 31;

if (age < 5) {
    console.log("You are a baby, you get in foor free.");
} else if (age < 10) {
    console.log("You are a child, you pay $10")
} else if (age < 65) {
    console.log("You are an adult, you pay $20")
} else if (age > 65) {
    console.log("You are a senior, you get in free")
}
//better way is to doo 
// if (age <5 || age >=65)
// if age is less than five ORRRRR || ORRRRR greater than 65

// checks if age is greater than ten ANDDDD less than 65
// else if (age >= 10 && age <65){
//     console.log("$20");
// }

//password must be 6+ characters
//password cannot include space

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password GREAT JOB");
    } else {
        console.log("CANNOT HAVE A SPACE!!!");
    }
} else {
    console.log("password not long enough");
}

// old way, nested is betta
// if (password.indexOf(" ") === -1) {
//     console.log("NICE, No space");
// } else {
//     console.log("CANNOT HAVE A SPACE!!!");
// }
