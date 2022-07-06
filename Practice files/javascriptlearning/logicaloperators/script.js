const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password!")
} else {
    console.log("INCORRECT PASSWORD")
}






const day = 3;
switch (day) {
    case 1:
        console.log("Monoday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend!");
        break;
    default:
        console.log("I don't know?!?")
}