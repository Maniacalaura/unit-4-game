//Global Variables

var randNum = [];
var winCounter = [];
var lossCounter = [];
var totalScore = 0;
var homerNum = "";
var margeNum = "";
var bartNum = "";
var lisaNum = "";



$(document).ready(function() {

    function reset(){
    
        randNum = Math.floor((Math.random() * 101) + 19);
        $("#randNum").text(randNum);
        homerNum = Math.floor((Math.random() * 12) + 1);
        margeNum = Math.floor((Math.random() * 12) + 1);
        bartNum = Math.floor((Math.random() * 12) + 1);
        lisaNum = Math.floor((Math.random() * 12) + 1);
        totalScore = 0;
    }

    randNum = Math.floor((Math.random() * 101) + 19);
    console.log(randNum);
    homerNum = Math.floor((Math.random() * 12) + 1);
    margeNum = Math.floor((Math.random() * 12) + 1);
    bartNum = Math.floor((Math.random() * 12) + 1);
    lisaNum = Math.floor((Math.random() * 12) + 1);

    //functions
    //Reset

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
        $("#totalScore").text("Your Score:" + totalScore ); 
       
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
        $("#totalScore").text("Your Score:" + totalScore ); 
       
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
        $("#totalScore").text("Your Score:" + totalScore ); 

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



    $("#randNum").append("<h2>" + randNum + "</h2>")

    // $("#totalScore").append("<h3>" + totalScore + "</h3>")
    // console.log(totalScore)
    
});
