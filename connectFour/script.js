$(function(){

console.log('cactus');



//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\  	GAME CODE 		\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\




// ########################################################################### DECLARE 
// ########################################################################### VARIABLES


	var $gameBoard = [];
	// VARIABLE TO HOLD THE TURN
	var playerMove = true;

	// variable to hold the inputs value of the players names
	var $inputOne = $('#playerName1').val();

	var $inputTwo = $('#playerName2').val();

	// the variables holding the place to display the player name
	var $playerButton1 = $('#player1');

	var $playerButton2 = $('#player2');

	// VARIABLE TO HOLD THE SUBMIT BUTTON
	var $submit = $('#submit');


// ########################################################################### ONCLICK NAME
// ########################################################################### FUNCTION


	//$('#gameboard').hide();

	var $submitNames = $('#submit').click(function() {
		//alert($('#playerName1').val()) // this happens
		//change the css on the 
		//$('#player').slideup(); // testing out slide up
		$('#player1').css('background-color', 'white'); //  this works for less than a second
		$('#player2').css('background-color', 'white');
		$('div .box').css('background-color', '235,235,235,.3');
		//$('#player1').append($inputOne');
		$('#player1').text($('#playerName1').val());
		$('#player2').text($('#playerName2').val());

 		$('#players').hide(); // this flashes it hidden, then reverts to original
 		$('#gameboard').show()
		//$('#playerNameEntry').slideup();

	//	WHEN I CHANGED THE PLAY GAME BUTTON FROM AN INPUT TYPE SUBMIT TO A DIV, MY HOURS OF PAIN WERE OVER

	}) // ---- SUBMIT NAMES


// ########################################################################### GAME
// ########################################################################### ARRAY



	$gameBoard = [[$('#box00'),$('#box01'),$('#box02'),$('#box03'),$('#box04'),$('#box05')],
								[$('#box10'),$('#box11'),$('#box12'),$('#box13'),$('#box14'),$('#box15')],
								[$('#box20'),$('#box21'),$('#box22'),$('#box23'),$('#box24'),$('#box25')],
								[$('#box30'),$('#box31'),$('#box32'),$('#box33'),$('#box34'),$('#box35')],
								[$('#box40'),$('#box41'),$('#box42'),$('#box43'),$('#box44'),$('#box45')],
								[$('#box50'),$('#box51'),$('#box52'),$('#box53'),$('#box54'),$('#box55')],
								[$('#box60'),$('#box61'),$('#box62'),$('#box63'),$('#box64'),$('#box65')]
								];



// ########################################################################### CLEAR
// ########################################################################### BOARD


	var $clearBoard = $('#clear').click(function() {

	//alert('clicked to clear')
		if ($('div .box').text('X O')){ 
				// THEN CHANGE THE COLOR OF THE LAST CHILD TO BLUE
			 	$('div .box').css('background-color', '#ebebeb').css('opacity','.6').css('color', '#ebebeb').text('.');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$('ul').removeClass('1 2 3 4 5 6').addClass('0');
		} // -- CLOSE IF
	}) // -- CLOSE CLEARBOARD



// ########################################################################### GETWINNER
// ########################################################################### FUNCTION



var $getWinner = function(){

//TESTING FOR A WINNER BY COUNTING ALONG THE MATRIX
 	for(var i = 0; i<$gameBoard.length-1; i++){
 		for (var j = 0; j<$gameBoard[i].length-1; j++){

		if ($gameBoard[i][j].text() == 'X' && $gameBoard[i+1][j].text() == 'X' && $gameBoard[i+2][j].text() == 'X' && $gameBoard[i+3][j].text() == 'X'){ 	
		 		alert($('#player1').text() +  ' wins row');

		} else if ($gameBoard[i][j].text() == 'O' && $gameBoard[i+1][j].text() == 'O' && $gameBoard[i+2][j].text() == 'O' && $gameBoard[i+3][j].text() == 'O'){
		 		alert($('#player2').text() +  ' wins row');

		} else if ($gameBoard[i][j].text() == 'X' && $gameBoard[i][j+1].text() == 'X' && $gameBoard[i][j+2].text() == 'X' && $gameBoard[i][j+3].text() == 'X'){
				alert($('#player1').text() +  ' wins column');

		} else if ($gameBoard[i][j].text() == 'O' && $gameBoard[i][j+1].text() == 'O' && $gameBoard[i][j+2].text() == 'O' && $gameBoard[i][j+3].text() == 'O'){
				alert($('#player2').text() +  ' wins column');
		
		// WORKING ON TESTING A DIAGONAL.   SOMETHING IS OFF WITH THE COUNT OF THE ARRAY		

//  	for(var i = 6; i>$gameBoard.length-1; i--){
//  		for (var j = 0; j<$gameBoard[i].length-1; j++){


// 		if ($gameBoard[i][j].text() == 'X' && $gameBoard[i-1][j+1].text() == 'X' && $gameBoard[i-2][j+2].text() == 'X' && $gameBoard[i-3][j+3].text() == 'X'){
// 				alert($('#player1').text() +  ' wins column');

// 		} else if ($gameBoard[i][j].text() == 'X' && $gameBoard[i+1][j-1].text() == 'X' && $gameBoard[i+2][j-2].text() == 'X' && $gameBoard[i+3][j-3].text() == 'X'){
// 				alert($('#player1').text() +  ' wins column');
// }
// }
// }

//  	for(var i = 0; i<$gameBoard.length-1; i++){
//  		for (var j = 6; j>$gameBoard[i].length-1; j--){

// 		if ($gameBoard[i][j].text() == 'O' && $gameBoard[i-1][j+1].text() == 'O' && $gameBoard[i-2][j+2].text() == 'O' && $gameBoard[i-3][j+3].text() == 'O'){
// 				alert($('#player2').text() +  ' wins column');

// 		} else if ($gameBoard[i][j].text() == 'O' && $gameBoard[i+1][j-1].text() == 'O' && $gameBoard[i+2][j-2].text() == 'O' && $gameBoard[i+3][j-3].text() == 'O'){
// 				alert($('#player2').text() +  ' wins column');

			} //else alert('no winner');

		} // --- close i
	}	// --- close j
} // --- close out get winner



// ########################################################################### ONCLICK PLAY
// ########################################################################### FUNCTION

	
//	WHEN YOU CLICK ON THE UL
	var $ulClick = $('ul').click(function() {
		// BOTTOM BOX
		// IF THIS UL HAS THE CLASS 0 AND THE PLAYERMOVE IS SET TO TRUE
			if (playerMove === true && $(this).hasClass('0')){ 
				//console.log('reading')
				// THEN CHANGE THE COLOR OF THE LAST CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':last').css('background-color', "#d1ff19").css('opacity', '.9').css('color', '#d1ff19').text('X');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('0').addClass('1');
				// change the box at the top to corresponding oclor
				$('#player1').css('background-color', "#d1ff19");
			 	//console.log($gameBoard);
			 	// CHECK FOR WINNER
				$getWinner();	
			 	// CHANGE THE PLAYERMOVE TO FALSE
				playerMove = false;

				// SECOND FROM BOTTOM
			} else if (playerMove === true && $(this).hasClass('1')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(5)').css('background-color', "#d1ff19").css('opacity', '.9').css('color', '#d1ff19').text('X');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('1').addClass('2');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO FALSE
			 	playerMove = false;	

			 	// THIRD FROM BOTTOM
			} else if (playerMove === true && $(this).hasClass('2')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(4)').css('background-color', "#e0ff66").css('opacity', '.9').css('color', '#e0ff66').text('X');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('2').addClass('3');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO FALSE
				playerMove = false;

				// FOURTH FROM BOTTOM
			} else if (playerMove === true && $(this).hasClass('3')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(3)').css('background-color', "#e0ff66").css('opacity', '.9').css('color', '#e0ff66').text('X');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('3').addClass('4');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO FALSE
				playerMove = false;

				// FIFTH FROM BOTTOM
			} else if (playerMove === true && $(this).hasClass('4')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(2)').css('background-color', "#eaff99").css('opacity', '.9').css('color', '#eaff99').text('X');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('4').addClass('5');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO FALSE
				playerMove = false;

				// SIXTH FROM BOTTOM
			} else if (playerMove === true && $(this).hasClass('5')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(1)').css('background-color', "#eaff99").css('opacity', '.9').css('color', '#eaff99').text('X');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('5').addClass('6');
			 	// CHECK FOR WINNER
				$getWinner();	
			 	// CHANGE THE PLAYERMOVE TO FALSE
				playerMove = false;

				// START PLAYER 2 MOVES

			}	else if (playerMove === false && $(this).hasClass('0')){ 
				// THEN CHANGE THE COLOR OF THE LAST CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':last').css('background-color', "#329999").css('opacity', '.9').css('color', '#329999').text('O');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('0').addClass('1');
			 	// CHECK FOR WINNER
				$getWinner();
			 	$('#player2').css('background-color', "#b2d8d8");
			 	// CHANGE THE PLAYERMOVE TO TRUE
				playerMove = true;

				// SECOND FROM BOTTOM
			} else if (playerMove === false && $(this).hasClass('1')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(5)').css('background-color', "#329999").css('opacity', '.9').css('color', '#329999').text('O');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('1').addClass('2');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO TRUE
			 	playerMove = true;	

			 	// THIRD FROM BOTTOM
			} else if (playerMove === false && $(this).hasClass('2')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(4)').css('background-color', "#7fbfbf").css('opacity', '.9').css('color', '#7fbfbf').text('O');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('2').addClass('3');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO  TRUE
				playerMove = true;

				// FOURTH FROM BOTTOM
			} else if (playerMove === false && $(this).hasClass('3')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(3)').css('background-color', "#7fbfbf").css('opacity', '.9').css('color', '#7fbfbf').text('O');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('3').addClass('4');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO TRUE
				playerMove = true;

				// FIFTH FROM BOTTOM
			} else if (playerMove === false && $(this).hasClass('4')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(2)').css('background-color', "#b2d8d8").css('opacity', '.9').css('color', '#b2d8d8').text('O');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('4').addClass('5');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO TRUE
				playerMove = true;

				// SIXTH FROM BOTTOM
			} else if (playerMove === false && $(this).hasClass('5')){ 
				// THEN CHANGE THE COLOR OF THE NTH(5) CHILD TO PLAYER COLOR, ADJUST THE OPACITY, THE TEXT COLOR, AND THE INNERTEXT
			 	$(this).children(':nth-child(1)').css('background-color', "#b2d8d8").css('opacity', '.9').css('color', '#b2d8d8').text('O');
			 	// CHANGE THE CLASS FROM 0 TO 1
			 	$(this).removeClass('5').addClass('6');
			 	// CHECK FOR WINNER
				$getWinner();
			 	// CHANGE THE PLAYERMOVE TO TRUE
				playerMove = true;

			} // ---- close else if

 }) // ---- CLOSE OUT CLICKED


});		// --------- CLOSING OUT FUNCTION

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\ 	END GAME CODE 	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\



