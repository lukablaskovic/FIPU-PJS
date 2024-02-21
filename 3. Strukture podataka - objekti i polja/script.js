/*
1. Napišite funkciju `brojSamoglasnikaISuglasnika` koja prima ulazni string i vraća objekt s dva svojstva: `samoglasnici` i `suglasnici`.

   - Koristi metodu `match()` za pronalaženje samoglasnika (`regex = /[aeiou]/g`) i suglasnika (`regex = /[^aeiou\W]/g`) u ulaznom stringu.
   - Koristi `toUpperCase()` ili `toLowerCase()` za normalizaciju slova.
   - Na primjer:
     ```javascript
     console.log(brojSamoglasnikaISuglasnika("Hello World"));
     // { samoglasnici: 3, suglasnici: 7 }
     ```

2. Napiši funkciju `duljinaRijeci` koja prima ulazni string i ispisuje duljinu svake riječi.
   - Koristi `split()` za razdvajanje stringa na riječi.
   - Koristi `trim()` za uklanjanje suvišnih razmaka.
   - Na primjer:
     ```javascript
     duljinaRijeci("   JavaScript je zabavan   ");
     // JavaScript: 10
     // je: 2
     // zabavan: 7
     ```
*/

function brojSamoglasnikaISuglasnika(str) {
  let str_normalized = str.toLowerCase();
  const samoglasnici = str_normalized.match(/[aeiou]/gi).length;
  const suglasnici = str_normalized.match(/[^aeiou\W]/gi).length;
  return { samoglasnici, suglasnici };
}

console.log(brojSamoglasnikaISuglasnika("Hello World"));

function duljinaRijeci(str) {
  let trimmed_str = str.trim();
  let words = trimmed_str.split(" ");

  for (let i = 0; i < words.length; i++) {
    console.log(`${words[i]}: ${words[i].length}`);
  }
}

duljinaRijeci("   JavaScript je zabavan   ");
