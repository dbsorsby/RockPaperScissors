var rps = ["Rock", "Paper", "Scissors"];
function letsPlay(){
  alert("Let's play rock, paper, scissors!");
  var shoot = parseInt(prompt("Enter your choice (1 = Rock, 2 = Paper, 3 = Scissors)"));

  var usersChoice = (rps[shoot - 1]);

  var myChoice = rps[Math.floor((Math.random() * 3) + 1) - 1];

  alert("I choose " + myChoice + "!");

  function whoWins(user, me) {
    if (shoot > 3) {
      alert("I'm not sure what you were trying to pick.");
    } else if (usersChoice === myChoice) {
      alert("Looks like we tied");
    } else if (usersChoice === "Rock" && myChoice === "Paper") {
      alert("Paper covers rock.....I Win!");
    } else if (usersChoice === "Rock" && myChoice === "Scissors") {
      alert("Rock crushes scissors.....You Win!");
    } else if (usersChoice === "Paper" && myChoice === "Rock") {
      alert("Paper covers rock.....You Win!");
    } else if (usersChoice === "Paper" && myChoice === "Scissors") {
      alert("Scissors cut paper.....I Win!");
    } else if (usersChoice === "Scissors" && myChoice === "Paper") {
      alert("Scissors cut paper.....You Win!");
    } else if (usersChoice === "Scissors" && myChoice === "Rock") {
      alert("Rock crushes scissors.....I Win!");
    }

    var playAgain = parseInt(prompt("Would you like to play again? (1 = Yes  2 = No)"));

    function decision(play) {
      if (playAgain === 1) {
        return letsPlay();
      } else {
        alert("Ok...Bye!!!");
      }
    }

    decision(playAgain)

  }
  console.log(usersChoice);
  console.log(myChoice);

  whoWins(usersChoice, myChoice);
}
letsPlay()