// 1:1

// What is MVP
// - Provide wireframes for what the basic layout will be
// - Provide wireframe showing some sort of responsive
	// - Plan for responseiveness
	// - Bpnus for repsonseivenss

// User Interaction
// - Gravity: onclick identifies column
	// - it should check for some sort of list of data that matches/mirrors the state of the column and figure out some sort of algo to go to the bottom
	// - Register the move

// Logicside
// Win condition
	// - horizontal
	// - vertical
	// - uphill diagnonal
	// - downhill diag

// Commits

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\
////		Necessary features
//\\
////		A basic implementation of this project must include:
//\\
//// 		An interactive board which renders on page load
//\\		A way for players to set their name
//// 		A way for players to mark an empty space on their turn
//\\ 		The game should end when there is a winner, or if the game is a tie
//// 		The game should report the end state
//\\
////
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\																						 	
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\
////		FUNCTIONAL CONNECT FOUR
//\\		DECLARE WINNER
////		SET NAME PAGE
//\\
//// 		MINIMALIST THEME -- PUSH IS FOR AN AMPED UP CSS
//\\		RESONSIVE
//// 		TEST FOR A WINNER
//\\ 		
//// 		
//\\
////
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


//// THURSDAY
//// I'M GOING TO WORK ON GETTING THE BASIC LAYOUT IN CSS 							---- DONE
//// LAY OUT THE LOGIC AS BEST I CAN 																		---- DONE
//// GET ONCLICK WORKING																								---- DONE
//// GET THE PLAYER PORTION OF THE GAME FLOW SET UP 										---- DONE
//// -- THIS SHOULD BE "RELATIVELY" EASY FROM THE TIC TAC TOE GAME


