
// 7 concepts
// giveHint -gives hint
// playAgain -reset computer (play again)(reset)
// 0,1,2,3
//  categories = ['Action','Romance','Anime']
 let randNum = Math.floor(Math.random()* 3);
 let underScore = [];
//  let movies=['Columbiana','Twilight','SpiritedAway']
let numberOfLives = 10;
// 


const computerChoice = ['Action','Romance','Anime']
    let userchoice = computerChoice[randNum]


    console.log(userchoice
     )

let movies=['Columbiana','Twilight','SpiritedAway']
let userchoice1 = movies[randNum].toUpperCase()

    console.log(userchoice1)








//     movies == categories

// if (computerChoi= Action === Columbiana
// Romance == Twilight
// Anime == SpiritedAway







// function reset(){ 
//     onclick(reset)


// }


// function seek(alphabet)
// {
//     if('A') ;
//     else alert('try again')
// }


// does the word have the letter
// function click(letter){
//if true --fill in space
//else-- we count as an error
// alert console.log()
// }

function categories(){
    document.querySelector('#categories').innerHTML = userchoice ;
}

 categories()



// workkkk through it! ask mentors//
// alphabet
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function alphabetbtn() {
document.getElementById('alpha').innerHTML = document.getElementById('alpha').innerHTML
}
let userInput = [];
let position; 

function addUnderScores(letter) {
   if(letter){
    userInput.push(letter)
    for (let i = 0; i < userchoice1.split('').length; i++) {
        if(position == i && letter){
            document.querySelector(`#s${i}`).innerHTML = `<under id=s${i}>${letter}</under>`
        }
       
    }
   }
   else{
    for (let i = 0; i < userchoice1.split('').length; i++) {
       
            underScore.push(`<under id=s${i}>_</under>`); 
       
    }

   }
    document.querySelector('.underscore').innerHTML =  underScore;
}

// test ^^^ 

addUnderScores()

function letter(letters){
    // let underScore = document.getElementById('alpha');
    // innerHTML = button.innerHTML;
    // alert(userchoice1.includes(letters))
    
    for (let i = 0; i < userchoice1.length; i++) {
        position = i
        addUnderScores(letters)
    }
    if(!userchoice1.includes(letters)){
        numberOfLives = numberOfLives - 1
    }
    //maybe show alert of game over?
    alert(numberOfLives) 
    document.querySelector('.underscore').innerHTML = `You have ${numberOfLives} lives left`
    // alert(userInput.toString())

}

// reproduceUnderscores(){


// }





function giveHints(){ 
     let hints = [
      ["a Flower", "Based in Mersyside"],
      ["based of a book", "Vampires"],
      ["Haku River", "Studio Ghibli"]];
    
let giveHints = hints[randNum]
alert(giveHints)
console.log(giveHints)
      }



// userguess -submit guess
// let hint = document.querySelector('').value
// alert
// event listener to button?
// myButtons

//letters


// array strings ['comedy','romance','action','anime'] 

// objects for hangman part? or pictures/images
// properties     Methods()
// man.head
// man.body
// man.rightarm
// man.righthand
// man.leftarm
// man.lefthand
// man.leftleg
// man.leftfoot
// man.rightleg
// man.rightfoot

