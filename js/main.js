// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');

// aggiungere evento di attivazione del ciclo
buttonDom.addEventListener('click',
function() {
    for (let i=1; i<101; i++) {
        // funzione per creare uno square ad ogni ciclo da 1 a 100
        const newSquare = createSquare();
    }
})


// funzione per creare <div square>
function createSquare() {
        // creo nuovo elemento <div> ad ogni ciclo
        const newSquare = document.createElement('div');
        // aggiungo classe .square all'elemento
        newSquare.classList.add('square');
        // metto ('appendo') newSquare dentro square_containerDom
        square_containerDom.append(newSquare);
        return newSquare;
}