// FRIDAY
// TEST THE ARRAY OF THE ARRAY OF THE GAMEBOARD BEFORE I GET TOO FAR ALONG TO CHANGE THAT								---- HARD CODE ARRAY
// ---------- STARTED WITH PURE DIV, THEN DIVS IN DIVS.  AM AT UL'S FOR ROWS AND DIVS FOR THE SPACES
// GET THE DROP DOWN TO GO BOTTOM UP 																																		---- WORKING ON THIS.   WILL IF IT
// START BLOWING THROUGH THE LOGIC PORTION
// ASSESS WHERE I AM AT 3 PM AND LAY OUT A HARD TIMELINE FOR THE WEEKEND.   


// SATURDAY 9:30 AM

// DONE

// BASIC CLASS
// GRAVITY WORKING
// 


// TO DO

// SUBMIT NAMES FUNCTION
// GET THE PLAYER NAMES TRANSFORMATION IN AND HIDDEN FEATURE.
// WIREFRAMES FOR END LOOK
// GETWINNER FUNCTION
// CLEAR BOARD FUNCTION
// THEME
// BETTER CSS





// SUNDAY
// THURSDAY EMILY IS HOPING SUNDAY EMILY IS DONE WIHT THE GAME.  AWARE THAT IS A PIPEDREAM AND TOTALLY OUT OF THE REALM OF POSSIBILITY
// SET UP THE GIT HUB WEBSITE
// CREATE THE README FILE

