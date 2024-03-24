let aScore = 0;
let bScore = 0;

const start = document.querySelectorAll("#play");
const cardA = document.querySelector("cardA");
const cardB = document.querySelector("cardB");


const genCards = () =>{
    const obtions = ["A","J","Q","K"];
    const randomCard = Math.floor(Math.random()*4);
    return obtions[randomCard];
}

const gameDraw = () =>{
    console.log("game was draw");
}

//generating random cards
const aCard = () =>{
    const playerA = genCards();
    console.log("Player A =", playerA);
}
const bCard = ()=>{
    const playerB = genCards();
    console.log("Player B =", playerB);
}

//generating scores
const score = ()=>{
    let scoreA = 0;
    let scoreB = 0;
    if(aCard === bCard){
        gameDraw();
    }
}

start.forEach((play)=>{
    console.log(play);
    play.addEventListener("click",()=>{
        aCard();
        bCard();
    })
})

