//Global Variables

var randNum = [];
var winCounter = [];
var lossCounter = [];
var totalScore = 0;
var homerNum = "";
var margeNum = "";
var bartNum = "";
var lisaNum = "";

//$(document).ready will run the js after the html is loaded. 

$(document).ready(function() {

    // this function will reset all the random numbers and scores when a win or loss happens
    function reset(){
        randNum = Math.floor((Math.random() * 101) + 19);
        $("#randNum").text(randNum);
        homerNum = Math.floor((Math.random() * 12) + 1);
        margeNum = Math.floor((Math.random() * 12) + 1);
        bartNum = Math.floor((Math.random() * 12) + 1);
        lisaNum = Math.floor((Math.random() * 12) + 1);
        totalScore = 0;
    }
    //generates a random number; one between 1-120 to guess, and 4 for each button between 1-12.
    randNum = Math.floor((Math.random() * 101) + 19);
    console.log(randNum);
    homerNum = Math.floor((Math.random() * 12) + 1);
    margeNum = Math.floor((Math.random() * 12) + 1);
    bartNum = Math.floor((Math.random() * 12) + 1);
    lisaNum = Math.floor((Math.random() * 12) + 1);

    //bottons, all set to on click add the random number to total score and display it.
    //if and if else set the win/lose perameters. I realized after the fact that I could 
    //have made the if else statements into a function and call on it in each button. 
    //Hindsight is 20/20, but it works so I'm not changing it.

    $("#homer").click(function() {
        totalScore = homerNum + totalScore;
        $("#totalScore").text("Your Score: " + totalScore ); 
        
        if(totalScore === randNum){
            winCounter ++;
            $("#winCounter").text("Wins: " + winCounter);
            reset();
        } else if(totalScore > randNum){
            lossCounter ++;
            $("#lossCounter").text("Losses: " + lossCounter );
            reset();
        }
        
       
        console.log(homerNum);
        console.log(totalScore);
        console.log(winCounter);
        console.log(lossCounter);
    })

    $("#marge").click(function() {
        
        totalScore = margeNum + totalScore;
        $("#totalScore").text("Your Score: " + totalScore ); 
       
        if(totalScore === randNum){
            winCounter ++;
            $("#winCounter").text("Wins: " + winCounter);
            reset();
        } else if(totalScore > randNum){
            lossCounter ++;
            $("#lossCounter").text("Losses: " + lossCounter );
            reset();
        
        }
        console.log(margeNum);
    });

    $("#bart").click(function() {
        
        totalScore = bartNum + totalScore;
        $("#totalScore").text("Your Score: " + totalScore ); 
       
        if(totalScore === randNum){
            winCounter ++;
            $("#winCounter").text("Wins: " + winCounter);
            reset();
        } else if(totalScore > randNum){
            lossCounter ++;
            $("#lossCounter").text("Losses: " + lossCounter );
            reset();
        }

        console.log(bartNum);
    });

    $("#lisa").click(function() {
        
        totalScore = lisaNum + totalScore;
        $("#totalScore").text("Your Score: " + totalScore ); 

        if(totalScore === randNum){
            winCounter ++;
            $("#winCounter").text("Wins: " + winCounter);
            reset();
        } else if(totalScore > randNum){
            lossCounter ++;
            $("#lossCounter").text("Losses: " + lossCounter );
            reset();
        }

        console.log(lisaNum);
    });


    //displays the random number to match on the screen.
    $("#randNum").append("<h2>" + randNum + "</h2>")

    
});
