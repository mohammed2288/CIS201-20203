function start_game(){
	var number_to_guess = prompt("Enter a number for others to guess","");
	var guessed_number = prompt("Enter a guess", "");
				
	if(number_to_guess == guessed_number){
		document.write("Well Done!!");
	} else if (number_to_guess < guessed_number){
		document.write("The hidden number is smaller");
	} else {
		document.write("The hidden number is bigger");
	}
}