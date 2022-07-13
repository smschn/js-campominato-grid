const square_containerDom = document.getElementById('square_container');
console.log(square_containerDom); // debug

for (let i=1; i<101; i++) {
    // creo nuovo elemento <div> ad ogni ciclo
    const newSquare = document.createElement('div');
    // aggiungo classe .square all'elemento
    newSquare.classList.add('square');
    // metto ('appendo') newSquare dentro square_containerDom
    square_containerDom.append(newSquare);
}