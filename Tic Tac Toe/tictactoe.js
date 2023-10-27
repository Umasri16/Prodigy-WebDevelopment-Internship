let btnRef=document.querySelectorAll(".option-btn")

let popupRef=document.querySelector(".popup")

let newGamebtn=document.getElementById("new-game")

let restartbtn=document.getElementById("restart")

let msgRef=document.getElementById("msg")



let winningPattern=[
    [0, 1, 2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];
  

let xTurn=true;
let count=0;

const disableButtons=()=>{
   btnRef.forEach((element)=>(element.disabled=true));
   popupRef.classList.remove("hide")
}

const enableButtons=()=>{
    btnRef.forEach((element)=>{
     element.textContent=""
    element.disabled=false
    })
    popupRef.classList.add("hide")
}

const winFunction=(letter)=>{
    disableButtons();
    if(letter=="X"){
        msgRef.textContent="X Wins"; 
    }
    else{
        msgRef.textContent="O Wins"; 
    }
}


const drawFunction=()=>{
    disableButtons()
    msgRef.textContent="It's a draw"
};


newGamebtn.addEventListener("click", function(){
    count=0;
    enableButtons();
})

restartbtn.addEventListener("click", function(){
    count=0;
    enableButtons();
})

const winCheckker=()=>{

    for(let i of winningPattern){
      let [element1,element2,element3]=[
        btnRef[i[0]].textContent,
        btnRef[i[1]].textContent,
        btnRef[i[2]].textContent,
      ]
      if(element1 !="" && (element2!="") &(element3!=""))
{
    if(element1==element2 && element2==element3){
        winFunction(element1);
    }

}        
    }
}


btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn=false;
            element.innerText="X";
            element.disabled=true
        }
        else{
            xTurn=true;
            element.innerText="O";
            element.disabled=true
        }
        count+=1;
        if(count==9){
            drawFunction();
        }
        winCheckker();
    })
    

});
window.onload=enableButtons;