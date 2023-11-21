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
    $("#diceDiv").append(`<img id="dice" src="./images/dice-1.png" alt="dice 1"/>`); 
    // added image of dice 1 to start the game
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
    })