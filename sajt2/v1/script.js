// Funkcija za prebacivanje teme između tamne i svetle
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Automatski učitaj temu sa localStorage prilikom učitavanja stranice
window.onload = function() {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// Validacija forme u tutorijalu
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var formResult = document.getElementById('formResult');

    if (name == "" || email == "") {
        formResult.innerHTML = "Sva polja su obavezna!";
        formResult.style.color = "red";
        return false;
    }
    
    formResult.innerHTML = "Forma je uspešno poslata!";
    formResult.style.color = "green";
    return true;
}

// Pretraga sadržaja na stranici
function searchContent() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var text = section.innerText || section.textContent;
        if (text.toUpperCase().indexOf(filter) > -1) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });
}
