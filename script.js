let curbtn = document.querySelector(".box");
let resetbtn = document.querySelector(".rt");
let newGamebtn = document.querySelector(".rst");

let turnO = true;  //PlayerX, PlayerO
let count = 0;
let winningNum = [
     [0,1,2],
     [0,4,8],
     [0,3,6],
     [1,4,7],
     [2,4,6],
     [2,5,8],
     [3,4,5],
     [6,7,8],
   
];
curbtn.addEventListener("click", ()=>{
    if(turnO){
                curbtn.innerText = "X";
                turnO = false;
    }else {
           curbtn.innerText = "O";
                turnO = true;
        }
        curbtn.disabled = true;
        count++;

})

// for(box of curbtn) () => {
//    box.addEventListener("click" , ()=> {
//     if(turnO){
//         box.innerText = "X";
//         turnO = false;
//     }else {
//        box.innerText = "O";
//        turnO = true;
//     }
//    })
// }


   