// MONDAY
// MAKE THE CSS BEAUTIFUL.  ANIMATE?
// CLEAN UP COMMENTS.  MAKE IT READABLE FOR OTHER PEOPLE
// FIX PUNCTUATION
// FIX TABS



// ########################################################################### THINGS I'LL NEED 
// ###########################################################################

// ------- PLAYER NAME INPUT BOXES

// ------- PLAYER START BUTTON 

// ------- A BOARD WITH 6 ROWS AND 7 COLUMNS

// ------- SET EACH DIV TO A CLASS OF THE INDEX

// ------- REPORT THE END STATE

// ------- RESET BUTTON


// ########################################################################### STRUCTURE 
// ###########################################################################







// ########################################################################### FLOW OF GAME
// ###########################################################################

// PLAYER PRESSES START

// ---- PLAYER1 CHOOSES A SPOT
// ---- ON CLICK (WE'LL ASSUME COLUMN BUTTON PENDING FURTHER INVESTIGATION)
// ------- IF ROW IS NOT FULL AND PLAYER = 1 
// ----------- THE TOKEN WILL MOVE TO THE LOWEST INDEX AVAILABLE
// ----------- UPDATE THE CSS OF THE DIV
// ----------- CHANGE CLASS FROM EMPTY TO PLAYER1
// ----------- CHECK FOR WINNER FUNCTION WILL RUN

// ---- PLAYER2 CHOOSES A SPOT
// ---- ON CLICK (WE'LL ASSUME COLUMN BUTTON PENDING FURTHER INVESTIGATION)
// ------- IF ROW IS NOT FULL AND PLAYER = 2 
// ----------- THE TOKEN WILL MOVE TO THE LOWEST INDEX AVAILABLE
// ----------- UPDATE THE CSS OF THE DIV
// ----------- CHANGE CLASS FROM EMPTY TO PLAYER1
// ----------- CHECK FOR WINNER FUNCTION WILL RUN


// WHEN A WINNER IS DECLARED, ALERT IN A BOX WHO THE WINNER IS
// SHOULD THIS GO IN THE GET WINNER FUNCTION?  PROBABLY, YES.


// ########################################################################### FLOW OF GAME 
// ###########################################################################

// THE BOARD WILL BE MADE UP OF DIVS INSIDE OF A SECTION
// THE DIVS WILL HAVE A CLASS OF EMPTY AND A CLASS OF 





// ###########################################################################
// ########################################################################### QUESTIONS 
// ###########################################################################


// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 
//     																			  												SELECTING AND MOVING DOWN THE ROW
// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? //

// ------- DOES PLAYER SELECT THE SPOT THEY WANT AND TOKEN GOES TO BOTTOM MOST SPOT?
// ------- DOES PLAYER HIT A BUTTON ON THE ROW THEY WANT TO CHOOSE?
// ------- DO I SHOW THE TOKEN IN EACH SPOT AS IT MOVES DOWN THE ROW?




// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 
//     																											  								SOLIDIFY GET WINNER LOGIC
// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 

// HARD.PART.OMG.  

// WILL THIS BE A THREE PART, ROWS, COLUMNS, AND DIAGONALS






// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 
//     																													 	 													CHOOSE THEME
// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 


// ------- RAMEN
// ------- WISCONSIN -- CHEESE AND COWS
// ------- MINIMALIST


// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 
//     																															  												STRUCTURE
// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 


// ------- SECTION UL AND LI

// ------- SECTION AND DIVS?

// ------- WHAT IS THE BEST WAY TO GET INFORMATION INTO THE ARRAY?  CAN I DO SECTION?  PROBABLY NOT IF I DO UL AND LI.   
// ------- HOW ELSE WOULD I GET THE TOKEN TO DROP TO THE 


// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // 
//     																											  																	GENERAL
// ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? // ?? //

// PUSHING HTML STRUCTURE INTO AN ARRAY - EASILY
// MULTIPLE CLASSES.   I KNOW IT'S POSSIBLE

