let boxes = document.querySelectorAll('.box'); 
let resetbtn = document.querySelector("#Reset");
let newgamebtn = document.querySelector("#start");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container")

let turn0 = true;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = () =>{
  turn0 = true;
  enableboxes();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if(turn0){
        box.innerText = "0";
        turn0 = false;
      }else{
        box.innerText = "X";
        turn0 = true;
      }
      box.disabled = true;
     checkwinnner();
    });
  });

  const disableboxes = () =>{
    for(let box of boxes){
      box.disabled = true;
     }
  }

  
  const enableboxes = () =>{
    for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
     }
  }

  const showwinner =(winner)=>{
    msg.innerText = `Congrats , winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disableboxes();
  }
const checkwinnner=()=>{
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3!=""){
          if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
          }
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
