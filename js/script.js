 //Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


//Bonus:
//Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49


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
    //Riichiama funzione
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








