
var songFail = new Audio("audio/Qdot---idan.mp3")
var songPass = new Audio("audio/Shallipopi-Ft.-Zlatan---Elon-Musk-(Remix).mp3")
var songAverage = new Audio("audio/Adekunle-Gold---Omo-Eko.mp3")
var songCredit = new  Audio("aodio/Pheelz---YOLO.mp3")
var songGood  = new Audio("audio/Asake-Ft.-Olamide---Amapiano.mp3")
var songExcellent = new Audio("audio/Ruger - Asiwaju.mp3")

function playMusic(){
    songFail.play()
    songPass.play()
    songAverage.play()
    songCredit.play()
    songGood.play()
    songExcellent.play()
}

function checkScore(){

if(inputScore.value >0 && inputScore.value <= 40){
    display.innerHTML = "F - FAIL🥴 "
    songFail.play()

    inputScore.value = ""
    
}
else if(inputScore.value >40 && inputScore.value <= 45){
    display.innerHTML = "E - PASS😔 "
    songPass.play()
    inputScore.value = ""
}
else if(inputScore.value >45 && inputScore.value <= 50){
    display.innerHTML = "D - AVERAGE😒 "
    songAverage.play()
    inputScore.value = ""
}
else if(inputScore.value >50 && inputScore.value <= 60){
    display.innerHTML = "C - CREDIT🤔"
    songCredit.play()
    inputScore.value = ""
}
else if(inputScore.value >60 && inputScore.value <= 70){
    display.innerHTML = "B - GOOD🤗"
    songGood.play()
    inputScore.value = ""
}
else if(inputScore.value >70 && inputScore.value <= 100){
    display.innerHTML = "A - EXCELLENT "
    songExcellent.play()
    inputScore.value = ""
}


}
