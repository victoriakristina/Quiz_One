function check(){

//Mina variabler
let question1 = document.quiz.question1.value;
let question2 = document.quiz.question2.value;
let question3 = document.quiz.question3.value;
let question4 = document.quiz.question4.value;
let question5 = document.quiz.question5.value;
let question6 = document.quiz.question6.value;
let question7 = document.quiz.question7.value;
let question8 = document.quiz.question8.value;
let question9 = document.quiz.question9.value;
let question10 = document.quiz.question10.value;
let correct = 0;

if (question1 == "Falskt") {
    correct++;
    }

if (question2 == "Sant") {
    correct++;
    }

if (question3 == "Falskt") {
    correct++;
    }

if (question4 == "Falskt") {
    correct++;
    }

if (question5 == "Sant") {
    correct++;
    }
            
if (question6 == "Sant") {
    correct++;
    }
            
if (question7 == "Sant") {
    correct++;
    }

if (question8 == "Sant") {
    correct++;
    }

if (question9 == "Sant") {
    correct++;
    }

if (question10 == "Falskt") {
    correct++;
    }
                            
 // Min Arrays meddelanden
 
 let messages = ["Underkänt", "Godkänt", "Mycket väl godkänt"];


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "Du fick " + correct + " rätt.";
}