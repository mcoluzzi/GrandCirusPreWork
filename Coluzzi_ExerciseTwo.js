userString = "";

do {
	var play = prompt("Do you want to play? Yes/No ");

		if (play == "Yes") {
		 	var userInput = prompt("Enter a word!");
		 	userString = userString+" "+userInput;
		} 

}while(play != "No");

alert(userString);