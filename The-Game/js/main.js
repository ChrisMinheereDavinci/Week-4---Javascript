var score;
score = 0;
alert ('Deze Quis bevad 15 vragen.   Haal 10 punten om de quiz te winnen!')

var vraag1
vraag1 = prompt('5X2=')
if(vraag1 == "10"){
    score++;
    alert('Correct! je score is nu: '+score)
}else{
    alert('Fout! je score is nu: '+score)
}

var vraag2
vraag2 = prompt('2. 6X8=')
if(vraag2 == "48"){
    score++;
    alert('Correct! je score is nu: '+score)
}else{
    alert('Fout! je score is nu: '+score)
}

var vraag3
vraag3 = prompt('3. 10X3=')
if(vraag3 == "30"){
    score++;
    alert('Correct! je score is nu: '+score)
}else{
    alert('Fout! je score is nu: '+score)
}

var vraag4
vraag4 = prompt('4. 45:3=')
if(vraag4 == "15"){
    score++;
    alert('Correct! je score is nu: '+score)
}else{
    alert('Fout! je score is nu: '+score)
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
drawScore();