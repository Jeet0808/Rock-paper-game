let userScore = 0;
let compScore = 0;
let drowScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const reset = document.querySelector("#reset");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drowScorePara = document.querySelector("#drow-score");
const air = document.querySelector(".ai-r");
const aip = document.querySelector(".ai-p");
const ais = document.querySelector(".ai-s");
const drowimg = document.querySelector(".drowimg");

const resetgame = () => {
  enable();
  
}
reset.addEventListener("click", resetgame);



const enable = () => {
  msg.innerText = "Play your move!";
  userScore = 0;
  userScorePara.innerText = userScore;
  compScore = 0;
  compScorePara.innerText = compScore;
  msg.style.backgroundColor = "#081b31";
  drowScore = 0;
  drowScorePara.innerText = drowScore;

  aip.classList.add("ai-p");
  air.classList.add("ai-r");
  ais.classList.add("ai-s");
  drowimg.classList.add("drowimg");
};



const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];


};



const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
  msg.style.boxShadow = "5px 5px 5px rgba(30, 31, 30, 0.959)";

    drowScore++;
    drowScorePara.innerText = drowScore;
    drowimg.classList.remove("drowimg");

    // aip.classList.add("ai-p");
    // air.classList.add("ai-r");
    // ais.classList.add("ai-s");

};
  


const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.boxShadow = "5px 5px 5px rgba(30, 31, 30, 0.959)";

  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.boxShadow = "5px 5px 5px rgba(30, 31, 30, 0.959)";

  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {

      if(userChoice === "rock" && compChoice === "rock"){
        air.classList.remove("ai-r");
        aip.classList.add("ai-p");
        ais.classList.add("ai-s");

      }
      else  if(userChoice === "paper" && compChoice === "paper"){
        aip.classList.remove("ai-p");
        air.classList.add("ai-r");
        ais.classList.add("ai-s");

      }
      else{
        ais.classList.remove("ai-s");
        air.classList.add("ai-r");
        aip.classList.add("ai-p");
      }
      
    drawGame();

  }
  
   else {
    let userWin = true;
    drowimg.classList.add("drowimg");
    
    if (userChoice === "rock") {
          //scissors, paper
          if(compChoice === "paper"){
            userWin = false;
            aip.classList.remove("ai-p");
            air.classList.add("ai-r");
            ais.classList.add("ai-s");
          }
          else{
           userWin = true;
            ais.classList.remove("ai-s");
            aip.classList.add("ai-p");
            air.classList.add("ai-r");
        
          }
          } 
           if (userChoice === "paper") {
          //rock, scissors
          if(compChoice === "scissors"){
            userWin = false;
           ais.classList.remove("ai-s");
           aip.classList.add("ai-p");
            air.classList.add("ai-r");
          }
          else{
            userWin = true;
            air.classList.remove("ai-r");
              aip.classList.add("ai-p");
            ais.classList.add("ai-s");
        
          }
        }
             //rock, paper
            if (userChoice === "scissors") {
              //rock, scissors
                if(compChoice === "paper"){
                  userWin = true;
                  aip.classList.remove("ai-p");
                  ais.classList.add("ai-s");
                  air.classList.add("ai-r");
              
                
            }
              else if(compChoice === "rock"){
                userWin = false;
                air.classList.remove("ai-r");
                aip.classList.add("ai-p");
                ais.classList.add("ai-s");
          
            }

     
          }
          showWinner(userWin, userChoice, compChoice);
        }
     
    };
  


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});