// ########################################################################### THINGS TO RESEARCH 

// MORE ON LOGIC OF THE DIAGONAL WINNER FUNCTION.

// MY MIND IMMEDIATELY SAW THE 		[i] 		[j]
// 																[i]+1		[j]-1													
// 																[i]+2		[j]-2
// 																[i]+3		[j]-3
//										
// BASED ON HOW I RAN MY TIC TAC TOE, I DON'T SEE THIS BEING TOOOOOOOOO MUCH OF AN ISSUE














//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\																						 	
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//  THE LAND OF DEAD CODE.    THIS IS THE 90% WHAT IS HAPPENING AREA.   IE PROOF OF LIFE.




//######################################################################################## GAME ARRAY IN LOOP
//######################################################################################## I THINK IT WAS A JQUERY SYNTAX
//######################################################################################## PROBABLY HAD IT RIGHT AT 2 HOURS
//######################################################################################## ESTIMATE 5 HOURS 

			// // CHRISTINE HELPED IMMENSELY
			// 	for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS
			// 		//CREATE AN ARRAY FOR EACH COLUMN
			// 		var colArray = [];

			// 		//CREATE A VARIABLE TO HOLD EACH COLUMN
			// 		var $columns = $('ul i');
			// 		console.log($columns)
			// 		colArray.push($columns);
			//  		console.log(colArray)

			// 		//gameBoard.push($colArray);

			// 		//colArray.push($columns)
			// 		//console.log(gameBoard);
			// 		for(var j=0; j<6; j++){	// ITERATE THROUGH ROWS
			// 			gameBoard.push(colArray);
			// 			//colArray.push($columns [j])
			// 			//.push($('ul')[j]);
			// 			//newArray.push($('div #box').text()) // creates another column
			// 			//newArray.push($('div').text()) // creates another column of the 42 string value
			// 			//console.log(gameBoard)

			// 			// HOW DO I PUSH THE TEXT INTO THE CORESPONDING [i][j]
			// 		}
			// 	}
			// 	console.log(gameBoard)

			// this gives me my empty arrays
			// var columnArray =[];
			// for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS
			// gameBoard.push(columnArray);
			// }

			// 	for( j=0; j<6; j++){
			// 		//columnArray.push($('div')[j]);
			// 	}
			//console.log(gameBoard)


			// // THIS GIVES ME 7 ARRAYS ALL WITH COLUMN 1
			// var columnArray =[];
			// //STARTING FROM SCRATCH
			// for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS

			// 	//CREATE A VARIABLE FOR THE INNER ARRAY
			// 	var $columns = $('ul')

			// 	console.log($columns)
			// gameBoard.push(columnArray[i]);
			// 	// iterate through and create 7 column arrays


			// //var $columns = $('ul');
			// //var $columns = $('ul');
			// 	for( j=0; j<6; j++){


			// columnArray.push($('div')[j]);

			// }
			// }
			// console.log(gameBoard)

