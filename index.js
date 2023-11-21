// start the game
$("#newGame").on("click",function(event){
  $(scorePlayer1).text(0);
  $(scorePlayer2).text(0); 
  $(roundPlayer1).text(0);
  $(roundPlayer2).text(0);
  
  let ROUND = 0;
  let score1 = 0; // total score player 1
  let score2 = 0; // total score player 2
  let setPlayer = 1; // player 1 start

  $("#pointRedplayer1").addClass("active");
  
  // the players have their points at 0
  $("scorePlayer1").text(0);
  $("scorePlayer2").text(0);

  $("#dice").remove(); // deleted dice image 
  $("#diceDiv").append(`<img id="dice" src="./dice/dice-1.png" alt="dice 1"/>`); // added image of dice 1 to start the game
   function changePlayer(){
    ROUND = 0;
    $(`#roundPlayer${setPlayer}`).text(`${ROUND}`)
    $(`#pointRedplayer${setPlayer}`).removeClass("active");

    if(setPlayer === 1){
        setPlayer = 2}
    else{ 
        setPlayer = 1}; 
      $(`#pointRedplayer${setPlayer}`).addClass("active");
   };
// end of player switch function
   function winner(){
      $("#HOLD").append(`<p>player${setPlayer}winner !</p>`);
      $(`#pointRedplayer${setPlayer}`).removeClass("active");
      $("#HOLD").off("click",),
      $("#rollDice").off("click");
   }
// roll dice function 
  $("#rollDice").on("click", function(){
   
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    ROUND = ROUND + randomNumber; // adding the throw score to the temporary score

    $("#dice").remove()// removing the old dice
    $("#diceDiv").append(`<img id="dice" src="./images/dice-${randomNumber}.png" alt="dice ${randomNumber}"/>`);// ajout du nouveau dé
    $(`#roundPlayer${setPlayer}`).text(`${ROUND}`) // display of the new temporary score

//  function to change player if done 1
    if(randomNumber == 1){
    changePlayer();
    }
// add temporary points to the overall score
  })
  $("#HOLD").on("click", function(){
    if (setPlayer == 1){// if player 1 is active the score goes to him 
    score1 += ROUND
    $(`#scorePlayer${setPlayer}`).text(`${score1}`)
    }
    else{// If it is player 2, the score goes to player 2
    score2 += ROUND
    $(`#scorePlayer${setPlayer}`).text(`${score2}`)
    };
    // Declare a player winner if the score equal to or greater than 100
    if (score1 >= 100 || score2 >= 100){
    $("#HOLD").on("click", winner())
    }
    else{
    changePlayer(); 
    }
  }
)
})