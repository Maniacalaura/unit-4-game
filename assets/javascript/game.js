//Global Variables

var randNum = [];
var winCounter = [];
var lossCounter = [];
var totalScore = [];
var homerNum = "";
var margeNum = "";
var bartNum = "";
var lisaNum = "";



$(document).ready(function() {

    randNum = Math.floor((Math.random() * 101) + 19);
    console.log(randNum);

    //functions

    $("#homer").click(function() {
        
        for(var i = 0; i<9; i++){
            homerNum = Math.floor((Math.random() * 12) + 1);
            totalScore.push(homerNum);
        }
        console.log(homerNum);
        console.log(totalScore);
    })

    $("#marge").click(function() {
        
        for(var i = 0; i<9; i++){
            margeNum = Math.floor((Math.random() * 12) + 1);
        }
        console.log(margeNum);
    });

    $("#bart").click(function() {
        
        for(var i = 0; i<9; i++){
            bartNum = Math.floor((Math.random() * 12) + 1);
        }
        console.log(bartNum);
    });

    $("#lisa").click(function() {
        
        for(var i = 0; i<9; i++){
            lisaNum = Math.floor((Math.random() * 12) + 1);
        }
        console.log(lisaNum);
    });


    $("#randNum").append("<h2>" + randNum + "</h2>")

    $("#totalScore").append("<h3>" + totalScore + "</h3>")
    console.log(totalScore)
    
});