/// this produces an array with 7 arrays
			// var $gameArray = [];
			// var $columnArray =[];
			// 	var $columns = $('ul')
			// 	for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS
			// 		$gameArray.push($columnArray)
			// 		for( j=0; j< 6; j++){
			// 			$columnArray.push($('.box'[j]))
			// 		}



			// }


			// console.log($gameArray)

			// THIS GIVES ME 7 ARRAYS ALL WITH COLUMN 1

			//#################################################
			// var $board = [];
			// var $columnArray =[];
			// //STARTING FROM SCRATCH
			// 	var $columns = $('ul')
			//    for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS
   //        var $columnArray =[];
			// 	//CREATE A VARIABLE FOR THE INNER ARRAY
			// 	//$columnArray.push($columns [i]) // this is close.  it's double iterating
			// 	//console.log(($columns)[i])
			// 	//console.log(('ul') [i])
			// 	//columnArray.push($('ul') [i]) // this is close.  it's double iterating
			// 	//console.log($columns)
			// //columnArray.push($columns);
			// 	// iterate through and create 7 column arrays
			// 	////columnArray.push($('ul') [i]) // this is close.  it's double iterating
			// 	////console.log(columnArray)
			// //$columnArray.push($('ul')[i]) // this is close.  it's double iterating
			// //console.log(gameBoard)

			// 	//for( j=0; j<6; j++){

			// //$board.push($('.box')[j]);
			// $board.push($columnArray)

			
			// }

			// //$columnArray.push($('.box [j]'))
			// console.log($board)

			//#################################################
			// var $gameArray = [];
			// var $columnArray =[];
			// 	var $columns = $('ul')
			// 	for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS
			// 		//push the columns into the column array
			// 		$gameArray.push($columnArray)
			// 		//$columnArray.push($('ul') [i]) // this is close.  it's double iterating
			// 		//iterate the rows
			// 		//for( j=0; j<6; j++){
			// 			//push the cells into the column array
			// //$columnArray.push($('div .box')[j]);

			// //}
			// }
			// console.log($gameArray)



	// THIS GIVES ME 7 ARRAYS ALL WITH COLUMN 1
			// var columnArray =[];
			// //STARTING FROM SCRATCH
			// for(var i = 0; i<7; i++){ // ITERATE THROUGH COLUMNS

			// 	//CREATE A VARIABLE FOR THE INNER ARRAY
			// gameBoard.push(columnArray);
			// 	// iterate through and create 7 column arrays
			// }

			// //var $columns = $('ul');
			// //var $columns = $('ul');
			// 	for( j=0; j<6; j++){


			// columnArray.push($('div')[j]);
			// }
			// console.log(gameBoard)


			//newArray.push($(this).text());

			//for (var q = 5; q<-)

			// console.log(gameBoard);
			// column1Array.push($('#column1').text())

			// console.log(column1Array)
			// gameBoard.push(column2.push($('#column2').text()));
			// gameBoard.push(column3.push($('#column3 div').text()));
			// gameBoard.push(column4.push($('#column4 div').text()));
			// gameBoard.push(column5.push($('#column5 div').text()));
			// gameBoard.push(column4.push($('#column6 div').text()));
			// gameBoard.push(column5.push($('#column7 div').text()));


			// gameBoard.push(colBoard);
			// console.log(gameBoard);
			// var colArray = gameBoard.splice(7);
			// gameBoard.push(smallArray);
			// console.log(smallArray)

			// console.log($('ul').text()) -- RETURNS ALL ULS STRUNG TOGETHER
			// console.log($('#column1').text()) -- RETURNS ALL DIVS IN THE UL TOGETHER
			// var columnone = $('#column1').text().split(',')
			// column1Array = [];
			// column1Array.push(columnone)

			// console.log(column1Array)
			// console.log(gameBoard);
			// for (var i=0; i<gameBoard.length; i++) {
		  //   var smallarray = gameBoard.splice(i,i+7);
		 	//   console.log(smallarray);
		 	//    gameBoard.push(smallarray)
			// 	}	
			// 	console.log(gameBoard)
			//	var smallArrays = 
			//	console.log(colArray);

	//this is pushing the entire board into the gameboard array
			// for( var i=0; i<=7; i++){}
			// 	//console.log($('section ul div'));
			//  	gameBoard.push($('ul div').text())
			// 	console.log(gameBoard);

			//console.log($('section ul').text())




	//this is pushing the entire board into the gameboard array
			// for( var i=0; i<=7; i++){}
			// 	//console.log($('section ul div'));
			// 	gameBoard.push($('ul div').text())
			// 	console.log(gameBoard);

// this only pulls the text that the board was set up up with.  not dynamic
	// $gameBoardText = [[($('#box00').text()),($('#box01').text()),($('#box02').text()),($('#box03').text()),($('#box04').text()),($('#box05').text())],
	// 						[($('#box10').text()),($('#box11').text()),($('#box12').text()),($('#box13').text()),($('#box14').text()),($('#box15').text())],
	// 						[($('#box20').text()),($('#box21').text()),($('#box22').text()),($('#box23').text()),($('#box24').text()),($('#box25').text())],
	// 						[($('#box30').text()),($('#box31').text()),($('#box32').text()),($('#box33').text()),($('#box34').text()),($('#box35').text())],
	// 						[($('#box40').text()),($('#box41').text()),($('#box42').text()),($('#box43').text()),($('#box44').text()),($('#box45').text())],
	// 						[($('#box50').text()),($('#box51').text()),($('#box52').text()),($('#box53').text()),($('#box54').text()),($('#box55').text())],
	// 						[($('#box60').text()),($('#box61').text()),($('#box62').text()),($('#box63').text()),($('#box64').text()),($('#box65').text())]
	// 						];


//console.log($('#box01').text()) // this pulls the innertext
//console.log($gameBoard)
//console.log($gameBoardText)
//console.log($gameBoard) // this pulls the arrays of arrays but nothing is populated
//console.log($('gameBoardArray')) // not right
//console.log($gameBoard[0][0].text()); // this is pulling the innertext of hte matrix.  hallelujah!




