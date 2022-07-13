const square_containerDom = document.getElementById('square_container');

for (let i=1; i<101; i++) {
    const newSquare = createSquare();
}

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