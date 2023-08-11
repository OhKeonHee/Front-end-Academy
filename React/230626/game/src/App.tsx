import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Component/Box';


const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
  },
  scissor: {
    name: "scissor",
    img: "https://img.danawa.com/prod_img/500000/372/989/img/1989372_1.jpg?_v=20230511143337"
  },
  paper: {
    name: "paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  },
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice: any): any => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  }
  const judgement = (user, computer) => {
    if(user.name == computer.name) {
      return "tie";
    } else if(user.name == "rock") return computer.name == "scissor" ? "win" : "lose";
    else if(user.name == "scissor") return computer.name == "paper" ? "win" : "lose";
    else if(user.name == "paper") return computer.name == "rock" ? "win" : "lose";
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className="main"> 
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>

  );
}

export default App;