// 			console.log($board)
			// 	for(var i = 0; i< $gameBoard.length; i++){ // ITERATE THROUGH COLUMNS
			// 		for( j=0; j< $gameBoard[i].length; j++){ // ITERATE THROUGH THE ROWS
			// 			console.log($gameBoard[i][j])

			// }
			// }
			//console.log($gameBoard[1][3].text())






//######################################################################################## ON CLICK
//######################################################################################## FIRST SET UP AS BOX CLICK
//######################################################################################## ESTIMATE 2 HOURS

////////////////////////////////////////////////////////////////////////this is working
//PUT CLICK IN THE TRUE STATEMENT
// var $divClick = $('div').click(function() {
// 	if(this.className ==='empty' && playerMove === true){
// 		$(this).css('background-color', "#008fff");
// 		$(this).addClass('playerX');
// 		$(this).text('X');
// 		playerMove = false;


// } else if (this.className === 'empty' && playerMove === false){
// 		$(this).css('background-color', "#ff0bee");
// 		$(this).addClass('playerO');
// 		$(this).text('O');
// 		playerMove = true;		
// 	} // ---- close else if


//  }) // ---- CLOSE OUT CLICKED

//////////////////////////////////////////////////////////////////////this is working

// this is my code to mess with



	// var $divClick = $('div').click(function() {
	// 	if ($(this).hasClass("empty") && playerMove === true){
	// 		$(this).css('background-color', "#008fff");
	// 		$(this).removeClass("empty");
	// 		$(this).addClass('X');
	// 		$(this).text('X');
	// 		console.log(gameBoard)
	// 		playerMove = false;


	// } else if ($(this).hasClass("empty") && playerMove === false){
	// 		$(this).css('background-color', "#ff0bee");
	// 		$(this).removeClass('empty').addClass('O');
	// 		$(this).text('O');
 // 			playerMove = true;		
	// 	} // ---- close else if
	//  }) // ---- CLOSE OUT CLICKED






//######################################################################################## GAME ARRAY
//######################################################################################## HARD CODED IN REVERSE
//######################################################################################## ESTIMATE 15 MINUTES


// var $gameBoard = [[$('#box60'),$('#box61'),$('#box62'),$('#box63'),$('#box64'),$('#box65'),$('#box66')],
// 									[$('#box50'),$('#box51'),$('#box52'),$('#box53'),$('#box54'),$('#box55'),$('#box56')],
// 									[$('#box40'),$('#box41'),$('#box42'),$('#box43'),$('#box44'),$('#box45'),$('#box46')],
// 									[$('#box30'),$('#box31'),$('#box32'),$('#box33'),$('#box34'),$('#box35'),$('#box36')],
// 									[$('#box20'),$('#box21'),$('#box22'),$('#box23'),$('#box24'),$('#box25'),$('#box26')],
// 									[$('#box10'),$('#box11'),$('#box12'),$('#box13'),$('#box14'),$('#box15'),$('#box16')],
// 									[$('#box00'),$('#box01'),$('#box02'),$('#box03'),$('#box04'),$('#box05'),$('#box06')]
// 									];



//######################################################################################## CLICK ON THE COLUMN START
//######################################################################################## LOTS OF SYNTAX CHANGES
//######################################################################################## ESTIMATE 2 HOURS

// SWITCHING TO UL CLICK
// this changes the entire column $(this).children('div').css('background-color', "#ff0bee"); -- changes entire column

//	WHEN YOU CLICK ON THE UL
	// var $ulClick = $('ul').click(function() {
	// 	console.log(playerMove);
	// 	console.log($('.className'))
	// 	// IF THIS UL HAS THE CLASS COL AND THE PLAYERMOVE IS SET TO TRUE
	// 		if (playerMove === true && $(this).className === ".0"){ // && $(this).children(':last').css('background-color' === 'white')){
	// 		 	$(this).children(':last').css('background-color', "#008fff");
			 	
	// 		 	$(this).className('1');
	// 			playerMove = false;
	// 		// }	else if (playerMove === true  && $(this).children(':last').css('background-color' === "#008fff")){
	// 		// 	 	$(this).children(':last').css('background-color', "#008fff");
	// 		// 		playerMove = false;
	// 		 	} else if (playerMove === false){
	// 		 	 $(this).children(':last').css('background-color',  "#ff0bee");
	// 		// // 		$(this).children('div').css('background-color', "#ff0bee");
				
	// 	   			playerMove = true;		
	// 		 	} // ---- close else if



 // }) // ---- CLOSE OUT CLICKED


//######################################################################################## CLEAR BOARD
//######################################################################################## JUST FINE



