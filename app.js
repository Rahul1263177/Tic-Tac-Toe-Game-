let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true ;//player a,player b;
//for the storing of the winning patterns we use the arrays os 2D 

let cnt=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="brown";
            turnO=true;  
        }
        box.disabled=true; //u cannot change the box again
        cnt+=1;
        checkWinner();
        if(cnt===9){
            draw();
        }
    });
});

const draw=()=>{
     msg.innerText=`The match has been draw`;
    msgContainer.classList.remove("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

function showWinner (winner) {    
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{         //arrow function
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= "" ){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                //console.log(pos1Val, " is the Winner");
    
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

/*
console.log(pattern[0] ,pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    
        */