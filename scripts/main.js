let score = 0;

const clickerButton = document.getElementById("clickerbutton");



clickerButton.addEventListener("click", function () {
    score++;
    document.getElementById("score").innerHTML = score;
    console.log(score);
    if (score == 10) {
        document.getElementById("score").innerHTML = "your dead";
    }
    if (score == 20) {
        document.getElementById("score").innerHTML = "Stop playing this game"
    }
});
