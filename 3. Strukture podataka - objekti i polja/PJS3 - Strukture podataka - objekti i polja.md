# Programiranje u skriptnim jezicima

**Nositelj**: doc. dr. sc. Nikola Tanković  
**Asistenti**:

- Luka Blašković, univ. bacc. inf.
- Alesandro Žužić, univ. bacc. inf.

**Ustanova**: Sveučilište Jurja Dobrile u Puli, Fakultet informatike u Puli

<img src=https://fipu.unipu.hr/_pub/themes_static/unipu2020/fipu/icons/fipu_hr.png style="width:40%;"></img>

# [3] Strukture podataka - objekti i polja

[comment]: <> (Ažurirati sliku - logojs/js0.png)
<img src="https://github.com/lukablaskovic/FIPU-PJS/blob/main/0.%20Template/logojs/js3.png?raw=true" style="width:9%; float:right;"></img>

Strukture podataka su specijalizirani formati podataka za efikasniju pohranu, organizaciju, dohvat i obradu istih. U JavaScriptu, objekti i polja su bazični tipovi struktura podataka. **Objekti** omogućuju pohranu podataka u obliku proizvoljnog broja parova `"ključ:vrijednost"`, dok **polja** predstavljaju kolekciju različitih elemenata organiziranih u linearni niz. Kombinacija ovih struktura omogućuje efikasno manipuliranje i pristup podacima u JavaScriptu.

