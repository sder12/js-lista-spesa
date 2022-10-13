// Lista della spesa con ciclo while
//Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.
//- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
//- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

const spesa = ["uova", "latte", "miele", "mela","insalata","pasta","riso","sale"];
console.log(spesa)

let i = 0
while (i < spesa.length){
    console.log(spesa[i])
    document.writeln(spesa[i]);
    i++;
}