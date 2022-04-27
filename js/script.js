//Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


//Inserisci il "click" dentro il bottone 
document.getElementById("btn-play").addEventListener("click", function() {


    //Richiama il form
    const choice = document.querySelector('#difficulty').value;
    console.log(choice);

    //Assegna delle variabili diverse in base alle celle e difficoltà
    let index = 0;

    switch(choice) {
        case "easy":
            index = 100;
            break
        case "medium":
            index = 81;
            break
        default:
            index = 49;
    }

    //Genera 16  bombe (numeri random)
        const bombsNumber = 16;
        const bombsArray = generateRndNumbers(bombsNumber, index);
        
    //Richiama funzione di creazione di celle
    generateGrid(choice, index) 
})


//FUNCTIONS
// Creare tot celle che compongono la griglia
function generateGrid (className, cellNumber) {
    console.log(className, cellNumber)
    // Prendere il riferimento alla griglia
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    for (let i = 1; i <= cellNumber; i++) {
        // Creare la cella, metterci all'interno il numero corrispondente
        const cell = document.createElement("div");
        cell.innerHTML = `<span>${i}</span>`
    
        // Dare uno stile grafico alla cella aggiungendogli una classe css
        cell.classList.add(className);
    
        // Gestire il cambio colore al click della cell
        cell.addEventListener('click', function() {
            cell.classList.add("active");
        })
    
        // Aggiungere la cella al DOM, all'interno di .grid-container
        gridContainer.append(cell);
    }
    
}

//UTILITY FUNCTIONS
//Genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function generateRndNumbers(numberQuantity, maxLimit) {
    const numberArray = [];
    while (numberArray.length < numberQuantity) {
        const randomNumber = getRndInteger (1, maxLimit);
        if (!numberArray.includes(randomNumber)) {
            numberArray.push(randomNumber);
        }
    }
    return numberArray;
}