// $( "#clickme" ).click(function() {
//   $( "#book" ).hide( "slow", function() {
//     alert( "Animation complete." );
//   });
// });

//////////////////REDO X AND O TO THE VARIABLE HOLDING PLAYER ONE AND PLA

// $('#clear').click(function(){
// 	$('.container div').css('background-color', "white");


// }) // ---- CLOSE OUT CLEARBOARD



//######################################################################################## GET WINNER
//######################################################################################## 
//######################################################################################## ESTIMATE 6 HOURS


// 	//for(var i = 0; i < 6; i++){
// 	//	for(var j = 0; j < 5; j++){

// //var $getRowWinner = $(function(){
// 	//for(var i = 0; i <= 7; i++){
// 		//for(var j = 0; j <= 6; j++){
// 		//	if ($gameBoard[i][j] ===  $gameBoard[i][j]+1 === $gameBoard[i][j]+2 === $gameBoard[i][j]+3){
// 		//		alert('row winner');
// 	//} // --- CLOSE J
// 	//} // --- CLOSE I
// 	//} // -- close out if
// //console.log($gameBoard[i][j]) // --- this logs each box

// var getRowWinner = function(){
// 	for(var i = 0; i < $gameBoard.length; i++){
// 		for(var j = 0; j < $gameBoard[i].length; j++){

// 	//if ($gameBoard[0][0].text() == "X"){ --- yes, works


// 	//if ($gameBoard[i][j].text() && $gameBoard[i][j+1].text() && $gameBoard[i][j+2].text() && $gameBoard[i][j+3].text()== "X"){
// 	//if ($gameBoard[i][j].text() === "X" && $gameBoard[i][j+1].text() === "X"){ ---- nothing
// 	//if ($gameBoard[i][j].text() && $gameBoard[i][j+1]) === "X"){  // unexpected token ===
// 	//if ($gameBoard[i][j].text() ==="X" && $gameBoard[i][j+1]).text() === "X"){  // unexpected token .
// 	if ($gameBoard[i][j].text()== 'O' && $gameBoard[i][j+1] == "O") {  
// 	console.log("0 wins")
// }
// }
// 	}

// }; // --- close out get winner


// console.log($gameBoard[0][0])

// 	// var findWinner = function(){

// 	// 		// GRAB A STRING OF THE INNERTEXTS OF THE SQUARES AND TURN THEM INTO AN ARRAY.  (THE POSSIBLE COMBOS OF A STRING WERE TOO MANY
// 	// 		var $currentCombo = $('#square div').text().split('');

// 	// 			// TEST TO SEE IF A ROW WON ---- USE THE FIRST SQUARE IN EACH TO ALERT THE WINNER
// 	// 			// USING THE TEXT IN THE THE CELL WAS SHARON'S IDEA
// 	// 			// DON'T HAVE ACCESS TO THE FONT IN THE ALERT BOXES TO CHANGE X AND O TO THE RAMEN AND PIG

// 	// 			if ($currentCombo[0] === $currentCombo[1] && $currentCombo[1] === $currentCombo[2] && $currentCombo[2] != "-"){
// 	// 				alert('row winner ' + $currentCombo[0]);
// 	// 			} else if($currentCombo[3] === $currentCombo[4] && $currentCombo[4] === $currentCombo[5] && $currentCombo[5] != "-"){
// 	// 				alert('row winner ' + $currentCombo[3]);
// 	// 			} else if($currentCombo[6] === $currentCombo[7] && $currentCombo[7] === $currentCombo[8] && $currentCombo[8] != "-"){
// 	// 				alert('row winner ' + $currentCombo[6]);

 	//for(var i = 0; i<$gameBoard; i++){
 		//for (var j = 0; j<$gameBoard[i].length; j++){
 			//if ($gameBoard[i][j].text() === 'X' && $gameBoard[i+1][j] === 'X' && $gameBoard[i+2][j] === 'X' && $gameBoard[i+3][j]){ 	
 			//console.log($gameBoard[i][j].text())
 			//console.log($gameBoard[0)][0].text())


// console.log($gameBoard[0])


//this is what to type to get the value of the player
//console.log($gameBoard[0][0].text())


//console.log($gameBoard.length)
//console.log('#column1'.length)
//console.log($gameBoard[0].length)

//// below is the line that is pulling
//// if ($gameBoard[0][0].text() == 'X' && $gameBoard[1][0].text() == 'X' && $gameBoard[2][0].text() == 'X' && $gameBoard[3][0].text() == 'X'){ 	
//// console.log('X winner')

//}
//}

