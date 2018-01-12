var userName = prompt("What is your Name?");
var userIntInput = prompt("Would you like to print your name?");
var userLoopInput = "Yes";
var nameString = "Hello. My name is " + userName;

if (userIntInput == "Yes") {
	while (userLoopInput == "Yes"){

		nameString = nameString + "!";
		userLoopInput = prompt("Would you like to print this again?");
		console.log(nameString);
  }
  alert(nameString);
}
else {

}



