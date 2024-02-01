let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // PlayerX PlayerY

let winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame= ()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((boxes) =>{
    boxes.addEventListener("click", ()=>{
        console.log("box was clicked")
        if(turn0){
            boxes.innerText = "O";
            turn0=false;
        }else{
            boxes.innerText = "X";
            turn0=true;
        }
        boxes.disabled = true;
        
        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box  .innerText= "";
    }
};

const shoWinner = (win) =>{
  msg.innerText = `Congrulations! Winner is ${win}`;
  msgContainer.classList.remove('hide');
  disableBoxes();
}

function checkWinner() {
    for (let pattren of winPattrens) {
        let pos1value=boxes[pattren[0]].innerText;
        let pos2value=boxes[pattren[1]].innerText;
        let pos3value=boxes[pattren[2]].innerText;
        
        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value===pos2value && pos2value===pos3value){
                console.log("Winner", pos1value);
                shoWinner(pos3value);
            }
        }
    }
};

newGamebtn.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);