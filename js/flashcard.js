var cards = document.getElementsByClassName("card");
var quiz = document.getElementsByClassName("quiz");

var correctCounter = 0;
var wrongCounter = 0;
var previous = 0;
var correctSpan = document.getElementsByClassName("correct")[0];
var wrongSpan = document.getElementsByClassName("wrong")[0];

var question = document.getElementById("domanda");
var options = [];
for(i=0; i<4; i++){
    var name = "option-" + (i+1);
    options[i] = document.getElementById(name);
}
var correct = 128;
var actualId = -1;

cards[0].addEventListener("click", function(){
    load("Date storia");
})
cards[1].addEventListener("click", function(){
    load("Opere letteratura");
})
cards[2].addEventListener("click", function(){
    load(cards[2].innerHTML);
})
cards[3].addEventListener("click", function(){
    load(cards[3].innerHTML);
})


options[0].addEventListener("click", function(){
    checkAnswer(0);
});
options[1].addEventListener("click", function(){
    checkAnswer(1);
});
options[2].addEventListener("click", function(){
    checkAnswer(2);
});
options[3].addEventListener("click", function(){
    checkAnswer(3);
});
//il vero codice comincia da qui, non leggere quella
//bestia di satana sopra

function load(section){
    switch(section){
        case "Date storia":
            cards[0].parentElement.style.display = "none";
            quiz[0].style.display = "block";
            generateQuestion(1);
            break;

        case "Opere letteratura":
            alert("Carico letteratura");
            break;

    }
}

function generateQuestion(id){
    actualId = id;
    fetch(getFileUrl(id))
    .then(response => response.text())
    .then(data => {
        const lines = data.split("\n");
        

        var random = Math.floor(Math.random() * lines.length / 2) * 2;
        while(random==previous){
            random = Math.floor(Math.random() * lines.length / 2) * 2;
        }
        console.log(random);
        previous = random;
        correct = Math.floor(Math.random() * 4);

        var domanda = lines[random];
        var answer = lines[random+1];

        question.innerHTML = domanda;
        for(i=0; i<4; i++){
            if(i==correct) options[i].innerHTML = answer;
            else options[i].innerHTML = ((Math.floor(Math.random() * 150) - 75) + parseInt(answer));
            if(options[i].innerHTML == answer && i != correct) options[i].innerHTML = options[i].innerHTML+1;
        }
        
    });

    
}


function getFileUrl(id){
    switch(id){
        case 1:
            return "../data/flashcard/date.txt";
    }
    console.log("ERRORE: ID NON VALIDO");
    return null;
}

function checkAnswer(option){
    if(option==correct){
        correctCounter++;
        correctSpan.innerHTML = correctCounter;
    } 
    else{
        wrongCounter++;
        wrongSpan.innerHTML = wrongCounter;
    }
    quiz[0].style.display = "none";
    window.setTimeout(function(){
        quiz[0].style.display = "block"}
        ,20);
    generateQuestion(actualId);
}
