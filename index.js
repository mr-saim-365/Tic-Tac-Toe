const boxes = document.querySelectorAll(".btn");

const reset_btn = document.querySelector(".reset");

let newGameBtn = document.querySelector(".new_game");

let para = document.querySelector("p");

let Winner = document.querySelector(".winner");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
      box.disabled = true; 
      checkWinner();
    });
});

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    Winner.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    };
};

const showWinner = (winner) => {
    para.innerText = `Congratulation, winner is ${winner}`;
    Winner.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value == pos2value && pos2value == pos3value) {
                showWinner(pos1value);
            };
        };
    };
};
    
newGameBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
