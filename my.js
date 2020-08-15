
function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbwiCOhXQp7LgZw352TvEoejfGxJjA-pWsK88avG_WX8a9iurwn8/exec";


    fetch(url)
        .then(d => d.json())
        .then(d => {

            document.getElementById("app").textContent = d[0].status;

        });

}

document.getElementById("btn").addEventListener("click",testGS);