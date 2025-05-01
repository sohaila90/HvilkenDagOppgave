let weekDay = 5;
let dayInput = 0;
// let correctDay = '';
let message1 = "";

updateView();
function updateView() {
    app.innerHTML = /*html*/`
    <h1>Hvilken dag er det i dag?<h1>
    <h3>Skriv inn et tall fra 1-7</h3>
    <h3>1 = mandag og 7 = søndag</h3>
    <input type="number" onchange="writeDay(this.value)">
    <button onclick="dayCheckBtn()">Sjekk</button>
    <h3>${message1}</h3>
   
    `;
}


function writeDay(whatDay) {
 dayInput = whatDay;

}
function dayCheckBtn(){
// for(let i = 0; i <7; i++)
// dayinput er større en 5 derfor kjører if delen ellers kjører else
    if(dayInput > weekDay) {
    //  console.log('Det er helg!');
      message1 = "Det er helg!";
    }else {
    message1 = "Det er en ukedag :(";
    }
    updateView();
}

// <!-- **5. Hvilken dag er det?**
// Be brukeren skrive inn et tall fra 1 til 7, der 1 = mandag og 7 = søndag.
// - Hvis tallet er 6 eller 7, skriv: "Det er helg!"
// Ellers skriv: "Det er en ukedag.» -->