// JavaScript za proveru odgovora na testu
function checkAnswers() {
    var result = document.getElementById('result');
    var score = 0;

    // Pitanje 1
    var answer1 = document.querySelector('input[name="question1"]:checked');
    if (answer1 && answer1.value === "b") {
        score++;
    }

    // Pitanje 2
    var answer2 = document.querySelector('input[name="question2"]:checked');
    if (answer2 && answer2.value === "b") {
        score++;
    }

    // Prikaz rezultata
    result.innerHTML = "Tvoj rezultat je: " + score + "/2";
}

// Toggle temeljno svetli/tamni režim
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");
}
