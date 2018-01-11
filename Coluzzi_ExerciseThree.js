var userInput = prompt("Would you like to print your name?")
var userName = prompt("What is your name?")
var nameString = "Hello. My name is " + userName;

while (userInput != "No") {
  console.log(nameString)
  nameString = nameString + "!"
  userInput = prompt("Would you like to print this again?")
}
