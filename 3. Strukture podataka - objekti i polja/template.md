# Programiranje u skriptnim jezicima

**Nositelj**: doc. dr. sc. Nikola Tanković  
**Asistenti**:

- Luka Blašković, univ. bacc. inf.
- Alesandro Žužić, univ. bacc. inf.

**Ustanova**: Sveučilište Jurja Dobrile u Puli, Fakultet informatike u Puli

<img src=https://fipu.unipu.hr/_pub/themes_static/unipu2020/fipu/icons/fipu_hr.png style="width:40%"></img>

# [1] Strukture podataka - objekti i polja

[comment]: <> (Ažurirati sliku - logojs/js0.png)
<img src="https://github.com/lukablaskovic/FIPU-PJS/blob/main/0.%20Template/logojs/js3.png?raw=true" style="width:9%; float:right;"></img>

<p style="float: clear">Uvod od nekoliko rečenica ovdje </p>

## Sadržaj

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Programiranje u skriptnim jezicima](#programiranje-u-skriptnim-jezicima)
- [\[1\] Naslov skripte](#1-naslov-skripte)
  - [Sadržaj](#sadržaj)
- [1 Uvod](#1-uvod)
  - [1.2 Primjer slike](#12-primjer-slike)
  - [1.2 Primjer koda](#12-primjer-koda)
    - [2.2.1 Primjer grananja naslova](#221-primjer-grananja-naslova)
      - [Naslov 4](#naslov-4)
      - [Naslov 4](#naslov-4-1)
      - [Naslov 4](#naslov-4-2)
  - [3. Primjer spoilera](#3-primjer-spoilera)
  - [Vježba 1](#vježba-1)
    - [Tekst zadatka, npr.](#tekst-zadatka-npr)
    - [Screenshot rezultata, npr.](#screenshot-rezultata-npr)
  - [Vježba 2](#vježba-2)
  - [3. Samostalni zadatak za vježbu (po koracima, s kombinacijama koda i teksta, npr.)](#3-samostalni-zadatak-za-vježbu-po-koracima-s-kombinacijama-koda-i-teksta-npr)

<br>

# 1. Uvod u objekte

Objekti su osnovna struktura podataka koji omogućavaju organizaciju i pohranu informacija. Objekt je skup povezanih podataka i/ili funkcionalnosti. Obično se sastoje od nekoliko varijabli i funkcija (koje se nazivaju svojstvima i metodama kada se nalaze unutar objekata). 

Objekti možemo zamisliti kao nekakav auto sa određenim svojstvima i metodama. Svojstva su karakteristike objekta (ime, model, boja, veličina, težina i sl.), dok su metode funkcije povezane s objektom koje obavljaju određene zadatke (npr. paljenje/gašenje auta, davanje gasa, kočenje i sl).

Kao i kod mnogih stvari u JavaScriptu, stvaranje objekta često počinje definiranjem i inicijalizacijom varijable pomoću vitičastih zagradi `{}`:

```javascript
const auto = {};
```
Time smo deklarirali prazan objekt `auto` te pozivom varijable `auto` u konzoli rezultira praznim objektom jednim od sljedećih izgleda:

```javascript
{ } // najčešće
[object Object] // kod JSON objekata u kasnijim lekcijama
```

Sada idemo ponovno deklarirati objekt `auto` sa dodanim varijablama (svojstvima) i funkcijama (metodama):

- `godina_proizvodnje`: (**number**) Svojstvo koje sadrži godinu proizvodnje automobila.
- `marka_i_model`: (**string**) Svojstvo koje sadrži naziv marke i modela automobila.
- `boja`: (**string**) Svojstvo koje sadrži boju automobila.
- `starostAuta`: (**function**) Metoda koja izračunava i vraća starost automobila na temelju trenutne godine i godine proizvodnje.
- `opis`: (**function**) Metoda koja ispisuje opis automobila koji sadrži boju, marku i godinu proizvodnje.

```javascript
const auto = {
  "godina_proizvodnje": 1987,
  marka_i_model: "Toyota Corolla (E90)",
  boja: "Siva",
  starostAuta: function() { 
    return new Date().getFullYear() - this.godina_proizvodnje;
  },
  opis() { 
    console.log(`${this.boja} ${this.marka_i_model} proizvedena ${this.godina_proizvodnje} godine.`);
  },
};
```

Te sada možemo ispisati svojstva i pozvati metode u konzoli:

```javascript
console.log(auto.godina_proizvodnje) // 1987
console.log(auto.marka_i_model) // Toyota Corolla (E90)
console.log(auto["boja"]) // Siva
console.log(`Starost auta: ${auto.starostAuta()}`) // Starost auta: 37
auto.opis() // Siva Toyora Corolla (E90) proizvedena 1987 godine.
```

## 1.1. Osnovna sintaksa objekata

U JavaScriptu, objekt se sastoji od više članova, od kojih svaki ima ime (npr. *godina_proizvodnje* i *boja* u prethodnom primjeru) i vrijednost (npr. *1987* i *"Siva"*). Svaki par `naziv/vrijednost` mora biti odvojen zarezom `,`, a naziv i vrijednost u svakom slučaju odvojeni su dvotočkom `:`. Sintaksa uvijek slijedi ovaj uzorak:

```javascript
const imeObjekta = {
  naziv_1: vrijednost_1,
  naziv_2: vrijednost_2,
  naziv_3: vrijednost_3
};
```

Par `naziv/vrijednost` može se deklarirati i na način da se `naziv` stavi unutar navodnika `""`:

```javascript
const auto = {
  "godina_proizvodnje": 1987,
};
console.log(auto.godina_proizvodnje) // 1987
```

Ovaj način deklariranja također omogućuje dodavanje `naziva` sa **razmacima** što nije preporučljivo jer se tim varijablama može pristupati samo pomoću notacije uglatih zagrada:

```javascript
const auto = {
  "godina proizvodnje": 1987,
};
console.log(auto["godina proizvodnje"]) // 1987
```

Funkcije se u objektima mogu deklarirati na sljedeća dva načina:

```javascript
const imeObjekta = {
  naziv_1: function() {  },
  naziv_2() { } //skraćeni zapis
};
```

Vrijednost naziva objekta može biti gotovo bilo što - u našem objektu `auto` ima broj (**number**), dva teksta (**string**), listu (**array**) i dvije funkcije (**function**).

Prva četiri naziva (*godina_proizvodnje, marka, boja*) su podaci i nazivaju se svojstvima objekta.

Zadnja dva naziva (*starostAuta i opis*) su funkcije koje omogućuju objektu da nešto radi s tim podacima i nazivaju se metode objekta. Ove funkcije, ili metode, su vezane uz objekt i koriste podatke unutar objekta za izvršavanje određenih zadataka.

## 1.2. Dot notacija

U gornjem primjeru objekta *auta*, većini svojstava i metodama objekata pristupali smo koristeći notaciju `točke`. Naziv objekta *auto* djeluje kao **namespace** - mora se unijeti prvo kako bi se pristupilo bilo čemu unutar objekta. Zatim se piše točka `.` te naziv kojem želite pristupiti što može biti naziv jednostavnog svojstva ili poziv jedne od metoda objekta:

```javascript
console.log(auto.boja) // Siva
auto.opis() // Siva Toyora Corolla (E90) proizvedena 1987 godine.
```

## 1.3. Notacija uglatih zagrada
U gornjem primjeru objekta *auta*, jednom smo svojstvu pristupali koristeći notaciju `uglatih zagrada` što je alternativni način pristupanju svojstvima objekta umjesto korištenja dot notacije. Isto se naziv objekta *auto* koristi kao **namespace** da bi se pristupilo svojstvima objekta. Zatim se stavljaju uglate zagrade sa nazivom svojstva kojem pristupamo `["naziv"]`:

```javascript
console.log(auto["godina_proizvodnje"]) // Siva
```

### 1.3 Objekti unutar objekta

Objekti u JavaScriptu mogu sadržavati druge **objekte** kao svoja **svojstva**. Ovo nam omogućava organizaciju informacija na *hijerarhijski* način, što je korisno kada imamo složene strukture podataka.

Primjerice, možemo imati objekt koji predstavlja `restoran`, a unutar njega imamo objekte za `adresu` i `kontakt`:


```javascript
const restoran = {
  naziv: "Laguna",
  kontakt: {
    telefon: "01 2345 678",
    email: "info@laguna.com"
  },
  adresa: {
    ulica: "Ulica Augusta Cesarca 3",
    grad: "Zagreb",
    postanski_broj: "10000"
  }
};

console.log(restoran.naziv); // Laguna

console.log(restoran.kontakt.telefon); // 01 2345 678
console.log(restoran.kontakt.email); // info@laguna.com

console.log(restoran.adresa.ulica); // Ulica Augusta Cesarca 3
console.log(restoran.adresa["grad"]); // Zagreb
console.log(restoran["adresa"]["postanski_broj"]); // 10000
```

## 1.4 Što je to `this`?

`This` je ključna riječ u JavaScriptu koja se odnosi na trenutni objekt unutar kojeg se piše kod. Na primjeru `auto`, kada koristimo `this` unutar metode `starostAuta()`, `this` se odnosi na trenutni objekt u kojem je metoda definirana, pristupamo svojstvu `godina_proizvodnje`.

```javascript
const auto = {
  "godina_proizvodnje": 1987,
  starostAuta() { 
    return new Date().getFullYear() - this.godina_proizvodnje;
  },
};

console.log(auto.starostAuta()); // 137
```

Zašto koristimo `this` umjesto naziva konkretnog objekta `person`? Jer omogućava da istu definiciju metode koristimo za sve objekte koje stvaramo.

```javascript
const osoba1 = {
  ime: "Marko",
  predstaviSe() {
    console.log(`Bok! Ja sam ${this.ime}.`);
  },
};

const osoba2 = {
  ime: "Ana",
  predstaviSe() {
    console.log(`Bok! Ja sam ${this.ime}.`);
  },
};
```

U ovom slučaju, `osoba1.predstaviSe()` će ispisati *"Bok! Ja sam Marko.";* `osoba2.predstaviSe()` će pak ispisati *"Bok! Ja sam Ana."*, iako je kôd metode identičan u oba slučaja. Ovo nije posebno korisno kada ručno pišemo objektne literale, ali će postati bitno kada počnemo koristiti konstruktore za stvaranje više objekata iz jedne definicije objekta.

## Vježba 1

Napravi novi objekt pod nazivom `osoba` koji će sadržavati informacije o osobi kao što su `ime`, `prezime`, `godina rođenja` i funkciju `opis` koja će ispisati informacije o osobi.

- Deklariraj novi objekt `osoba`
- Dodaj svojstva `ime`, `prezime`, `godina_rodjenja`.
- Dodaj metodu `pozdrav` koja će ispisati informacije osobe koristeći ime i prezime te izračunat broj godina osobe.

Ispiši podatke o osobi pozivajući sva **svojstva** objekta koristeći naizmjenično dot notaciju i notaciju uglatih zagrada te pozovi **metodu** *opis*.

Rezultat:

```javascript
Marko
Marić
1995
Pozdrav! Moje ime je Marko Marić i imam 29 godina.
```

## 1.5 Ažuriranje objekata

Do sada smo samo gledali kako dohvatiti *nazive* objekta - također možemo postaviti (*ažurirati*) vrijednost naziva objekta deklarirajući naziv koji želimo postaviti (koristeći dot ili notaciju uglatih zagrada):

```javascript
const grad = {
  ime: "Pula",
  velicina: 51.65, // km^2
  broj_stanovnika: 56540
};

grad.velicina = 50;
grad["broj_stanovnika"] = 57200;

console.log(grad.velicina); // 50
console.log(grad.broj_stanovnika); // 57200
```

Postavljanje naziva ne znači samo ažuriranje vrijednosti postojećih svojstava i metoda; također se mogu stvoriti potpuno nova svojstva i metode:

```javascript
grad.postanski_broj = 52100;
grad.gustoca_naseljenosti = function() {
  return this.broj_stanovnika / this.velicina;
};
console.log(grad.postanski_broj); // 52100
console.log(grad.gustoca_naseljenosti()); // 1144
```

Jedna korisna karakteristika notacije uglatih zagrada je da omogućava *dinamičko* **pristupanje** i **postavljanje** svojstvima. Recimo da želimo korisnicima omogućiti spremanje prilagođenih tipova vrijednosti u svojim podacima, upisivanjem naziva i vrijednosti u dva tekstualna ulaza:

```javascript
const osoba = {
  ime: "Ana",
  godina_rodjenja: 1990,
  mjesto_rodjenja: "Zagreb",
}

const naziv = "visina";
const vrijednost = 164;

osoba[naziv] = vrijednost;
console.log(osoba[naziv]); // 164
```

Dodavanje svojstva u objekt koristeći gore navedenu metodu nije moguće s dot notacijom, koja može prihvatiti samo doslovno ime svojstva, a ne vrijednost varijable koja pokazuje na ime.

## 1.6 Konstruktori

Ručno pisanje objekata je u redu kada treba stvoriti samo jedan objekt, ali ako treba stvoriti više od jednog onda je taj način neučinkovit. Moramo ponovno pisati isti kôd za svaki objekt koji stvaramo, a ako želimo promijeniti neka svojstva objekta - tada moramo ručno ažurirati svaki objekt.

Želimo definirati `oblik` objekta - *skup metoda i svojstava* - i zatim stvoriti koliko god želimo objekata, samo ažurirajući vrijednosti svojstava koje su različite.

Primjer funkcije koja stvara osobe:

```javascript
function stvoriOsobu(ime) {
  const obj = {};
  obj.ime = ime;
  obj.predstaviSe = function () {
    console.log(`Bok! Ja sam ${this.ime}.`);
  };
  return obj;
}
```

Ova funkcija stvara i vraća novi objekt svaki put kada je pozovemo. Objekt će imati dva člana:

- svojstvo `ime`
- metodu `predstaviSe()`

Primijetite da funkcija `stvoriOsobu()` uzima parametar `ime` kako bi postavila vrijednost svojstva `ime`, ali vrijednost metode `predstaviSe()` bit će ista za sve objekte koji su stvoreni korištenjem ove funkcije.

Sada možemo stvoriti koliko god objekata želimo, koristeći istu definiciju:

```javascript
const ana = stvoriOsobu("Ana");
const marko = stvoriOsobu("Marko");

ana.predstaviSe(); // "Bok! Ja sam Ana."
marko.predstaviSe(); // "Bok! Ja sam Marko."
```

Ovo radi dobro, ali može bolje: zato što moramo stvoriti prazan objekt, inicijalizirati ga i vratiti. Bolji način je koristiti `konstruktor`, a `konstruktor` je samo funkcija koja se poziva pomoću ključne riječi `new`. Kada pozovete `konstruktor`, on će:

- stvoriti `novi objekt`
- povezati `this` s `novim objektom`, tako da možete koristiti `this` u kôdu svog `konstruktora`
- izvršiti kôd u `konstruktoru`
- vratiti `novi objekt`

Konstruktori, po konvenciji, se pišu velikim početnim slovom i nazivaju se prema vrsti objekta koje stvaraju. Dakle, prijašnju funkciju možemo napisati na sljedeći način:

```javascript
function Osoba(ime) {
  this.ime = ime;
  this.predstaviSe = function () {
    console.log(`Bok! Ja sam ${this.ime}.`);
  };
}
```

Da bismo pozvali Osoba() kao konstruktor, koristimo new:

```javascript
const ana = new Osoba("Ana");
const marko = new Osoba("Marko");

ana.predstaviSe(); // "Bok! Ja sam Ana."
marko.predstaviSe(); // "Bok! Ja sam Marko."
```

Na ovaj način definiramo i stvaramo nove objekte koristeći konstruktor.

## Vježba 2

Definiraj konstruktor `Automobil`, koji će predstavljati objekt automobila. Svaki automobil će imati određena svojstva poput marke, modela, godine proizvodnje, boje i cijene. Osim toga, trebat će dodati metode za ispis detalja i ažuriranje cijene automobila.

1. Definirajte konstruktor `Automobil` koji će imati sljedeća svojstva:
   - `marka`: Naziv marke automobila (**string**).
   - `model`: Model automobila (**string**).
   - `godinaProizvodnje`: Godina proizvodnje automobila (**number**).
   - `boja`: Boja automobila (**string**).
   - `cijena`: Cijena automobila (**number**).

2. Dodajte metodu `azurirajCijenu(novaCijena)` u konstruktor `Automobil` koja će omogućiti promjenu cijene automobila na temelju novog iznosa.

3. Dodajte metodu `detalji()` u konstruktor `Automobil` koja će ispisati detalje automobila (marka, model, godina proizvodnje i boja).

4. Stvorite dva objekta tipa `Automobil` pomoću konstruktora

5. Provjerite funkcionalnost metode `azurirajCijenu()` na oba automobila.

Rezultat:

```javascript
Marka: Toyota
Model: Corolla
Godina proizvodnje: 2018
Boja: crvena

Marka: Volkswagen
Model: Golf
Godina proizvodnje: 2020
Boja: plava

Nakon ažuriranja cijene:
Nova cijena Toyote: 16000
Nova cijena Volkswagena: 22000
```

# 2. Standardni ugrađeni objekti

Standardni ugrađeni objekti u JavaScriptu su preddefinirane objekti koji pružaju različite korisne metode i funkcionalnosti za manipulaciju podacima. Ovi ugrađeni objekti omogućuju rad s različitim vrstama podataka, rad s vremenom, matematičke operacije, rad s nizovima i drugo.

## 2.1 **String**

Objekt koji predstavlja tekstualne podatke. Nudi razne metode za manipulaciju i analizu nizova znakova, poput traženja podnizova, zamjene znakova i pretvaranja teksta u velika ili mala slova.

| Metoda          | Objašnjenje                                         | Primjer                     | Izlaz                 |
|-----------------|-----------------------------------------------------|-----------------------------|-----------------------|
| `charAt()`      | Vraća znak na određenom indeksu u nizu znakova      | `'hello'.charAt(1)`         | `'e'`                 |
| `concat()`      | Spaja dva ili više nizova znakova i vraća novi niz  | `'hello'.concat(' world')`  | `'hello world'`       |
| `indexOf()`     | Vraća indeks prvog pojavljivanja podniza u nizu     | `'hello'.indexOf('lo')`     | `3`                   |
| `lastIndexOf()` | Vraća indeks zadnjeg pojavljivanja podniza u nizu   | `'hello'.lastIndexOf('l')`  | `3`                   |
| `toUpperCase()` | Pretvara niz znakova u velika slova                 | `'hello'.toUpperCase()`     | `'HELLO'`             |
| `toLowerCase()` | Pretvara niz znakova u mala slova                   | `'HELLO'.toLowerCase()`     | `'hello'`             |
| `slice()`       | Izdvaja dio niza znakova i vraća novi niz           | `'hello'.slice(1, 3)`       | `'el'`                |
| `substring()`   | Vraća dio niza između dva indeksa                   | `'hello'.substring(1, 3)`   | `'el'`                |
| `replace()`     | Traži podniz u nizu i zamjenjuje ga drugim nizom    | `'hello'.replace('e', 'a')` | `'hallo'`             |
| `split()`       | Razdvaja niz na podnizove i vraća ih kao niz        | `'hello world'.split(' ')`  | `['hello', 'world']`  |
| `trim()`        | Uklanja razmake s početka i kraja niza              | `'  hello  '.trim()`        | `'hello'`             |
| `match()`       | Pronalazi podudaranja uz pomoć regularnih izraza    | `'hello'.match(/l+/g)`      | `['ll']`              |
| `repeat()`      | Ponavlja niz određeni broj puta                     | `'hello'.repeat(3)`         | `'hellohellohello'`   |
| `startsWith()`  | Provjerava je li niz počinje određenim podnizom     | `'hello'.startsWith('he')`  | `true`                |
| `endsWith()`    | Provjerava je li niz završava određenim podnizom    | `'hello'.endsWith('lo')`    | `true`                |
| `includes()`    | Provjerava postoji li određeni podniz u nizu        | `'hello'.includes('ll')`    | `true`                |
| `padStart()`    | Dodaje razmake na početak niza do određene duljine  | `'5'.padStart(2, '0')`      | `'05'`                |
| `padEnd()`      | Dodaje razmake na kraj niza do određene duljine     | `'5'.padEnd(2, '0')`        | `'50'`                |
| `repeat()`      | Ponavlja niz određeni broj puta                     | `'hello'.repeat(3)`         | `'hellohellohello'`   |

## Vježba 3

1. Napiši funkciju `brojSamoglasnikaISuglasnika` koja prima ulazni string i vraća objekt s dva svojstva: `samoglasnici` i `suglasnici`. 
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

## 2.2 **Number**

Objekt koji predstavlja numeričke podatke. Nudi razne metode za rad s numeričkim vrijednostima, poput zaokruživanja, konverzije u druge formate i provjere svojstava (npr. provjera je li broj konačan ili beskonačan).

| Metoda          | Objasnjenje                                         | Primjer                       | Izlaz     |
|-----------------|-----------------------------------------------------|-------------------------------|-----------|
| `toFixed()`     | Zaokružuje broj na zadan broj decimalnih mjesta.    | `(5.56789).toFixed(2)`        | `"5.57"`  |
| `toPrecision()` | Formatira broj u zadanom opsegu značajnih brojeva.  | `(9876.54321).toPrecision(4)` | `"9877"`  |
| `toString()`    | Prikazuje broj kao string.                          | `(123).toString()`            | `"123"`   |
| `parseInt()`    | Parsira string i vraća cjelobrojni ekvivalent.      | `Number.parseInt("10.456")`   | `10`      |
| `parseFloat()`  | Parsira string i vraća broj s pomičnim zarezom.     | `Number.parseFloat("10.456")` | `10.456`  |
| `isInteger()`   | Provjerava je li vrijednost integer.                | `Number.isInteger(5.2)`       | `false`   |
| `isNaN()`       | Provjerava je li vrijednost NaN (Not a Number).     | `Number.isNaN("string")`      | `true`    |

## Vježba 4

1. Napiši funkciju `zaokruziBroj(broj, decimalnaMjesta)` koja prima broj i decimalni broj mjesta za zaokruživanje te vraća zaokruženi broj na točno određenom decimalnom mjestu.

   Primjer:
   ```javascript
   console.log(zaokruziBroj(5.56789, 2)); // 5.57
   ```

2. Napiši funkciju `provjeriKonačnost(broj)` koja prima brojeve i provijerava da li je konačan ili ne, ako nije konačan ispisuje riječ `"Beskonačan"`, ako je konačan provjerava da li je integer, ako nije integer formatira ga u integer koristeći `toFixed(0)` i ispisuje `broj prije -> broj poslije`, ako je integer ispisuje `Prirodan broj`

   Primjer:
   ```javascript
   console.log(provjeriKonačnost(10)); // Prirodan broj
   console.log(provjeriKonačnost(3.14159265359)); // 3.14159265359 -> 3
   console.log(provjeriKonačnost(Infinity)); // Beskonačan
   ```

Ovi zadaci demonstriraju upotrebu različitih metoda za rad s brojevima i omogućuju vježbu u manipulaciji i provjeri brojeva.

## 2.3 **Math**

Objekt koji pruža razne matematičke funkcije i konstante. Ovaj objekt omogućuje izvođenje raznih matematičkih operacija, poput računanja trigonometrijskih funkcija, logaritama, eksponencijalnih funkcija itd.

## 2.4 **Date**

Objekt koji predstavlja datum i vrijeme. Omogućuje manipulaciju datumima i vremenima, računanje razlika između datuma, formatiranje datuma za prikaz itd.