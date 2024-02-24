

function removeDuplicates2(polje) {
    let rezultatPolje = []; // Varijabla koju ćemo koristiti
    for (let i = 0; i < polje.length; i++) { //Iteriramo kroz polje
      if (rezultatPolje.indexOf(polje[i]) === -1) { //Ako element nije pronađen u rezultatPolje, dodajemo ga
        rezultatPolje.push(polje[i]);
      }
    }
    return rezultatPolje; //Vraćamo novo polje
    }

    let brojevi = [1, 2, 3, 4, 5, 1, 2, 6, 7, 6];
    let brojeviBezDuplikata = removeDuplicates2(brojevi);
    console.log(brojeviBezDuplikata); // Output: [1, 2, 3, 4, 5, 6, 7]
    
    let stringovi = ["jabuka", "kruška", "jabuka", "banana", "kruška", "jabuka"];
    let stringoviBezDuplikata = removeDuplicates2(stringovi);
    console.log(stringoviBezDuplikata); // Output: ["jabuka", "kruška", "banana"]