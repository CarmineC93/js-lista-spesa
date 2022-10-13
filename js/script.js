// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, 
//   all'interno ciclo while

const shoppingList = ["uova", "parmigiano", "pasta", "pancetta", "birra"];

const ulCarbonara = document.querySelector(".carbonara");


let i = 0;
while (i<shoppingList.length){
    const recipeItems = shoppingList[i];
    i++
    console.log(i, recipeItems);
    const liCarbonara = `<li>${recipeItems}</li>`;

    ulCarbonara.innerHTML += liCarbonara;
}

