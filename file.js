let computerChoice;
let humanChoice;
let humanScore =0;
let computerScore=0;

// const humanScoreElement = document.getElementById('humanScore');
// const computerScoreElement = document.getElementById('compScore');

//creates random computer choice
function getRandomNum() {
  randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum + ' That is my random number');
  if (randomNum == 1) {
    return computerChoice = 'Rock';
  } else if (randomNum == 2) {
    return computerChoice = 'Paper';
  } else {
    return computerChoice = 'Scissors'
  }
}

// Container for computer and human choice
const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent='space-between'
container.style.border = 'solid #04AA6D';




//Welcome container configuration
const welcomeContainer = document.getElementById('welcome');
welcomeContainer.style.color = '#FF0000';
welcomeContainer.style.display = 'flex';
welcomeContainer.style.justifyContent = 'space-around';
welcomeContainer.style.alignItems = 'center';
welcomeContainer.style.border = 'thick solid #0099FF';

//change background of container Welcome
function changeWelcomeBackground() {
  welcomeContainer.style.backgroundColor = '#FF2'
}
welcomeContainer.addEventListener('mouseover', changeWelcomeBackground);

//container for computer score
const compContainer = document.getElementById('computerContainer');
compContainer.style.color = '#04AA9D';
fontSize='60px';


//container for human choice
const humanContainer = document.getElementById('humanContainer');
humanContainer.style.color = 'blue';



//container for buttons
const buttonContainer = document.getElementById('buttonContainer');

//container for showing human/computer results
const textContainer = document.getElementById('choiceContainer');
const computerText = document.getElementById('computerChoice');
const humanText = document.getElementById('humanChoice');

textContainer.appendChild(humanText);
textContainer.appendChild(computerText);

humanText.innerText = 'This is human choice: ';
computerText.innerText = 'This is computer choice: ';
textContainer.style.display = 'flex';
textContainer.style.alignItems = 'center';
textContainer.style.flexDirection = 'column';
textContainer.style.justifyContent = 'space-between'
textContainer.style.border = 'solid #04AA6D'
textContainer.style.height = '300px'

const button = document.getElementById('btn');
button.style.backgroundColor = '#04AA6D';
button.style.fontSize = '16PX';
buttonContainer.append(button);
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'space-around';

button.addEventListener('click',()=>{
  document.body.innerHTML='';
  const thankyouMessage = document.createElement('div');
  thankyouMessage.id = 'message';
  const textMessage = document.createElement('h1');
  thankyouMessage.style.display="flex";
  thankyouMessage.style.alignSelf="center";
  thankyouMessage.style.justifyContent="center";
  textMessage.innerText="Thank you for playing";
  thankyouMessage.appendChild(textMessage);
  document.body.appendChild(thankyouMessage);
}) 

//rock button customization + adding event handler
const rockBtn = document.getElementById('rockBtn');
rockBtn.style.backgroundColor = '#F93'
buttonContainer.append(rockBtn);
rockBtn.innerText = 'Rock';
rockBtn.addEventListener(
  'click', ()=> {
    console.log("The rock button was clicked");
    humanChoice="Rock";
    playGame();
  
  }
)



//paper button customization + adding event handler
const paperBtn = document.getElementById('paperBtn');
paperBtn.style.backgroundColor = '#F93'
buttonContainer.append(paperBtn);
paperBtn.innerText = 'Paper';
 paperBtn.addEventListener(
      'click',
      () => {
        console.log('PaperBtn is clicked');
        humanChoice = "Paper";
        playGame();

      }

);


//scissors button customization + adding event handler
  const scissorsBtn = document.getElementById('scissorsBtn');
  scissorsBtn.style.backgroundColor = '#F93'
  buttonContainer.append(scissorsBtn);
  scissorsBtn.innerText = 'Scissors';

  scissorsBtn.addEventListener(
    "click",()=>{
      console.log("Scissors button was pressed");
      humanChoice="Scissors";
      playGame();
    }
  )
  




humanScore = document.getElementById('humanScore');

humanScore.innerText=humanScore;
humanContainer.style.alignItems = 'center'
humanContainer.style.justifyContent = 'space-around'
humanContainer.append(humanScore);


computerScore = document.getElementById('compScore');
computerScore.innerText = computerScore;
compContainer.style.display = 'flex';
compContainer.style.alignItems = 'center';
compContainer.style.justifyContent = 'space-around';
compContainer.append(computerScore);

function playGame(){
    computerChoice = getRandomNum();
    computerText.innerText='Computer choice is: ' + computerChoice;
    humanText.innerText='Human choice is: ' +humanChoice;

    
     // Determine the winner and update scores
     if (humanChoice === "Rock" && computerChoice === "Scissors" ||
      humanChoice === "Paper" && computerChoice === "Rock" ||
      humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore += 1;
      humanContainer.innerText="Human's score is " + humanScore;
      compContainer.innerText="Computer's score is " + computerScore;
      console.log ("You win");
  } else if (humanChoice === computerChoice) {
      console.log('It\'s a draw!');
  } else {
      computerScore += 1;
      console.log('Computer wins!');
  }

  //update score


humanScoreElement.innerText= humanScore;
computerScoreElement.innerText=computerScore;
          

}