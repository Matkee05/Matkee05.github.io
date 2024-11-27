document.getElementById('show-explanation').addEventListener('click', function() {
    var explanationDiv = document.getElementById('explanation');
    var explanationList = document.getElementById('explanation-list');

    // Dodavanje objašnjenja za svaku liniju koda
    var explanations = [
        "Linija 1: &lt;!DOCTYPE html&gt; - Deklariše tip dokumenta i verziju HTML-a.",
        "Linija 2: &lt;html lang='sr'&gt; - Otvoreni tag HTML dokumenta, sa definisanim jezikom.",
        "Linija 3-4: &lt;meta&gt; - Definiše karakter set i postavke za viewport (veličinu ekrana).",
        "Linija 5: &lt;link&gt; - Povezuje spoljašnji CSS fajl za stilizovanje stranice.",
        "Linija 6: &lt;title&gt; - Definiše naziv stranice koji se prikazuje na kartici preglednika.",
        "Linija 7-8: &lt;/head&gt; - Zatvara head sekciju HTML dokumenta.",
        "Linija 9-10: &lt;body&gt; - Otvara body sekciju gde se postavlja vidljiv sadržaj stranice.",
        "Linija 11: &lt;h1&gt; - Heading element koji prikazuje glavni naslov stranice.",
        "Linija 12: &lt;/body&gt; - Zatvara body sekciju HTML dokumenta.",
        "Linija 13: &lt;/html&gt; - Zatvara HTML dokument."
    ];

    // Ako je objašnjenje već vidljivo, sakrij ga
    if (explanationDiv.style.display === 'block') {
        explanationDiv.style.display = 'none';
    } else {
        // Čisti prethodna objašnjenja
        explanationList.innerHTML = "";

        // Dodajemo objašnjenja u listu
        explanations.forEach(function(explanation) {
            var li = document.createElement('li');
            li.innerHTML = explanation;
            explanationList.appendChild(li);
        });

        // Prikazujemo div sa objašnjenjima
        explanationDiv.style.display = 'block';
    }
});
