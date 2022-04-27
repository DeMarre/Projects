// function mathfunction()



// let addons = document.querySelector('input[name=addons]:checked').value


// Math.floor(Math.random())* 3)

function mathMe(){
  const computerChoice = ['rock','paper','scissors']
   let itemchoice = computerChoice[Math.floor(Math.random()* 3)]
    let userChoice = document.querySelector('input[name=item]:checked').value
    if (userChoice === 'rock'){
        if (itemchoice === 'paper') {
            alert("Try again!") 
        } 
        else if (itemchoice === 'scissors'){
            alert("You Won!")
        }
        else{ alert("Tie")}
     }

     if(userChoice === 'paper'){
         if (itemchoice === 'paper') {
            alert("Tie!") 
        } 
        else if (itemchoice === 'scissors'){
            alert("You lost!")
        }
        else{ alert("You Win")}
     }
     if(userChoice === 'scissors'){
        if (itemchoice === 'paper') {
           alert("You Won!") 
       } 
       else if (itemchoice === 'rock'){
           alert("You lose!")
       }
       else{ alert("Tie")}
    }
     
}
