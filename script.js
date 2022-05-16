
// function mathfunction()



// let addons = document.querySelector('input[name=addons]:checked').value


// Math.floor(Math.random())* 3)

// computuer guess/answer needs to be const but random after they get the number correct?

let computerGuess = [Math.floor(Math.random() * 100)]

function makeAGuess() {
    let userGuess = document.querySelector('textarea').value


    if (userGuess == computerGuess) {
        alert("You Won!")
    }
    else if (userGuess < computerGuess) { 
        alert("Higher?") 
    }
    else {
        alert("lower!")
    }





    // if user guess is === 

    // else if user guess <=
    //  else  user guess >=






    // let userChoice = document.querySelector('text[name=text]').value
    //   if (userChoice === 'rock'){
    //       if (itemchoice === 'paper') {
    //           alert("Try again!") 
    //       } 
    //       else if (itemchoice === 'scissors'){
    //           alert("You Won!")
    //       }
    //       else{ alert("Tie")}
    //    }

    //    if(userChoice === 'paper'){
    //        if (itemchoice === 'paper') {
    //           alert("Tie!") 
    //       } 
    //       else if (itemchoice === 'scissors'){
    //           alert("You lost!")
    //       }
    //       else{ alert("You Win")}
    //    }
    //    if(userChoice === 'scissors'){
    //       if (itemchoice === 'paper') {
    //          alert("You Won!") 
    //      } 
    //      else if (itemchoice === 'rock'){
    //          alert("You lose!")
    //      }
    //      else{ alert("Tie")}
    //   }

}