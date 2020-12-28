/* Function for password */
function enterPassword() {
    var myPassword = "bday";

    do {
        var userPassword = prompt("Please enter your password");
    } while(userPassword !== myPassword);
}
enterPassword();

document.write("<br>");
document.write("<br>");


/* Function that asks if you want to chat*/
function promptName() {
    var promptName = "What is your name?";
    var response = prompt(promptName);
    //console.log(response);
    response = response.toLowerCase();
    var alertMessage;
        if (response == "charlie") {
        alertMessage = "Hello, Charlie! Welcome to your birthday website!";
    } else {
        alertMessage = "Let's wait for Charlie to help you!";
    }
alert(alertMessage);
}

/* Calling Chat function */
promptName();

/* Function to order cakes */
function orderCakes() {
    // Declare the variable promptCakes
    var promptCakes = "How many cakes would you like to order?"
    // Assign responseCakes the value of promptCakes
    var responseCakes = prompt(promptCakes);
    // console.log(responseCakes);
    // Create function to determine whether write should have cake or cakes
    function cakeCakes() {
        if (responseCakes > 1) {
            document. write("That is amazing! I can make you " + responseCakes + " cakes!");
        } else {
            document. write("That is amazing! I can make you a cake!");
        }
    }
    // Call the cake cakes function
    cakeCakes();   
}
// Call the order cakes function
orderCakes();

document.write("<br>");
document.write("<br>");

/* Say Hi function */
function sayHi() {
    document.write ("Hi! How are you?")
}
sayHi();

document.write("<br>");
document.write("<br>");

/* function to call prompt */
// var userInput;
function inputPrompt(message) {
    var userInput = prompt(message);
    return userInput;
}

/* Function to add pictures of cakes */

/* wedding add 2 wedding cakes
graduation ad 5 cakes
crazy add 10 crazy cakes */

function addCakes(type) {
    // declare description as variable
    var description;
    // evaluate type in if else
    if (type === "wedding") {
        description = "2 cakes for you and your groom!";
    } else if (type === "graduation") {
        description = "5 cakes for your graduation party!"; 
    } else if (type === "crazy") {
        description = "10 crazy cakes it is!";
    } 

    var htmlImage = "<img src=\"images/" + type + ".JPG\" class=\"responsive\">";
    document.write(htmlImage);
    document.write("<br>");


//addCakes(userInput);

var typeCakes = inputPrompt("What type of cake do you want? Choose wedding, graduation or crazy.");
// var cakes = ["wedding", "graduation", "crazy"];
var numberOfCakes;

if(typeCakes === "wedding") {
    numberOfCakes = 2;
}else if (typeCakes === "graduation") {
    numberOfCakes = 5;
}else if (typeCakes === "crazy") {
    numberOfCakes = 10;
}else{
    numberOfCakes = 15;
}  

for (var i = 0; i < numberOfCakes; i++) {
    // console.log(i);   
    // typeCakes stores the value of the inputPrompt function outside of the function 
    addCakes(typeCakes);
}
