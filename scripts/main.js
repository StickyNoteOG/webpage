let score = 0;

const clickerButton = document.getElementById("clickerbutton");



clickerButton.addEventListener("click", function () {
    score++;
    document.getElementById("score").innerHTML = score;
    console.log(score);
});

// const element = document.getElementById("clickerbutton");
// element.addEventListener("click", function () {
//     document.getElementById("myBtn").innerHTML = "Hello World";
// });