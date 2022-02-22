function computerPlay () {
    let one = Math.floor(Math.random() * 3 + 1);
    switch (one) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        

    }
}
function play(playersel,computersel) {

    if(playersel === "rock" || playersel === "paper" || playersel === "scissors") {

        if(playersel === computersel) {
            return "tie"
        }
        else if(playersel === "rock" && computersel === "paper") {
            cscore++;
            return "You Lose! Paper beats rock"
        }
        else if(playersel === "scissors" && computersel === "rock") {
            cscore++;
            return "You Lose! rock beats scissors"
        }
        else if(playersel === "paper" && computersel === "scissors") {
            cscore++;
            return "You Lose! scissors beats paper"
        }
        else {
            pscore++;
            return `You Win! ${playersel} beats ${computersel}`
        }

    }
    else return `write valid input`
    
}
/*function game(){
    for(let i = 0; i < 5; i++){
        let playersel = userinput();
        console.log(playersel);
        let computersel = computerPlay();
        console.log(computersel);
        console.log(play(playersel,computersel));

        if(play().search === "You Win"){
            pscore++;
        }
        else if(play().search === "You Lose"){
            cscore++;
        }
        console.log("player score = ",pscore);
        console.log("computer score  = ",cscore);
        console.log("#################################################");
    }
    if(pscore === cscore){
        console.log("tie");
    }
    else if(pscore > cscore){
        console.log("You Win THis game");
    }
    else{
        console.log("You lose this game");
    }
    
}*/

/*function userinput(){
    return prompt("enter your choice").toLowerCase();
    
}
let pscore = 0;
let cscore = 0;
game()*/
