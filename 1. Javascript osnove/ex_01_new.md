
**Napomena**: Zadatak rješavate u [EduCoder](https://fipu-educoder.netlify.app/) aplikaciji.

**EduCoder šifra**: `a_new_beginning`

1. Deklarirajte tri konstante i jednu promjenjivu varijablu. Konstante neka budu vaše `ime` i `prezime` i `godina_rodenja`. Promjenjivu varijablu nazovite `slucajni_broj`.

- U varijable `ime` i `prezime` pohranite vaše ime i prezime, a u varijablu `godina_rodenja` pohranite godinu rođenja kao cjelobrojnu vrijednost. U varijablu `slucajni_broj` pohranite izraz `Math.floor(Math.random() * 100) + 1`.

- Dodajte novu varijablu `starost` i izračunajte svoje godine. Pretpostavite da je rođendan ove godine već prošao.

- Koristeći interpolaciju stringova (`template literals`) ispišite u konzolu rečenicu: "Pozdrav, ja sam ___ i imam ___ godina. Moj nasumični broj danas je ___."

- Dodajte nove varijable `ime_duzina` i `prezime_duzina` koje će sadržavati duljinu stringova vašeg imena i prezimena. Upotrijebite svojstvo `length`.

- Koristeći interpolaciju stringova ispišite u konzolu rečenicu: "Moje ime ima ___ znakova, a prezime ___ znakova."

- U jednoj `console.log()` naredbi ispišite tvrdnju: "It is ___ that my first and last name have the same length" gdje umjesto ___ treba doći `boolean` izraz

Pohranite u varijablu `rezultat` vrijednost izraza:
- pomnožite duljinu vašeg imena i prezimena
- Dodajte slučajni broj
- uvećajte starost za 1 koristeći operator `++`, zatim ga dodajte na dobiveni rezultat prethodnih operacija
- Sve podijelite s 2

Napomena: Uočite moguću grešku i prilagodite rješenje ako je potrebno. **Sve morate napisati u jednoj liniji koda**.

2. Želite procijeniti koliko ste bili produktivni danas. Vaš dan se smatra uspješnim (`uspjesan_dan`) ako:

- ste riješili više od 3 zadatka iz programiranja ili ste pročitali najmanje 20 stranica knjige
- ste pili najmanje 2 litre vode
- ste proveli barem 45 minuta u fizičkoj aktivnosti
- ste se barem 5 puta nasmijali
- ste proveli manje od 3 sata na društvenim mrežama

Za svaki kriterij izradite pomoćne varijable koje pohranjuju **ostvarenu** i **ciljanu** vrijednost te **boolean** varijablu koja označava je li cilj ispunjen.

Definirajte izraz `uspjesan_dan` koji će biti istinit ako su svi kriteriji ispunjeni.

Koristeći interpolaciju stringova ispišite u konzolu rečenicu: "Danas je bio uspješan dan: ___" gdje umjesto ___ treba doći `boolean` izraz.