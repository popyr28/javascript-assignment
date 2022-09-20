var score = prompt("Input your score")

if(score >= 80 && score <= 100){
    alert("Your Grade is A")
} else if (score >= 60 && score < 80){
    alert("Your Grade is B")
} else if (score >= 40 && score < 60){
    alert("Your Grade is C")
} else if (score >= 1 && score < 40){
    alert("Your Grade is D")
} else {
    alert("Cannot calculate your grade")
}