// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');

// richiamare la difficoltà
const difficultyDom = document.getElementById('difficulty');

// settare variabili per numeri massimo e minimo relativi ad ogni difficoltà inserita
let numMin = 1;
let numMax;

// struttura condizionale
buttonDom.addEventListener('click',
function() {
    if (difficultyDom.value == 'easy') {
        console.log('facile');
        let numMax = 100;
        const progressiveNumbers = getProgressiveNumbers(numMin, numMax);
    } else if (difficultyDom.value == 'medium') {
        console.log('media');
        let numMax = 81;
        const progressiveNumbers = getProgressiveNumbers(numMin, numMax);
    } else if (difficultyDom.value == 'hard') {
        console.log('difficile');
        let numMax = 49;
        const progressiveNumbers = getProgressiveNumbers(numMin, numMax);
    }
})

/*
// aggiungere evento di attivazione del ciclo
buttonDom.addEventListener('click',
function() {
    for (let i=1; i<101; i++) {
        // funzione per creare uno square ad ogni ciclo da 1 a 100
        const newSquare = createSquare();
        // stampo il numero su ogni quadrato
        newSquare.append(i);
    }
    for ()easy
    for ()hard
})
*/

// funzione per creare <div square>
function createSquare() {
        // creo nuovo elemento <div> ad ogni ciclo
        const newSquare = document.createElement('div');
        // aggiungo classe .square all'elemento
        newSquare.classList.add('square');
        // metto ('appendo') newSquare dentro square_containerDom
        square_containerDom.append(newSquare);
        // creare strutture condizionale per capire quale classe aggiungere ai quadrati
        if (difficultyDom.value == 'easy') {
            newSquare.classList.add('c_easy');
        } else if (difficultyDom.value == 'medium') {
            newSquare.classList.add('c_medium');
        } else if (difficultyDom.value == 'hard') {
            newSquare.classList.add('c_hard');
        }
        // creare un event listener su ogni singola cella che cambi sfondo allo square e scriva in console il numero della cella
        newSquare.addEventListener('click', 
        function(){
            // se non ho ancora cliccato, imposto lo sfondo azzurrino; altrimenti, se ho già cliccato e quindi ho già lo sfondo azzurrino, reimposto lo sfondo verde
            if (this.style.backgroundColor == 'lightblue') {
                this.style.backgroundColor = '#7fffd4';
            } else {
                this.style.backgroundColor = 'lightblue';
            }
            console.log(`The number of the square is: ${this.textContent}`);
        })
        // ritorno tutto quanto fatto su newSquare
        return newSquare;
}

// funzione per generare un numero tra un minimo ed un massimo
function getProgressiveNumbers(parameter1, parameter2) {
    for (let i = parameter1; i < parameter2+1; i++) {
        // funzione per creare uno square ad ogni ciclo da 1 a 100
        const newSquare = createSquare();
        // stampo il numero su ogni quadrato
        newSquare.append(i);
        console.log(i);
    }
}