## Sadržaj

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Programiranje u skriptnim jezicima](#programiranje-u-skriptnim-jezicima)
- [\[3\] Strukture podataka - objekti i polja](#3-strukture-podataka---objekti-i-polja)
  - [Sadržaj](#sadržaj)
- [1. Uvod u objekte](#1-uvod-u-objekte)
  - [1.1 Osnovna sintaksa objekata](#11-osnovna-sintaksa-objekata)
    - [1.1.1 Svojstva objekta](#111-svojstva-objekta)
    - [1.1.2 Metode objekta](#112-metode-objekta)
  - [1.2 Ključna riječ `this`](#12-ključna-riječ-this)
  - [1.3 Ažuriranje objekta](#13-ažuriranje-objekta)
  - [1.4 Konstruktori](#17-konstruktori)
  - [Vježba 1](#vježba-1)
- [2. Standardni ugrađeni objekti](#2-standardni-ugrađeni-objekti)
  - [2.1 **String**](#21-string)
  - [Vježba 2](#vježba-2)
  - [2.2 **Number**](#22-number)
  - [Vježba 3](#vježba-3)
  - [2.3 **Math**](#23-math)
  - [Vježba 5](#vježba-5)
  - [2.4 **Date**](#24-date)
  - [Vježba 6](#vježba-6)
    - [Zadatak 1: Provjera Dana u Tjednu](#zadatak-1-provjera-dana-u-tjednu)
    - [Zadatak 2: Razlika u Vremenu](#zadatak-2-razlika-u-vremenu)
- [3. Uvod u polja](#3-uvod-u-polja)
  - [3.1 Sintaksa polja](#31-sintaksa-polja)
  - [3.2 Veličina polja](#32-veličina-polja)
  - [3.3 Pristupanje i modificiranje polja](#33-pristupanje-i-modificiranje-polja)
  - [3.4 Dodavanje i brisanje elementa u polju](#34-dodavanje-i-brisanje-elementa-u-polju)
  - [Vježba 7](#vježba-7)
  - [3.5 Iteriranje kroz polje](#35-iteriranje-kroz-polje)
    - [1. Tradicionalna `for` petlja](#1-tradicionalna-for-petlja)
    - [2. `for...in`](#2-forin)
    - [3. `for...of`](#3-forof)
    - [3. `forEach`](#3-foreach)
  - [3.6 Funkcije nad poljem](#36-funkcije-nad-poljem)
    - [3.6.1. `map()`](#361-map)
    - [3.6.2. `filter()`](#362-filter)
    - [3.6.3. `sort()`](#363-sort)
    - [3.6.4. `reverse()`](#364-reverse)
    - [3.6.5. `join(separator)`](#365-joinseparator)
    - [3.6.6. `includes(element, odIndeksa)`](#366-includeselement-odindeksa)
    - [3.6.7. `some(callback)`](#367-somecallback)
    - [3.6.8. `every(callback)`](#368-everycallback)

<br>

# 1. Uvod u objekte

Objekti su osnovna struktura podataka koja omogućavaju organizaciju i pohranu informacija. Objekt je skup povezanih podataka i/ili funkcionalnosti. Obično se sastoje od nekoliko varijabli i funkcija (koje se nazivaju svojstvima i metodama kada se nalaze unutar objekata).

Objekti se koriste za modeliranje stvarnih stvari, kao što su automobili, uloge, ljudi, hrana, knjige, itd. U JavaScriptu, objekti su osnovni tip podataka i koriste se za pohranu i manipulaciju podacima.

Objekte stvaramo koristeći objektne literale, koji se sastoje od parova `ključ:vrijednost` (eng. _key-value_) odvojenih zarezom i okruženih vitičastim zagradama `{}`. Svaki par `ključ:vrijednost` može biti svojstvo ili metoda objekta.

Definirajmo prazan objekt `auto`:

```javascript
const auto = {};
```

Ovime smo stvorili prazan objekt `auto` koji ne sadrži nikakve podatke. Možemo ga ispisati u konzolu koristeći `console.log(auto)` i dobiti ćemo prazan objekt `{}`.

```javascript
console.log(auto); // {}
```

## 1.1 Osnovna sintaksa objekata

U JavaScriptu, objekt se sastoji od više članova, od kojih svaki ima ključ (npr. _godina_proizvodnje_ i _boja_) i vrijednost (npr. _1987_ i _"Siva"_). Svaki par `ključ:vrijednost` mora biti odvojen zarezom `,`, a ključ i vrijednost u svakom slučaju odvojeni su dvotočjem `:`. Sintaksa uvijek slijedi ovaj uzorak:

```javascript
const imeObjekta = {
  ključ_1: vrijednost_1,
  ključ_2: vrijednost_2,
  ključ_3: vrijednost_3,
};
```

### 1.1.1 Svojstva objekta

Primjer objekta `auto` s 4 svojstava (`marka`, `model`, `godina_proizvodnje` i `boja`):

```javascript
const auto = {
  marka: "Ford",
  model: "Mustang",
  godina_proizvodnje: 2020,
  boja: "Siva",
};
```

Što će sada vratiti `console.log(auto)`?

```javascript
console.log(auto); // { marka: "Ford", model: "Mustang", godina_proizvodnje: 1987,  boja: "Siva" }
```

Možemo pristupiti svojstvima objekta koristeći notaciju točke `.`:

```javascript
console.log(auto.godina_proizvodnje); // 1987
console.log(auto.marka); // Toyota
console.log(auto.boja); // Siva
```

Par `ključ/vrijednost` može se deklarirati i na način da se `ključ` stavi unutar navodnika `""`:

```javascript
const auto = {
  godina_proizvodnje: 1987,
};
console.log(auto.godina_proizvodnje); // 1987
```

Ovaj način deklariranja također omogućuje dodavanje `ključa` s **razmacima** što nije preporučljivo jer se tim varijablama može pristupati samo pomoću notacije uglatih zagrada `[]`:

```javascript
const auto = {
  "godina proizvodnje": 1987,
};
console.log(auto["godina proizvodnje"]); // Dohvaća vrijednost ključa "godina proizvodnje" koristeći notaciju uglatih zagrada
```

Možemo li dodati broj kao ključ objekta? Odgovor je **da**. Međutim, JavaScript će automatski pretvoriti broj u string.
U tom slučaju za pristupanje svojstvu koristimo notaciju uglatih zagrada `[]`:

```javascript
const auto = {
  1: "Ford", // JavaScript će automatski pretvoriti broj 1 u string "1"
};
console.log(auto[1]); // Ford
```

**Zaključak**: svojstvima objekata možemo pristupati koristeći notaciju točke `.` ili notaciju uglatih zagrada `[]`. Notacija točke je češće korištena i preporučljiva jer je jednostavnija i čitljivija. Notacija uglatih zagrada koristi se kada ključ sadrži razmake ili kada se ključ sastoji od varijable.

### 1.1.2 Metode objekta

Već smo spomenuli da objekti mogu sadržavati i **funkcije**. Funkcije unutar objekta nazivaju se **metode**. Metode su funkcije koje su vezane uz objekt kojemu pripadaju i koriste definirana svojstva unutar objekta za izvršavanje određenih zadataka.
Primjerice, kako bismo izračunali starost automobila, možemo dodati metodu `izracunajStarost` u objekt `auto`.

Funkcije ćemo definirati unutar objekta koristeći već poznatu sintaksu:

```javascript
const auto = {
  marka: "Ford",
  model: "Mustang",
  godina_proizvodnje: 2020,
  boja: "Crna",
  izracunajStarost: function () {
    return new Date().getFullYear() - this.godina_proizvodnje; // this se odnosi na trenutni objekt u kojem je metoda definirana
  },
};
```

Međutim postoji i kraći način, jednostavno izostavljanjem ključne riječ `function`:

```javascript
const auto = {
  marka: "Ford",
  model: "Mustang",
  godina_proizvodnje: 2020,
  boja: "Crna",
  izracunajStarost() {
    return new Date().getFullYear() - this.godina_proizvodnje;
  },
};
```

Metodu `izracunajStarost` možemo pozvati koristeći notaciju točke:

```javascript
console.log(auto.izracunajStarost()); // 4
```

|                                                                                                                       Objekt                                                                                                                        |                                               Svojstva                                                |         Metode          |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------: |
| <div style="text-align:center;">auto<br><img src="https://www.motortrend.com/uploads/sites/10/2019/09/2020-ford-mustang-fastback-ecoboost-coupe-angular-front.png" style="width:50%; display: block; margin-left: auto; margin-right: auto;"></div> | auto.marka = "Ford"<br>auto.model = "Mustang"<br>auto.godina_proizvodnje = 2020<br>auto.boja = "Crna" | auto.izracunajStarost() |

## 1.2 Ključna riječ `this`

Ključna riječ `this` odnosi se na trenutni objekt u kojem se koristi. U kontekstu metoda objekta, `this` se odnosi na objekt koji sadrži metodu. U gornjem primjeru, `this` se odnosi na objekt `auto` jer je metoda `izracunajStarost` definirana unutar objekta `auto`.

`this` se koristi za pristup svojstvima i metodama objekta unutar samog objekta. Na primjer, u metodi `izracunajStarost`, `this.godina_proizvodnje` koristi se za pristup svojstvu `godina_proizvodnje` objekta `auto`.

Idemo dodati novu metodu `opisiAuto` u objekt `auto` koja će ispisati sve informacije o automobilu u jednoj rečenici, koristeći svojstva objekta `auto`.
Primjetite da se u metodi `opisiAuto` koristi ključna riječ `this` za pristup svojstvima objekta `auto`.

```javascript
const auto = {
  marka: "Ford",
  model: "Mustang",
  godina_proizvodnje: 2020,
  boja: "Crna",
  izracunajStarost: function () {
    return new Date().getFullYear() - this.godina_proizvodnje;
  },
  opisiAuto: function () {
    return `Auto je ${this.marka} ${this.model} boje ${this.boja} iz ${this.godina_proizvodnje}.`;
  },
};
```

Sada možemo pozvati metodu `opisiAuto` koristeći notaciju točke:

```javascript
console.log(auto.opisiAuto()); // Auto je Ford Mustang boje Crna iz 2020.
```

## 1.3 Ažuriranje objekta

Što ako želimo dodati, izbrisati ili ažurirati svojstva objekta? To možemo učiniti na nekoliko načina. Definirajmo objekt `grad` s nekoliko svojstava:

- `ime`: Pula
- `velicina`: 51.65 km²

```javascript
const grad = {
  ime: "Pula",
  velicina: 51.65, // km²
};
```

Recimo da hoćemo ažurirati svojstvo `velicina` na 52 i dodati novo svojstvo `broj_stanovnika` s vrijednošću `56540`. To možemo učiniti na sljedeći način koristeći notaciju točke:

```javascript
grad.velicina = 50;
grad.broj_stanovnika = 56540;
```

Isto je moguće postići koristeći notaciju uglatih zagrada `[]`:

```javascript
grad["velicina"] = 50;
grad["broj_stanovnika"] = 56540;
```

Sada možemo ispisati objekt `grad` koristeći `console.log(grad)` i dobiti ćemo ažurirani objekt.
Na jednak način objektu možemo dodati i metode. Primjerice, hoćemo dodati novu metodu `gustocaNaseljenosti()` kojom želimo prikazati broj stanovnika po kvadratnom kilometru.

```javascript
grad.gustocaNaseljenosti = function () {
  return this.broj_stanovnika / this.velicina;
};

console.log(grad.gustocaNaseljenosti()); // 1130.8 stanovnika/km²
```

Postoji još jedna korist upotrebe notacije uglatih zagrada `[]` - omogućuje nam pristup svojstvima objekta koristeći varijable. Na primjer, ako imamo varijablu `svojstvo` koja sadrži ime svojstva objekta, možemo koristiti tu varijablu za pristupanje svojstvu objekta:

```javascript
const svojstvo = "ime";
console.log(grad[svojstvo]); // Pula
```

Navedeno je korisno kada imamo dinamički generirane ključeve. Međutim, isto nije moguće napraviti koristeći notaciju točke `.`.

```javascript
const svojstvo = "ime";
console.log(grad.svojstvo); // undefined - neće raditi
```

Kako možemo izbrisati svojstvo objekta? To možemo učiniti koristeći ključnu riječ `delete`:
Recimo da hoćemmo izbrisati svojstvo `velicina` iz objekta `grad`:

```javascript
delete grad.velicina;
console.log(grad); // { ime: "Pula", broj_stanovnika: 56540, gustocaNaseljenosti: [Function: gustocaNaseljenosti] }
```

Ako upišete `delete grad.velicina` u konzolu primjetit ćete da će konzola vratiti `true` što znači da je svojstvo uspješno obrisano.

## 1.4 Konstruktori

Objekte smo do sad stvarali ručno, što je u redu ako ih trebamo stvoriti samo nekoliko. Međutim, što ako trebamo stvoriti stotine ili čak tisuće objekata? U tom slučaju, ručno stvaranje objekata postaje nepraktično i vremenski zahtjevno. Do sad smo naučili koristiti funkcije, zašto ne bi koristili funkciju za stvaranje novog objekta?

### Primjer 1 - Stvaranje objekta pomoću funkcije

Želimo stvoriti objekt `korisnik` s tri svojstva: `ime`, `prezime` i `godina_rodenja`.

```javascript
const korisnik = {
  ime: "Ana",
  prezime: "Anić",
  godina_rodenja: 1990,
};
```

Što ako želimo stvoriti još jednog korisnika? Moramo ponoviti cijeli postupak:

```javascript
const korisnik2 = {
  ime: "Marko",
  prezime: "Marić",
  godina_rodenja: 1985,
};
```

Kako možemo automatizirati proces? Idemo pokušati stvoriti funkciju `stvoriKorisnika` koja će stvoriti novi objekt korisnika svaki put kada je pozovemo:

```javascript
function stvoriKorisnika(ime, prezime, godina_rodenja) {
  const obj = {}; // stvori prazan objekt
  obj.ime = ime; // dodaj svojstvo ime
  obj.prezime = prezime; // dodaj svojstvo prezime
  obj.godina_rodenja = godina_rodenja; // dodaj svojstvo godina_rodenja

  obj.predstaviSe = function () {
    console.log(
      `Bok! Ja sam ${this.ime} ${this.prezime}. Rođen/a sam ${this.godina_rodenja} godine.`
    );
  };

  return obj; // vrati objekt
}
```

Sada možemo jednostavnije stvoriti nove korisnike koristeći novu funkciju `stvoriKorisnika`:

```javascript
const ana = stvoriKorisnika("Ana", "Anić", 1990);
const marko = stvoriKorisnika("Marko", "Marić", 1985);
const petar = stvoriKorisnika("Petar", "Petrović", 2001);

ana.predstaviSe(); // "Bok! Ja sam Ana Anić. Rođen/a sam 1990 godine."
marko.predstaviSe(); // "Bok! Ja sam Marko Marić. Rođen/a sam 1985 godine."
petar.predstaviSe(); // "Bok! Ja sam Petar Petrović. Rođen/a sam 2001 godine."
```

### Primjer 2 - Stvaranje objekta pomoću konstruktora

Ovo radi dobro, ali zašto moramo svaki put stvarati novi objekt `obj` i vraćati ga na kraju funkcije? U JavaScriptu postoji posebna vrsta funkcije koja se zove **konstruktor** (eng. **_constructor_**). Konstruktori su posebne funkcije koje se koriste za stvaranje novih objekata. Konstruktori rade na sljedeći način:

1. Stvaraju prazan objekt
2. Dodaju svojstva i metode objektu
3. Automatski vraćaju objekt

Konstruktori, po konvenciji, se pišu velikim početnim slovom i nazivaju se prema vrsti objekta koje stvaraju. Dakle, prijašnju funkciju `stvoriKorisnika` možemo preoblikovati u konstruktor `Korisnik`. Kako ne stvaramo prazan objekt, već ga automatski vraćamo, ne moramo koristiti ključnu riječ `return`. Također, za dodavanje svojstava i metoda objektu koristimo ključnu riječ `this`, gdje se `this` odnosi na novi objekt koji se stvara.

```javascript
function Korisnik(ime, prezime, godina_rodenja) {
  this.ime = ime;
  this.prezime = prezime;
  this.godina_rodenja = godina_rodenja;
  this.predstaviSe = function () {
    console.log(
      `Bok! Ja sam ${this.ime} ${this.prezime}. Rođen/a sam ${this.godina_rodenja} godine.`
    );
  };
}
```

Kako bi JavaScript znao da je funkcija `Korisnik` konstruktor, moramo koristiti ključnu riječ `new` prije poziva konstruktora.

```javascript
const ana = new Osoba("Ana", "Anić", 1990);
const marko = new Osoba("Marko", "Marić", 1985);
const petar = new Osoba("Petar", "Petrović", 2001);

ana.predstaviSe(); // "Bok! Ja sam Ana Anić. Rođen/a sam 1990 godine."
marko.predstaviSe(); // "Bok! Ja sam Marko Marić. Rođen/a sam 1985 godine."
petar.predstaviSe(); // "Bok! Ja sam Petar Petrović. Rođen/a sam 2001 godine."
```

Na ovaj način definiramo i stvaramo nove objekte koristeći konstruktor.

## Vježba 1

1. Definirajte konstruktor `Automobil`. U konstruktor postavite sljedeća svojstva automobilu: `marka`, `model`, `godina_proizvodnje`, `boja` i `cijena`. Kada to napravite, izradite nekoliko objekata tipa `Automobil` koristeći konstruktor.
2. Dodajte metodu `azurirajCijenu(novaCijena)` u konstruktor `Automobil` koja će ažurirati cijenu automobila.
3. Dodajte metodu `detalji()` u konstruktor `Automobil` koja će u jednoj rečenici ispisati sva svojstva automobila.
4. Pozovite za svaki automobil metodu `detalji()` i metodu `azurirajCijenu()`.

Primjer rezultata:

```javascript
Marka: Toyota
Model: Corolla
Godina proizvodnje: 2019
Boja: siva
Cijena: 15000


Marka: Volkswagen
Model: Golf
Godina proizvodnje: 2015
Boja: crna
Cijena: 11500
```

# 2. Standardni ugrađeni objekti (eng. **_built-in objects_**)

JavaScript nudi mnoštvo ugrađenih (eng. **_built-in_**) objekata koji modeliraju mnoštvo objekata iz stvarnog svijeta, kao i osnovne podatkovne tipove. Ovi objekti pružaju razne metode i svojstva za rad s podacima, poput manipulacije nizovima znakova `String`, rad s datumima `Date`, matematičke operacije `Math`, itd.

Do sad smo već susreli s nekoliko ugrađenih objekata, poput `Date` i `Math`. U narednim poglavljima upoznat ćemo se detaljnije s ugrađenim objektima: `String`, `Number`, `Math` i `Date`.

## 2.1 `String` objekt

`String` objekt predstavlja tekstualne podatke, odnosno niz znakova (`string`). Nudi razne korisne metode za manipulaciju i analizu nizova znakova.

Ako postoji ugrađeni `String` objekt, to znači da možemo pozvati i njegov konstruktor `String()` kako bismo stvorili novi `String` objekt. Međutim, to rijetko radimo jer je moguće stvoriti `String` objekt koristeći objektne literale, tj. navodnike `""` ili apostrofe `''`.

**Važno je naglasiti** da kod svih primitivnih tipova podataka (npr. `string`, `number`, `boolean`) možemo koristiti metode i svojstva kao da su objekti. JavaScript automatski za nas pretvara primitivne tipove u objekte kada koristimo metode i svojstva.

```javascript
const ime = "Ana"; // stvara se tkz. primitivni string
const prezime = new String("Anić"); // stvara se objekt String pozivanjem konstruktora

console.log(typeof ime); // string
console.log(typeof prezime); // object

console.log(prezime); // [String: 'Anić']
```

Ispod su navedene neke od najčešće korištenih metoda `String` objekta. Ima ih još [mnogo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), ali ove su najpoznatije.

| Metoda          | Objašnjenje                                                                                                                                                                                                                                                                                                                                                     | Sintaksa                                                | Primjer                                                                                                                                                                                                  | Output                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `charAt()`      | Vraća znak na određenom indeksu u nizu znakova. Indeks prvog znaka je `0`.                                                                                                                                                                                                                                                                                      | `string.charAt(index)`                                  | `'hello'.charAt(1)`                                                                                                                                                                                      | `'e'`                                                                      |
| `concat()`      | Spaja dva ili više nizova znakova te vraća novi niz, slično kao operator `+` nad nizovima.                                                                                                                                                                                                                                                                      | `string.concat(substring1, substring2 ... substringN)`  | `'hello'.concat(' world')`                                                                                                                                                                               | `'hello world'`                                                            |
| `indexOf()`     | Vraća indeks prvog pojavljivanja podniza (eng. **_substring_**) u nizu                                                                                                                                                                                                                                                                                          | `string.indexOf(substring)`                             | `'hello'.indexOf('lo')`                                                                                                                                                                                  | `3`                                                                        |
| `lastIndexOf()` | Vraća indeks zadnjeg pojavljivanja podniza u nizu                                                                                                                                                                                                                                                                                                               | `string.lastIndexOf(substring)`                         | `'hello'.lastIndexOf('l')`                                                                                                                                                                               | `3`                                                                        |
| `toUpperCase()` | Pretvara cijeli niz znakova u velika slova                                                                                                                                                                                                                                                                                                                      | `string.toUpperCase()`                                  | `'hello'.toUpperCase()`                                                                                                                                                                                  | `'HELLO'`                                                                  |
| `toLowerCase()` | Pretvara cijeli niz znakova u mala slova                                                                                                                                                                                                                                                                                                                        | `string.toLowerCase()`                                  | `'HELLO'.toLowerCase()`                                                                                                                                                                                  | `'hello'`                                                                  |
| `substring()`   | Izdvaja podskup niza znakova i vraća novi niz bez izmjene originalnog niza. Metoda će izdvojiti podskup `[indexStart, indexEnd)`, dakle `indexEnd` neće biti uključen. Ako je `indexStart > indexEnd`, `substring()` će ih zamjeniti. Ako su indeksi negativni brojevi, interpretirat će se kao `0`.                                                            | `string.substring(indexStart, indexEnd)`                | `let novi = 'Novigrad'.substring(0, 4)`                                                                                                                                                                  | `novi === 'Novi'`                                                          |
| `slice()`       | Izdvaja podskup niza znakova i vraća novi niz bez izmjene originalnog niza. Metoda će izdvojiti podskup `[indexStart, indexEnd)`, dakle `indexEnd` neće biti uključen. Za razliku od `substring()` metode, ako je `indexStart > indexEnd`, `slice()` će vratiti prazan string `""`. Ako su indeksi negativni brojevi, brojat brojat će mjesta počevši od kraja. | `string.slice(indexStart, indexEnd)`                    | `let noviNiz = 'Novigrad'.slice(-4)`                                                                                                                                                                     | `noviNiz === 'grad'`                                                       |
| `replace()`     | Metoda prvo pretražuje zadani `pattern` u stringu koji može biti drugi niz znakova ili [regExp](https://regexr.com/). Ako ga pronađe, zamjenjuje sve `pattern` podskupove s `replacement`. Metoda vraća novi uređeni znakovni niz bez izmjene originalnog.                                                                                                      | `string.replace(pattern, replacement)`                  | `'Hello, world!'.replace('world', 'JavaScript')`                                                                                                                                                         | `'Hello, JavaScript!'`                                                     |
| `split()`       | Razdvaja znakovni niz prema danom `separator` argumentu i dobivene podnizove sprema u polje. Vraća polje podnizova bez izmjene originalnog znakovnog niza. Metoda ima i opcionalni separator limit koji označava limit broja podnizova koji se mogu spremiti u polje.                                                                                           | `string.split(separator, limit)`                        | `'The quick brown fox jumps over the lazy dog.'.split(' ')`                                                                                                                                              | `['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']` |
| `trim()`        | Uklanja razmake s početka i kraja niza. Vraća novi niz bez izmjene originalnog.                                                                                                                                                                                                                                                                                 | `string.trim()`                                         | `'  hello  '.trim()`                                                                                                                                                                                     | `'hello'`                                                                  |
| `match()`       | Pronalazi podudaranja u znakovnom nizu uz pomoć regularnih izraza (regExp). Vraća polje podskupa niza koji odgovaraju `regExp` izrazu.                                                                                                                                                                                                                          | `string.match(regExp)`                                  | Hoćemo pronaći sve brojeve u rečenici: `'Godina je 2024 i mjesec je 3'.match(/\d+/g)`. `\d` - broj `[0-9]`, `\d+` - traži poklapanje jednog ili više broja `g` - regex oznaka za globalno pretraživanje. | `['2024', '3']`                                                            |
| `repeat()`      | Ponavlja niz određeni broj (`count`) puta.                                                                                                                                                                                                                                                                                                                      | `string.repeat(count)`                                  | `'hello'.repeat(3)`                                                                                                                                                                                      | `'hellohellohello'`                                                        |
| `startsWith()`  | Provjerava počinje li niz nekim podnizom. Opcionalno ima parametar `position` koji definira poziciju gdje se provjerava podniz, `0` po defaultu. Vraća `boolean` vrijednost ovisno o pronalasku.                                                                                                                                                                | `string.startsWith(substring, position=0)`              | `'To be, or not to be, that is the question.'.startsWith('To be')`                                                                                                                                       | `true`                                                                     |
| `endsWith()`    | Provjerava završava li niz nekim podnizom. Opcionalno ima parametar `endPosition` koji definira krajnju poziciju gdje se očekuje substring, `string.length` tj. zadnji indeks u stringu po defaultu. Vraća `boolean` vrijednost ovisno o pronalasku.                                                                                                            | `string.endsWith(substring, endPosition=string.length)` | `'Cats are the best!'.endsWith('best!')`                                                                                                                                                                 | `true`                                                                     |
| `includes()`    | Provjerava postoji li određeni podniz u nizu. Metoda je case-sensitive te vraća `boolean` vrijednost ovisno o tome postoji li podniz. Dodatno, tu je opcionalni `position` argument koji započinje pretragu na određenoj poziciji, `0` po defaultu - dakle pretraživanje od početka                                                                             | `string.includes(substring)`                            | `'The quick brown fox jumps over the lazy dog.'.includes('fox')`                                                                                                                                         | `true`                                                                     |

Da ne bi bilo zabune, prisjetimo se na trenutak `typeof` operatora. `typeof` operator vraća tip podatka. Na primjer, `typeof "hello"` vraća `"string"`. Međutim, `typeof String` vraća `"function"` jer je `String` konstruktor funkcija (Zato je važno držati se konvencije da se konstruktori objekata pišu velikim početnim slovom).

Iz tablice možete iščitati razlike između metoda `substring()` i `slice()`. Oba metode vraćaju podniz niza, ali se razlikuju u načinu rada s negativnim indeksima i indeksima koji su izvan granica niza. Preporuka je koristiti `slice()` jer je fleksibilniji i ima jasnije ponašanje, osim ako nemate koristi od specifičnog ponašanja `substring()` - najčešće je to zamjena index argumenata.

Zašto je dobro naučiti koristiti ove metode?
Većina ovih metoda koristi se svakodnevno u programiranju. Na primjer, `split()` metoda koristi se za razdvajanje niza znakova na riječi, `toUpperCase()` i `toLowerCase()` metode koriste se za normalizaciju teksta, `replace()` metoda koristi se za zamjenu dijelova teksta, itd. Ne želimo gubiti vrijeme i ručno raditi stvari nad znakovnim nizovima, za koje već postoje gotove metode.

Primjerice, imamo potrebnu izvući sve riječi iz rečenice neke rečenice. Ispod je primjer kako bismo to ručno napravili:

```javascript
const recenica = "Pula je grad u Istri.";
const rijeci = []; // prazno polje za spremanje riječi (nismo još prošli polja)
let trenutnaRijec = ""; // prazan string za spremanje trenutne riječi
for (let i = 0; i < recenica.length; i++) {
  // prolazimo kroz svaki znak u rečenici
  if (recenica[i] !== " ") {
    // ako trenutni znak nije razmak
    trenutnaRijec += recenica[i]; // dodaj trenutni znak u trenutnu riječ
  } else {
    rijeci.push(trenutnaRijec); // dodaj trenutnu riječ u polje riječi
    trenutnaRijec = ""; // resetiraj trenutnu riječ
  }
}
rijeci.push(trenutnaRijec); // dodaj zadnju riječ u polje riječi
console.log(rijeci); // ["Pula", "je", "grad", "u", "Istri."]
```

To je 10-tak linija koda za vrlo jednostavnu i učestalu radnju! Možemo to učiniti puno jednostavnije koristeći `split()` metodu:

```javascript
const recenica = "Pula je grad u Istri.";
const rijeci = recenica.split(" ");
console.log(rijeci); // ["Pula", "je", "grad", "u", "Istri."]
```

## Vježba 2

1. Napišite funkciju `brojSamoglasnikaISuglasnika` koja prima ulazni string i vraća objekt s dva svojstva: `samoglasnici:broj_samoglasnika` i `suglasnici:broj_suglasnika`.

   - Koristi metodu `match()` za pronalaženje samoglasnika (`regex = /[aeiou]/g`) i suglasnika (`regex = /[^aeiou\W]/g`) u ulaznom stringu.
   - Koristi `toUpperCase()` ili `toLowerCase()` za normalizaciju slova.
   - Na primjer:
     ```javascript
     console.log(brojSamoglasnikaISuglasnika("Hello World"));
     // { samoglasnici: 3, suglasnici: 7 }
     ```

2. Napiši funkciju `duljinaRijeci` koja prima rečenicu te ispisuje sve riječi iz rečenice i njihovu duljinu. Funkcija ne mora vraćati ništa.
   - Na primjer:
     ```javascript
     duljinaRijeci("   JavaScript je zabavan   ");
     // JavaScript: 10
     // je: 2
     // zabavan: 7
     ```

## 2.2 `Number` objekt

Number objekt predstavlja numeričke podatke, odnosno brojeve. Nudi razne korisne metode za rad s brojevima u JavaScriptu. Isto kao i `String` objekt, `Number` objekt ima svoj konstruktor `Number()` koji se rijetko koristi jer je moguće stvoriti `Number` objekt koristeći objektne literale - same brojeve.

```javascript
const broj = 5; // primitivni broj
const brojObjekt = new Number(5); // objekt broj
```

Ispod se nalazi tablica s nekoliko najčešće korištenih metoda `Number` objekta:

| Metoda          | Objasnjenje                                                                                                                                                                              | Sintaksa                    | Primjer                                       | Izlaz                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------- | --------------------- |
| `toFixed()`     | Zaokružuje broj na zadani broj (`digits`) decimalnih mjesta. Vraća string (zbog decimalne točke).                                                                                        | `number.toFixed(digits)`    | `(5.56789).toFixed(2)`                        | `"5.57"`              |
| `toPrecision()` | Za dani broj metoda vraća njegovu string reprezentaciju na zadani broj značajnih znamenki `precision` parametar koja mora biti između `1` i `100`.                                       | `number.toPrecision(2)`     | `(5.123456).toPrecision(2)`                   | `"5.1"`               |
| `toString()`    | Vraća string reprezentaciju broja. Opcionalni `radix` parametar, može biti između `2` i `36` i specificira bazu koja se koristi za reprezentaciju broja. Default je 10 (dekadski prikaz) | `number.toString(radix=10)` | `(123).toString()` ; `(100).toString(2)`      | `"123"` ; `"1100100"` |
| `parseInt()`    | Metoda pretvara dani string u cjelobrojni ekvivalent. Kao i kod `toString()`, sadrži opcionalni `radix` parametar.                                                                       | `parseInt(string, radix)`   | `parseInt("10.456")` ; `parseInt("40 years")` | `10` ; `40`           |
| `parseFloat()`  | Metoda pretvara dani string u floating-point ekvivalent.                                                                                                                                 | `parseFloat(string)`        | `parseFloat("10.456")`                        | `10.456`              |
| `isInteger()`   | Provjerava je li dana vrijednost `value` integer. Vraća `boolean` vrijednost ovisno o tome.                                                                                              | `isInteger(value)`          | `isInteger(5.2)`                              | `false`               |
| `isNaN()`       | Provjerava je li vrijednost dana vrijednost `NaN` (Not a Number). Vraća `boolean` vrijednost ovisno o tome.                                                                              | `isNaN(value)`              | `isNaN("string")`                             | `true`                |

## Vježba 3

1. Napiši funkciju `zaokruziBroj(broj, decimalnaMjesta)` koja prima broj i decimalni broj mjesta za zaokruživanje te vraća zaokruženi decimalni broj. Funkcija mora provjeriti je li parametar broj uistinu broj. Ako nije, prekida s radom.

   Primjer:

   ```javascript
   console.log(zaokruziBroj(5.56789, 2)); // 5.57
   ```

//////////////////////////////////////////////////LUKA//////////////////////////////////////////////////////////

## 2.3 **Math**

Objekt koji pruža razne matematičke funkcije i konstante. Ovaj objekt omogućuje izvođenje raznih matematičkih operacija, poput računanja trigonometrijskih funkcija, logaritama, eksponencijalnih funkcija itd.

| Metoda       | Opis                                                | Rezultat           |
| ------------ | --------------------------------------------------- | ------------------ |
| `Math.PI`    | Vraća vrijednost konstante `π` (pi)                 | 3.141592653589793  |
| `Math.E`     | Vraća vrijednost konstante `e` (Eulerova konstanta) | 2.718281828459045  |
| `Math.SQRT2` | Vraća vrijednost korijena iz `2`                    | 1.4142135623730951 |
| `Math.LN2`   | Vraća vrijednost prirodnog `logaritma` broja `2`    | 0.6931471805599453 |
| `Math.LN10`  | Vraća vrijednost prirodnog `logaritma` broja `10`   | 2.302585092994046  |

| Metoda           | Objasnjenje                                       | Primjer                 | Izlaz                        |
| ---------------- | ------------------------------------------------- | ----------------------- | ---------------------------- |
| `Math.abs(x)`    | Vraća apsolutnu vrijednost broja `x`.             | `Math.abs(-4.5)`        | `4.5`                        |
| `Math.ceil(x)`   | Zaokružuje broj `x` na najmanji veći cijeli broj. | `Math.ceil(4.3)`        | `5`                          |
| `Math.floor(x)`  | Zaokružuje broj `x` na najveći manji cijeli broj. | `Math.floor(4.9)`       | `4`                          |
| `Math.max(x, y)` | Vraća veći od dva broja `x` i `y`.                | `Math.max(5, 10)`       | `10`                         |
| `Math.min(x, y)` | Vraća manji od dva broja `x` i `y`.               | `Math.min(5, 10)`       | `5`                          |
| `Math.pow(x, y)` | Vraća rezultat `x` na potenciju `y`.              | `Math.pow(2, 3)`        | `8`                          |
| `Math.sqrt(x)`   | Vraća kvadratni korijen broja `x`.                | `Math.sqrt(9)`          | `3`                          |
| `Math.round(x)`  | Zaokružuje broj `x` na najbliži cijeli broj.      | `Math.round(4.3)`       | `4`                          |
| `Math.random()`  | Generira pseudoslučajan broj između 0 i 1.        | `Math.random()`         | (slučajni broj između 0 i 1) |
| `Math.log(x)`    | Vraća prirodni logaritam broja `x`.               | `Math.log(Math.E)`      | `1`                          |
| `Math.exp(x)`    | Vraća e (Eulerov broj) na potenciju `x`.          | `Math.exp(1)`           | `2.718281828459045`          |
| `Math.sin(x)`    | Vraća sinus broja `x` (u radijanima).             | `Math.sin(Math.PI / 2)` | `1`                          |
| `Math.cos(x)`    | Vraća kosinus broja `x` (u radijanima).           | `Math.cos(Math.PI)`     | `-1`                         |
| `Math.tan(x)`    | Vraća tangens broja `x` (u radijanima).           | `Math.tan(Math.PI / 4)` | `1`                          |

## Vježba 5

1. Napiši funkciju `izracunajKrug(broj)` koja prima decimalni broj koji predstavlja radius kruga. Funkcija treba izračunati i vratiti površinu i opseg tog kruga. Površina kruga se računa kao `πr²` (gdje je `r` radius), a opseg se računa kao `2πr`. Ispiši rezultate u formatu `"Površina kruga je: [površina], Opseg kruga je: [opseg]"`.

Rezultat:

```javascript
console.log(izracunajKrug(5)); // Output: Površina kruga je: 78.54, Opseg kruga je: 31.42
```

2. Napiši funkciju `izracunajPitagoru(duzinaA, duzinaB)` koja prima dužine dvije katete pravokutnog trokuta. Funkcija treba izračunati i vratiti dužinu hipotenuze pomoću teoreme Pitagore, koja glasi: `c=√(a²+b²)`, gdje su `a` i `b` dužine kateta, a `c` dužina hipotenuze. Ispiši rezultat u formatu `"Dužina hipotenuze je: [hipotenuza]"`.

Rezultat:

```javascript
console.log(izracunajPitagoru(3, 4)); // Output: Dužina hipotenuze je: 5.00
```

## 2.4 **Date**

Objekt koji predstavlja datum i vrijeme. Omogućuje manipulaciju datumima i vremenima, računanje razlika između datuma, formatiranje datuma za prikaz itd.

Načini deklariranja datuma:

| Način Deklaracije               | Objasnjenje                                                           | Primjer                            |
| ------------------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| `new Date()`                    | Stvara datum na temelju trenutnog vremena i datuma.                   | `new Date()`                       |
| `new Date(godina, mjesec, dan)` | Stvara datum s određenom godinom, mjesecom i danom.                   | `new Date(2024, 2, 20)`            |
| `new Date("datumString")`       | Stvara datum iz stringa koji predstavlja datum.                       | `new Date("2024-02-20")`           |
| `new Date(unixVrijeme)`         | Stvara datum iz UNIX vremena (broj milisekundi od 1. siječnja 1970.). | `new Date(1708436235000)`          |
| `new Date(ISO_string)`          | Stvara datum iz stringa u ISO formatu (ISO 8601).                     | `new Date("2024-02-19T00:00:00Z")` |

```javascript
const datum = new Date(); //Tue Feb 20 2024 09:51:54 GMT+0100 (Central European Standard Time)
const datum2 = new Date(2024, 1, 20); // Tue Feb 20 2024 00:00:00 GMT+0100 (Central European Standard Time)
const datum3 = new Date("2024-02-20"); // Tue Feb 20 2024 01:00:00 GMT+0100 (Central European Standard Time)
const datum4 = new Date(1708436235000); // Tue Jan 20 1970 19:33:56 GMT+0100 (Central European Standard Time)
const datum5 = new Date("2024-02-19T14:37:15Z"); // Mon Feb 19 2024 15:37:15 GMT+0100 (Central European Standard Time)
```

Osnovne funkcije datuma:

| Metoda                 | Objasnjenje                                                                       | Primjer                               | Izlaz                                                                  |
| ---------------------- | --------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| `getDate()`            | Vraća dan mjeseca za određeni datum.                                              | `datum.getDate();`                    | `20`                                                                   |
| `getDay()`             | Vraća dan u tjednu za određeni datum (0 za nedjelju, 1 za ponedjeljak, itd.).     | `datum.getDay();`                     | `2`                                                                    |
| `getFullYear()`        | Vraća godinu za određeni datum.                                                   | `datum.getFullYear();`                | `2024`                                                                 |
| `getMonth()`           | Vraća mjesec za određeni datum (0 za januar, 1 za februar, itd.).                 | `datum.getMonth();`                   | `1`                                                                    |
| `getHours()`           | Vraća sate za određeni datum.                                                     | `datum.getHours();`                   | `14`                                                                   |
| `getMinutes()`         | Vraća minute za određeni datum.                                                   | `datum.getMinutes();`                 | `37`                                                                   |
| `getSeconds()`         | Vraća sekunde za određeni datum.                                                  | `datum.getSeconds();`                 | `15`                                                                   |
| `getTime()`            | Vraća broj milisekundi od 1. januara 1970.                                        | `datum.getTime();`                    | `1645265835123`                                                        |
| `toLocaleDateString()` | Vraća datum u lokalnom formatu.                                                   | `datum.toLocaleDateString();`         | `'20/02/2024'`                                                         |
| `toLocaleTimeString()` | Vraća vrijeme u lokalnom formatu.                                                 | `datum.toLocaleTimeString();`         | `"14:37:15"`                                                           |
| `toLocaleString()`     | Vraća datum i vrijeme u lokalnom formatu.                                         | `datum.toLocaleString();`             | `'20/02/2024, 14:37:15'`                                               |
| `toString()`           | Vraća datum i vrijeme kao string.                                                 | `datum.toString();`                   | `"Tue Feb 20 2024 14:37:15 GMT+0100 (Central European Standard Time)"` |
| `Date.now()`           | Vraća trenutno vrijeme u milisekundama od 1. januara 1970.                        | `Date.now();`                         | `1645265835123`                                                        |
| `Date.parse()`         | Parsira string reprezentaciju datuma i vraća broj milisekundi od 1. januara 1970. | `Date.parse("2024-02-20T14:37:15Z");` | `1645265835000` (ovisno o vremenskoj zoni, može se razlikovati)        |

Računanje s datumima:

```javascript
const prviDatum = new Date("2024-02-15");
const drugiDatum = new Date("2024-03-10");

const razlika = drugiDatum.getTime() - prviDatum.getTime(); // Razlika u milisekundama
const razlikaUDanima = razlika / (1000 * 3600 * 24); // Pretvara razliku u dane

console.log(`Razlika između datuma je ${razlikaUDanima} dana.`); // Razlika između datuma je 24 dana.
```

## Vježba 6

### Zadatak 1: Provjera Dana u Tjednu

Napišite funkciju `provjeriDanUTjednu(datum)` koja prima datum i vraća naziv dana u tjednu za taj datum. Funkcija treba vratiti naziv dana kao string.

Rezultat:

```javascript
const dan = new Date("2024-02-19T14:30:00");
console.log(provjeriDanUTjednu(dan)); // "Ponedjeljak"
const dan2 = new Date("2024-02-18T12:15:00");
console.log(provjeriDanUTjednu(dan2)); // "Nedjelja"
```

### Zadatak 2: Razlika u Vremenu

Napišite funkciju `razlikaUVremenu(datum1, datum2)` koja prima dva datuma i vraća razliku u vremenu između ta dva datuma u satima, minutama i sekundama. Ispiši rezultat u formatu `"[sati] sati, [minute] minuta, [sekunde] sekundi"`.

Rezultat:

```javascript
const datum1 = new Date("2024-02-19T14:30:10");
const datum2 = new Date("2024-02-18T12:15:35");
console.log(razlikaUVremenu(datum1, datum2)); // "26 sati, 14 minuta, 45 sekundi"
```

# 3. Uvod u polja

Polja u JavaScriptu omogućuju pohranjivanje kolekcije više elementa pod jednim imenom varijable i imaju članove za izvođenje uobičajenih operacija s poljima.

- Polja se općenito opisuju kao _list-like objects_; to su jednostavno pojedinačni objekti koji sadrže više vrijednosti pohranjenih u listi.

- Objekti polja se mogu pohraniti u varijable i obrađivati na isti način kao i bilo koji drugi tip vrijednosti, s razlikom što možemo pojedinačno pristupiti svakoj vrijednosti unutar polja te vršiti različite radnje nad njima, poput iteracije nad poljem i obavljanja istih operacija na svakoj vrijednosti.

- Možda imamo niz elementa proizvoda i njihove cijene pohranjenih u polju i želimo prolaziti kroz sve i ispisivati ih na računu, dok istovremeno zbrajamo sve cijene i ispisujemo ukupnu cijenu na dnu.

## 3.1 Sintaksa polja

Polja se sastoje od uglatih zagrada `[]` i elementa koji su odvojeni zarezima `,`.

Primjer:

```javascript
const polje = ["kruh", "mlijeko", "sir", "jabuka", "banana"];
console.log(polje); // ['kruh', 'mlijeko', 'sir', 'jabuka', 'banana']
/*
(5) ['kruh', 'mlijeko', 'sir', 'jabuka', 'banana']
0: "kruh"
1: "mlijeko"
2: "sir"
3: "jabuka"
4: "banana"
length: 5
*/
```

U gornjem primjeru, svaki element je string, ali u polju možemo pohraniti **različite** tipove podataka - string-ove, brojeve, objekte, pa čak i druga polja. Također možemo **miješati** tipove podataka u jednom polju, kao što možemo i u objektu - ne moramo se ograničiti samo na pohranu brojeva u jedno polje, a u drugom samo string-ova. Na primjer:

```javascript
const poljeBrojeva = [1, 1, 2, 3, 5, 8, 13];
const razlicitiTipoviPodataka = [
  "stablo",
  { ime: "Marko", prezime: "marić" },
  [0, 1, 2],
];
```

## 3.2 Veličina polja

Veličina polja (koliko elementa sadrži) može se saznati na isti način kao i duljina string-a - korištenjem svojstva `length`.

Primjer:

```javascript
const polje = ["kruh", "mlijeko", "sir", "jabuka", "banana"];
console.log(polje.length); // 5
```

## 3.3 Pristupanje i modificiranje polja

Elementi u polju su numerirani, počevši od nule `0`. Ta se brojka naziva **indeks** elementa. Dakle, prvi element ima indeks `0`, druga ima indeks `1`, i tako dalje. Može se pristupati pojedinim elementima u polju koristeći notaciju **uglatih** `[]` zagrada i pružajući indeks elementa, na isti način kao što se pristupa slovima u string-u.

Primjer:

```javascript
const polje = ["kruh", "mlijeko", "sir", "jabuka", "banana"];
console.log(polje[0]); // kruh
console.log(polje[1]); // mlijeko
console.log(polje[2]); // sir
console.log(polje[3]); // jabuka
console.log(polje[4]); // banana
console.log(polje[5]); // undefined
```

Također se može izmijeniti element u polju dodjeljivanjem nove vrijednosti pojedinačnoj stavci u polju.

```javascript
const polje = ["kruh", "mlijeko", "sir", "jabuka", "banana"];
polje[2] = "brašno";
console.log(polje); // ['kruh', 'mlijeko', 'brašno', 'jabuka', 'banana']
```

> Napomena: Polje unutar polja naziva se **višedimenzionalno** polje. Možete pristupiti stavci unutar polja koja je samo po sebi u drugom polju pomoću spajanja dvije skupine uglatih zagrada `[][]`.

Primjer:

```javascript
const polje = ["stablo", 795, [0, 1, 2]];

console.log(polje[2][2]); // 2

// ist kao da pišemo:

const element2 = polje[2];
console.log(element2[2]); // 2
```

Ako neznamo indeks elementa, koristimo metodu `indexOf()` koje prima element kao argument te vraća indeks elementa ako postoji, inače vraća `-1` ako elementa nema.

```javascript
const ptice = ["Galeb", "Sova", "Lastavica"];
console.log(ptice.indexOf("Lastavica")); //  2
console.log(ptice.indexOf("Papagaj")); // -1
```

## 3.4 Dodavanje i brisanje elementa u polju

Za dodavanje jednog ili više elementa na kraj polja možemo koristiti `push()`. Može se uključiti jedan ili više elementa na kraj polja. Nova duljina polja se vraća kada se završi poziv metode.

```javascript
const gradovi = ["Pula", "Rijeka"];
gradovi.push("Zagreb");
console.log(gradovi); // ['Pula', 'Rijeka', 'Zagreb']
gradovi.push("Karlovac", "Split");
console.log(gradovi); // ['Pula', 'Rijeka', 'Zagreb', 'Karlovac', 'Split']
const novaDuljina = gradovi.push("Šibenik");
console.log(gradovi); // ['Pula', 'Rijeka', 'Zagreb', 'Karlovac', 'Split', 'Šibenik' ]
console.log(novaDuljina); // 6
```

Za dodavanje elementa na početak polja koristite `unshift()`:

```javascript
const gradovi = ["Pula", "Rijeka"];
gradovi.unshift("Zagreb");
console.log(gradovi); // ['Zagreb', 'Pula', 'Rijeka']
```

Za uklanjanje posljednjeg elementa iz polja koristi se `pop()`. Metoda `pop()` vraća element koji je uklonjen.

```javascript
const gradovi = ["Pula", "Rijeka", "Karlovac", "Split"];
const uklonjeniGrad = gradovi.pop();
console.log(gradovi); // ['Pula', 'Rijeka', 'Karlovac']
console.log(uklonjeniGrad); // Split
```

Za uklanjanje prvog elementa iz polja koristi se `shift()`:

```javascript
const gradovi = ["Pula", "Rijeka", "Karlovac", "Split"];
gradovi.shift();
console.log(gradovi); // ['Rijeka', 'Karlovac', 'Split']
```

Ako znamo indeks elementa, može se ukloniti iz polja koristeći `splice()`. Prvi argument kaže gdje početi s uklanjanjem elementa, a drugi argument kaže koliko elementa treba ukloniti. Stoga se može ukloniti više od jedog elementa.

```javascript
const gradovi = ["Pula", "Rijeka", "Karlovac", "Split", "Zagreb"];
const indeks = gradovi.indexOf("Karlovac");
if (indeks !== -1) {
  gradovi.splice(indeks, 1);
}
console.log(gradovi); // ['Pula', 'Rijeka', 'Split', 'Zagreb']

const indeks2 = gradovi.indexOf("Rijeka");
if (indeks2 !== -1) {
  gradovi.splice(indeks2, 2);
}
console.log(gradovi); // ['Pula', 'Zagreb']
```

## Vježba 7

1. Definirajte polje `voce` s nekoliko različitih vrsta voća (jabuka, banana, naranča, kivi)
2. Dodajte novu vrstu voća na kraj polja (ananas)
3. Uklonite prvi element iz polja.
4. Promijeni vrijdnost u polju s indeksom 1 na 'mandarina'

Ispišite rezultat nakon svake operacije.

Rezultat:

```plaintext
1. ['jabuka', 'banana', 'naranča', 'kivi']
2. ['jabuka', 'banana', 'naranča', 'kivi', 'ananas']
3. ['banana', 'naranča', 'kivi', 'ananas']
4. ['banana', 'mandarina', 'kivi', 'ananas']
```

## 3.5 Iteriranje kroz polje

Iteriranje kroz polje je ključni koncept u JavaScriptu i omogućuje pristup svakom elementu u polju kako bi izvršili određene operacije. Postoje različite metode za iteriranje kroz polje, od tradicionalne `for` petlje do modernih metoda poput `forEach`, `map` i `filter`.

#### 1. Tradicionalna `for` petlja

`for` petlja je uobičajena metoda iteriranja kroz polje gdje koristimo `i` kao indeks za pristupanje elementima u polju.

```javascript
const slova = ["a", "b", "c"];

for (let i = 0; i < slova.length; i++) {
  console.log("Indeks : " + i, "Vrijednost : " + slova[i]);
}
// Indeks : 0 Vrijednost : a
// Indeks : 1 Vrijednost : b
// Indeks : 2 Vrijednost : c
```

#### 2. `for...in`

`for...in`: Ova petlja uvijek iterira preko indeksa. Dok prolazimo kroz polje, varijabla `i` će držati vrijednost indeksa svakog elementa. Ovo se može koristiti kada su potrebni indeksi elemenata tijekom iteracije.

```javascript
const slova = ["a", "b", "c"];
for (let i in slova) {
  console.log("Indeks: " + i, "Vrijednost: " + slova[i]);
}
// Indeks : 0 Vrijednost : a
// Indeks : 1 Vrijednost : b
// Indeks : 2 Vrijednost : c
```

#### 3. `for...of`

Petlja `for...of`: Ova petlja uvijek iterira kroz vrijednosti polja. Dok prolazimo kroz polje, varijabla `i` će držati vrijednost svakog elementa. Ovo se može koristiti ako su potrebne samo vrijednosti elemenata u polju.

```javascript
const slova = ["a", "b", "c"];
for (let i of slova) {
  console.log(i);
}
// a
// b
// c
```

#### 3. `forEach`

Petlja `forEach`: Ova petlja izvršava povratnu funkciju na svakom elementu dok prolazi kroz polje. Parametri povratne funkcije su `trenutnaVrijednost` (trenutna vrijednost), `indeks` (indeks trenutne vrijednosti), `polje` (polje na kojem se izvodi petlja). Ovo se može koristiti za obavljanje određenih operacija na svakom elementu polja.

```javascript
const slova = ["a", "b", "c"];
slova.forEach(function (trenutnaVrijednost, indeks, polje) {
  console.log(
    "Vrijednost: " + trenutnaVrijednost,
    "Indeks: " + indeks,
    "Cijelo polje: " + polje
  );
});
// Vrijednost: a Indeks: 0 Cijelo polje: a,b,c
// Vrijednost: b Indeks: 1 Cijelo polje: a,b,c
// Vrijednost: c Indeks: 2 Cijelo polje: a,b,c
```

## 3.6 Funkcije nad poljem

### 3.6.1. `map()`

Metoda map() stvara novo polje s rezultatima izvršavanja funkcije nad svakim elementom u polju.

```javascript
const brojevi = [1, 2, 3, 4, 5];

const udvostruceni = brojevi.map(function (broj) {
  return broj * 2;
});
console.log(udvostruceni); // [2, 4, 6, 8, 10]
```

```javascript
const brojevi = [1, 4, 9];

const korijen = brojevi.map((broj) => Math.sqrt(broj));
console.log(korijen); // [1, 2, 3]
```

### 3.6.2. `filter()`

Metoda filter() stvara novo polje koje sadrži samo elemente koji zadovoljavaju određeni uvjet.

```javascript
const brojevi = [1, 2, 3, 4, 5];

const veciOdDva = brojevi.filter(function (broj) {
  return broj > 2;
});

console.log(veciOdDva); // [3, 4, 5]
```

```javascript
const brojevi = [1, 2, 3, 4, 5];

const djeljiviSaDva = brojevi.filter((broj) => broj % 2 == 0);

console.log(djeljiviSaDva); // [2, 4]
```

### 3.6.3. `sort()`

Metoda sort() sortira elemente polja i vraća sortirano polje. Po default-u, sortira elemente kao niz stringova i sortira ih po ASCII vrijednostima.

```javascript
const brojevi = [5, 2, 8, 1, 4];

const sortiraniBrojevi = brojevi.sort();

console.log(sortiraniBrojevi); // [1, 2, 4, 5, 8]
```

Da bi sortirali elemente kao niz brojeva, koristi se callback funkcija koja vraća vrijednost koja se koristi za sortiranje.

```javascript
const brojevi = [5, 2, 8, 1, 4];

const sortiraniBrojevi = brojevi.sort((a, b) => b - a);

console.log(sortiraniBrojevi); // [8, 5, 4, 2, 1]
```

> Ova funkcija za sortiranje oduzima brojeve drugi od prvog, što rezultira sortiranjem u padajućem redoslijedu.

### 3.6.4. `reverse()`

Metoda `reverse()` obrće redoslijed elemenata u polju. Prvi element postaje posljednji, drugi postaje predzadnji, i tako dalje.

```javascript
const gradovi = ["Pula", "Rijeka", "Karlovac", "Split", "Zagreb"];

const obrnutiGradovi = gradovi.reverse();

console.log(obrnutiGradovi); // ['Zagreb', 'Split', 'Karlovac', 'Rijeka', 'Pula']
```

> Metoda `reverse()` mijenja originalno polje i vraća referencu na polje s obrnutim redoslijedom elemenata.

### 3.6.5. `join(separator)`

Metoda `join()` spaja sve elemente polja u jedan string. Možete specificirati separator koji će se koristiti između elemenata. Ako se separator ne navede, koristiti se zarez `,`.

```javascript
const voce = ["jabuka", "banana", "kruška"];

const spojeniPlodovi = voce.join(", ");

console.log(spojeniPlodovi); // "jabuka, banana, kruška"
```

### 3.6.6. `includes(element, odIndeksa)`

Metoda `includes()` provjerava je li polje sadrži određeni element i vraća `true` ako je pronađen, inače vraća `false`. Opcionalni drugi argument, `odIndeksa`, omogućuje početak pretraživanja određenog indeksa u polju.

```javascript
const brojevi = [1, 2, 3, 4, 5];

console.log(brojevi.includes(3)); // true
console.log(brojevi.includes(6)); // false
console.log(brojevi.includes(3, 2)); // true, zato što od indeksa 2 pa nadalje su 3, 4, 5
console.log(brojevi.includes(3, 3)); // false, zato što od indeksa 3 pa nadalje su 4, 5
```

### 3.6.7. `some(callback)`

Metoda `some()` provjerava zadovoljava li barem jedan element u polju uvjet naveden u `callback` funkciji. Ako barem jedan element zadovoljava uvjet, metoda vraća `true`, inače vraća `false`.

```javascript
const brojevi = [1, 2, 3, 4, 5];

const rezultat = brojevi.some((broj) => broj > 3);

console.log(rezultat); // true
```

U ovom primjeru, metoda `some()` provjerava jesu li barem jedan element u polju `brojevi` veći od `3`. Budući da su brojevi `4` i `5` veći od `3`, rezultat je `true`.

### 3.6.8. `every(callback)`

Metoda every() provjerava zadovoljava li svaki element u polju uvjet naveden u `callback` funkciji. Ako svaki element zadovoljava uvjet, metoda vraća `true`, inače vraća `false`.

```javascript
const brojevi = [1, 2, 3, 4, 5];

const rezultat = brojevi.every((broj) => broj > 3);

console.log(rezultat); // false
```

U ovom primjeru, metoda every() provjerava jesu li svi elementi u polju `brojevi` veći od 3. Budući da elementi 3, 4 i 5 u polju nisu veći od 3, rezultat je `false`.

Tablica svih metoda kojih smo prošli:
| Metoda | Objasnjenje | Primjer | Izlaz |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------|
| `length` | Vraća broj elemenata u polju. | `const polje = [1, 2, 3, 4, 5]; console.log(polje.length);` | `5` |
| `indexOf` | Vraća indeks prvog pojavljivanja tražene stavke u polju. Ako stavka nije pronađena, vraća `-1`. | `const polje = ["jabuka", "banana", "kruška"]; console.log(polje.indexOf("banana"));` | `1` |
| `push` | Dodaje jednu ili više stavki na kraj polja i vraća novu duljinu polja. | `const polje = ["jabuka", "banana"]; polje.push("kruška"); console.log(polje);` | `["jabuka", "banana", "kruška"]`|
| `unshift` | Dodaje jednu ili više stavki na početak polja i vraća novu duljinu polja. | `const polje = ["jabuka", "banana"]; polje.unshift("kruška"); console.log(polje);` | `["kruška", "jabuka", "banana"]`|
| `pop` | Uklanja posljednju stavku iz polja i vraća tu stavku. | `const polje = ["jabuka", "banana"]; const zadnjaStavka = polje.pop(); console.log(zadnjaStavka);` | `"banana"` |
| `shift` | Uklanja prvu stavku iz polja i vraća tu stavku. | `const polje = ["jabuka", "banana"]; const prvaStavka = polje.shift(); console.log(prvaStavka);` | `"jabuka"` |
| `splice` | Dodaje ili uklanja stavke iz polja. Prvi argument je indeks početka, drugi argument je broj stavki za uklanjanje, a ostali argumenti su stavke za dodavanje. | `const polje = ["jabuka", "banana", "kruška"]; polje.splice(1, 1); console.log(polje);` | `["jabuka", "kruška"]` |
| `for` | Standardna petlja koja prolazi kroz svaki element polja koristeći indeks. | `for (let i = 0; i < polje.length; i++) { console.log(polje[i]); }` | `"jabuka" "banana" "kruška"` |
| `for...in`| Prolazi kroz indekse polja. | `for (let index in polje) { console.log(index); }` | `"0" "1" "2"` |
| `for...of`| Prolazi kroz vrijednosti polja. | `for (let value of polje) { console.log(value); }` | `"jabuka" "banana" "kruška"` |
| `forEach` | Prolazi kroz svaki element polja i primjenjuje callback funkciju na svaki element. | `polje.forEach(function(stavka) { console.log(stavka); });` | `"jabuka" "banana" "kruška"` |
| `map` | Prolazi kroz svaki element polja i stvara novo polje s rezultatima primjene callback funkcije na svaki element. | `const novoPolje = polje.map(function(stavka) { return stavka.toUpperCase(); }); console.log(novoPolje);`| `["JABUKA", "BANANA", "KRUŠKA"]`|
| `filter` | Stvara novo polje koje sadrži samo elemente koji zadovoljavaju uvjet naveden u callback funkciji. | `const novoPolje = polje.filter(function(stavka) { return stavka.length > 5; }); console.log(novoPolje);`| `["jabuka"]` |
| `sort` | Sortira elemente u polju. | `const sortiranoPolje = polje.sort(); console.log(sortiranoPolje);` | `["banana", "jabuka", "kruška"]`|
| `reverse` | Okreće redoslijed elemenata u polju. | `const okrenutoPolje = polje.reverse(); console.log(okrenutoPolje);` | `["kruška", "banana", "jabuka"]`|
| `join` | Spaja sve elemente polja u jedan string koristeći zarez ili drugi separator. | `const spojeni = polje.join(", "); console.log(spojeni);` | `"jabuka, banana, kruška"` |
| `includes`| Provjerava sadrži li polje određenu stavku i vraća `true` ili `false`. | `const rezultat = polje.includes("banana"); console.log(rezultat);` | `true` |
| `some` | Provjerava zadovoljava li barem jedan element u polju uvjet naveden u callback funkciji. Ako barem jedan element zadovoljava uvjet, vraća `true`, inače `false`.| `const rezultat = polje.some(function(stavka) { return stavka.length > 5; }); console.log(rezultat);` | `true` |
| `every` | Provjerava zadovoljava li svaki element u polju uvjet naveden u callback funkciji. Ako svaki element zadovoljava uvjet, vraća `true`, inače `false`. | `const rezultat = polje.every(function(stavka) { return stavka.length > 5; }); console.log(rezultat);` | `false` |
