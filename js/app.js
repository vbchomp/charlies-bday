// Trying this again
// function promptName() {
//     var myName = "charlie";
//     do {
//         var userName = prompt("What is your name?");
//     } while(userName !== myName);
// }
// promptName();

/* Function that asks your name*/
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

/* Calling Name function */
promptName();

/* Function for password */
function enterPassword() {
    var myPassword = "bday";

    do {
        var userPassword = prompt("Please enter your password");
    } while(userPassword !== myPassword);
}
// Calling password function
enterPassword();

/* Function to show pictures */
function showPics(typePics) {
    // // Declare the variable prompPics
    // var promptPics = "How many pictures would you like to see?"
    // // Assign responsePics the value of promptPics
    // var responsePics = prompt(promptPics);
    // // console.log(responsePics);
    // // Create function to determine whether write should have pic or pics
    // function picPics() {
    //     if (responsePics > 1) {
    //         document. write("That is amazing! I can show you " + responsePics + " pictures!");
    //     } else {
    //         document. write("That is amazing! I can show you a picture!");
    //     }
    // }
    // Call the picPics function
    var typePics = inputPrompt("What picture do you want? Choose sisters or grandparents");

    if(typePics === "sisters") {
        var htmlImage = "<img src=\"images/" + typePics + ".JPG\" class=\"responsive\">";
        document.write(htmlImage);
    }else if (typePics === "grandparents") {
        var htmlImage = "<img src=\"images/" + typePics + ".JPG\" class=\"responsive\">";
        document.write(htmlImage);
    }

    // for (var i = 0; i < responsePics; i++) {
    //     picPics(typePics); 
    // }  
}
// Call the showPics function
showPics();

document.write("<br>");
document.write("<br>");
