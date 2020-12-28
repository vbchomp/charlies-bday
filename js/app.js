/*var cupcake = "Good Morning, Cupcake!";
console.log(cupcake); */

/* Function for password */
function enterPassword() {
    var myPassword = "cuteCakes";

    do {
        var userPassword = prompt("Please enter your password");
    } while(userPassword !== myPassword);
}
enterPassword();

document.write("<br>");
document.write("<br>");

// /* Function for top 3 cakes */
// function topFlavors(); {
//     firstPlace = "Chocolate";
//     secondPlace = "Pistachio";
//     thirdPlace = "Vanilla";

//     for (var = 0; i < 3; i++) {
//         document.write(i);
//     }
// }

/* Function that asks if you want to chat*/
function promptHelp() {
    var promptHelp = "Would you like to chat?";
    var response = prompt(promptHelp);
    //console.log(response);
    response = response.toLowerCase();
    var alertMessage;
        if (response == "yes") {
        alertMessage = "I'm still learning Web Development. Please hold until I can figure out a response.";
    } else {
        alertMessage = "Good thing you are not holding your breath!";
    }
alert(alertMessage);
}

/* Calling Chat function */
promptHelp();

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

// /* Function to determine the area */
// function areaFunction() {
//     var length;
//     var width;
//     var lengthPrompt = "Enter length";
//     var widthPrompt = "Enter width";
//     var lengthResponse = prompt(lengthPrompt);
//     var widthResponse = prompt(widthPrompt);
//     var area = lengthResponse * widthResponse;
//     /* console.log(area); */

//     var alertMessage = "The area is " + area + "!";

// alert(alertMessage);
// }

// /* Calling area function */
// areaFunction();

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
//     //document.write("<section> \
//                     <h2>" + type + "cakes" + "</h2> \
//                     <img src=\"images/" + type + ".JPG\"> \
//                     </section>");
} 
                //<p>" + description ".</p> \
                // work on this one tomorrow
//document.write(type, description);

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

    //var i;
//for (i of typeCakes) {
//    document.write("<img src="images/Simple_Wed.JPG" class="responsive" alt="Wedding Cake with flowers">");
//}
