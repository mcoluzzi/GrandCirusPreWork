var userInput = prompt("What time of day is it? (morning/noon/evening)");

if(userInput == "morning") {
  console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
}
else if(userInput == "noon") {
  console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
}
else if(userInput == "evening"){
  console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
}

