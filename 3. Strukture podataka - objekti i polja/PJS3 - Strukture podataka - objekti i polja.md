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

Strukture podataka su način organiziranja i pohranjivanja podataka u programiranju. U JavaScriptu, objekti i polja su osnovni tipovi struktura podataka. **Objekti** omogućuju pohranu podataka u obliku parova "naziv-vrijednost", dok **polja** predstavljaju kolekciju elemenata organiziranih u niz. Kombinacija ovih struktura omogućuje efikasno manipuliranje i pristup podacima u JavaScriptu.

## Sadržaj

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Programiranje u skriptnim jezicima](#programiranje-u-skriptnim-jezicima)
- [\[1\] Strukture podataka - objekti i polja](#3-strukture-podataka---objekti-i-polja)
  - [Sadržaj](#sadržaj)
- [1 Uvod u objekte](#1-uvod-u-objekte)
  - [1.1 Osnovna sintaksa objekata](#11-osnovna-sintaksa-objekata)

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

### 1.4 Objekti unutar objekta

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

## 1.5 Što je to `this`?

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

## 1.6 Ažuriranje objekata

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

## 1.7 Konstruktori

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

| Metoda           | Opis                                                   | Rezultat          |
|------------------|--------------------------------------------------------|-------------------|
| `Math.PI`        | Vraća vrijednost konstante `π` (pi)                    | 3.141592653589793 |
| `Math.E`         | Vraća vrijednost konstante `e` (Eulerova konstanta)    | 2.718281828459045 |
| `Math.SQRT2`     | Vraća vrijednost korijena iz `2`                       | 1.4142135623730951|
| `Math.LN2`       | Vraća vrijednost prirodnog `logaritma` broja `2`       | 0.6931471805599453|
| `Math.LN10`      | Vraća vrijednost prirodnog `logaritma` broja `10`      | 2.302585092994046 |

| Metoda           | Objasnjenje                                      | Primjer                 | Izlaz                        |
|------------------|--------------------------------------------------|-------------------------|------------------------------|
| `Math.abs(x)`    | Vraća apsolutnu vrijednost broja `x`.            | `Math.abs(-4.5)`        | `4.5`                        |
| `Math.ceil(x)`   | Zaokružuje broj `x` na najmanji veći cijeli broj.| `Math.ceil(4.3)`        | `5`                          |
| `Math.floor(x)`  | Zaokružuje broj `x` na najveći manji cijeli broj.| `Math.floor(4.9)`       | `4`                          |
| `Math.max(x, y)` | Vraća veći od dva broja `x` i `y`.               | `Math.max(5, 10)`       | `10`                         |
| `Math.min(x, y)` | Vraća manji od dva broja `x` i `y`.              | `Math.min(5, 10)`       | `5`                          |
| `Math.pow(x, y)` | Vraća rezultat `x` na potenciju `y`.             | `Math.pow(2, 3)`        | `8`                          |
| `Math.sqrt(x)`   | Vraća kvadratni korijen broja `x`.               | `Math.sqrt(9)`          | `3`                          |
| `Math.round(x)`  | Zaokružuje broj `x` na najbliži cijeli broj.     | `Math.round(4.3)`       | `4`                          |
| `Math.random()`  | Generira pseudoslučajan broj između 0 i 1.       | `Math.random()`         | (slučajni broj između 0 i 1) |
| `Math.log(x)`    | Vraća prirodni logaritam broja `x`.              | `Math.log(Math.E)`      | `1`                          |
| `Math.exp(x)`    | Vraća e (Eulerov broj) na potenciju `x`.         | `Math.exp(1)`           | `2.718281828459045`          |
| `Math.sin(x)`    | Vraća sinus broja `x` (u radijanima).            | `Math.sin(Math.PI / 2)` | `1`                          |
| `Math.cos(x)`    | Vraća kosinus broja `x` (u radijanima).          | `Math.cos(Math.PI)`     | `-1`                         |
| `Math.tan(x)`    | Vraća tangens broja `x` (u radijanima).          | `Math.tan(Math.PI / 4)` | `1`                          |

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

| Način Deklaracije               | Objasnjenje                                                           | Primjer                           |
|---------------------------------|-----------------------------------------------------------------------|-----------------------------------|
| `new Date()`                    | Stvara datum na temelju trenutnog vremena i datuma.                   | `new Date()`                      |
| `new Date(godina, mjesec, dan)` | Stvara datum s određenom godinom, mjesecom i danom.                   | `new Date(2024, 2, 20)`           |
| `new Date("datumString")`       | Stvara datum iz stringa koji predstavlja datum.                       | `new Date("2024-02-20")`          |
| `new Date(unixVrijeme)`         | Stvara datum iz UNIX vremena (broj milisekundi od 1. siječnja 1970.). | `new Date(1708436235000)`         |
| `new Date(ISO_string)`          | Stvara datum iz stringa u ISO formatu (ISO 8601).                     | `new Date("2024-02-19T00:00:00Z")`|

  ```javascript
  const datum = new Date(); //Tue Feb 20 2024 09:51:54 GMT+0100 (Central European Standard Time)
  const datum2 = new Date(2024, 1, 20); // Tue Feb 20 2024 00:00:00 GMT+0100 (Central European Standard Time)
  const datum3 = new Date("2024-02-20"); // Tue Feb 20 2024 01:00:00 GMT+0100 (Central European Standard Time)
  const datum4 = new Date(1708436235000); // Tue Jan 20 1970 19:33:56 GMT+0100 (Central European Standard Time)
  const datum5 = new Date("2024-02-19T14:37:15Z"); // Mon Feb 19 2024 15:37:15 GMT+0100 (Central European Standard Time)
  ```

Osnovne funkcije datuma:

| Metoda                  | Objasnjenje                                                                       | Primjer                              | Izlaz                                                                 |
|-------------------------|-----------------------------------------------------------------------------------|--------------------------------------|-----------------------------------------------------------------------|
| `getDate()`             | Vraća dan mjeseca za određeni datum.                                              | `datum.getDate();`                   | `20`                                                                  |
| `getDay()`              | Vraća dan u tjednu za određeni datum (0 za nedjelju, 1 za ponedjeljak, itd.).     | `datum.getDay();`                    | `2`                                                                   |
| `getFullYear()`         | Vraća godinu za određeni datum.                                                   | `datum.getFullYear();`               | `2024`                                                                |
| `getMonth()`            | Vraća mjesec za određeni datum (0 za januar, 1 za februar, itd.).                 | `datum.getMonth();`                  | `1`                                                                   |
| `getHours()`            | Vraća sate za određeni datum.                                                     | `datum.getHours();`                  | `14`                                                                  |
| `getMinutes()`          | Vraća minute za određeni datum.                                                   | `datum.getMinutes();`                | `37`                                                                  |
| `getSeconds()`          | Vraća sekunde za određeni datum.                                                  | `datum.getSeconds();`                | `15`                                                                  |
| `getTime()`             | Vraća broj milisekundi od 1. januara 1970.                                        | `datum.getTime();`                   | `1645265835123`                                                       |
| `toLocaleDateString()`  | Vraća datum u lokalnom formatu.                                                   | `datum.toLocaleDateString();`        | `'20/02/2024'`                                                        |
| `toLocaleTimeString()`  | Vraća vrijeme u lokalnom formatu.                                                 | `datum.toLocaleTimeString();`        | `"14:37:15"`                                                          |
| `toLocaleString()`      | Vraća datum i vrijeme u lokalnom formatu.                                         | `datum.toLocaleString();`            | `'20/02/2024, 14:37:15'`                                              |
| `toString()`            | Vraća datum i vrijeme kao string.                                                 | `datum.toString();`                  | `"Tue Feb 20 2024 14:37:15 GMT+0100 (Central European Standard Time)"`|
| `Date.now()`            | Vraća trenutno vrijeme u milisekundama od 1. januara 1970.                        | `Date.now();`                        | `1645265835123`                                                       |
| `Date.parse()`          | Parsira string reprezentaciju datuma i vraća broj milisekundi od 1. januara 1970. | `Date.parse("2024-02-20T14:37:15Z");`| `1645265835000` (ovisno o vremenskoj zoni, može se razlikovati)       |

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
const dan = new Date('2024-02-19T14:30:00');
console.log(provjeriDanUTjednu(dan)); // "Ponedjeljak"
const dan2 = new Date('2024-02-18T12:15:00');
console.log(provjeriDanUTjednu(dan2)); // "Nedjelja"
  ```

### Zadatak 2: Razlika u Vremenu

Napišite funkciju `razlikaUVremenu(datum1, datum2)` koja prima dva datuma i vraća razliku u vremenu između ta dva datuma u satima, minutama i sekundama. Ispiši rezultat u formatu `"[sati] sati, [minute] minuta, [sekunde] sekundi"`.

Rezultat:
  ```javascript
  const datum1 = new Date('2024-02-19T14:30:10');
  const datum2 = new Date('2024-02-18T12:15:35');
  console.log(razlikaUVremenu(datum1, datum2)); // "26 sati, 14 minuta, 45 sekundi"
  ```

# 3. Uvod u polja

Polja u JavaScriptu omogućuju pohranjivanje kolekcije više elementa pod jednim imenom varijable i imaju članove za izvođenje uobičajenih operacija s poljima.

- Polja se općenito opisuju kao *list-like objects*; to su jednostavno pojedinačni objekti koji sadrže više vrijednosti pohranjenih u listi.

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
const razlicitiTipoviPodataka = ["stablo", { ime: 'Marko', prezime: 'marić' }, [0, 1, 2]];
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

console.log(polje[2][2]) // 2

// ist kao da pišemo:

const element2 = polje[2]
console.log(element2[2]) // 2
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
const slova = ["a","b","c"];

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
slova.forEach(function(trenutnaVrijednost, indeks, polje){
    console.log("Vrijednost: " + trenutnaVrijednost, "Indeks: " + indeks, "Cijelo polje: " + polje);
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

const udvostruceni = brojevi.map(function(broj) {
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

const veciOdDva = brojevi.filter(function(broj) {
  return broj > 2;
});

console.log(veciOdDva); // [3, 4, 5]
```

```javascript
const brojevi = [1, 2, 3, 4, 5];

const djeljiviSaDva = brojevi.filter(broj => broj % 2 == 0);

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

const rezultat = brojevi.some(broj => broj > 3);

console.log(rezultat); // true
```

U ovom primjeru, metoda `some()` provjerava jesu li barem jedan element u polju `brojevi` veći od `3`. Budući da su brojevi `4` i `5` veći od `3`, rezultat je `true`.

### 3.6.8. `every(callback)`

Metoda every() provjerava zadovoljava li svaki element u polju uvjet naveden u `callback` funkciji. Ako svaki element zadovoljava uvjet, metoda vraća `true`, inače vraća `false`.

```javascript
const brojevi = [1, 2, 3, 4, 5];

const rezultat = brojevi.every(broj => broj > 3);

console.log(rezultat); // false
```

U ovom primjeru, metoda every() provjerava jesu li svi elementi u polju `brojevi` veći od 3. Budući da elementi 3, 4 i 5 u polju nisu veći od 3, rezultat je `false`.

Tablica svih metoda kojih smo prošli:
| Metoda    | Objasnjenje                                                                                                                                                     | Primjer                                                                                                  | Izlaz                           |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------|
| `length`  | Vraća broj elemenata u polju.                                                                                                                                   | `const polje = [1, 2, 3, 4, 5]; console.log(polje.length);`                                              | `5`                             |
| `indexOf` | Vraća indeks prvog pojavljivanja tražene stavke u polju. Ako stavka nije pronađena, vraća `-1`.                                                                 | `const polje = ["jabuka", "banana", "kruška"]; console.log(polje.indexOf("banana"));`                    | `1`                             |
| `push`    | Dodaje jednu ili više stavki na kraj polja i vraća novu duljinu polja.                                                                                          | `const polje = ["jabuka", "banana"]; polje.push("kruška"); console.log(polje);`                          | `["jabuka", "banana", "kruška"]`|
| `unshift` | Dodaje jednu ili više stavki na početak polja i vraća novu duljinu polja.                                                                                       | `const polje = ["jabuka", "banana"]; polje.unshift("kruška"); console.log(polje);`                       | `["kruška", "jabuka", "banana"]`|
| `pop`     | Uklanja posljednju stavku iz polja i vraća tu stavku.                                                                                                           | `const polje = ["jabuka", "banana"]; const zadnjaStavka = polje.pop(); console.log(zadnjaStavka);`       | `"banana"`                      |
| `shift`   | Uklanja prvu stavku iz polja i vraća tu stavku.                                                                                                                 | `const polje = ["jabuka", "banana"]; const prvaStavka = polje.shift(); console.log(prvaStavka);`         | `"jabuka"`                      |
| `splice`  | Dodaje ili uklanja stavke iz polja. Prvi argument je indeks početka, drugi argument je broj stavki za uklanjanje, a ostali argumenti su stavke za dodavanje.    | `const polje = ["jabuka", "banana", "kruška"]; polje.splice(1, 1); console.log(polje);`                  | `["jabuka", "kruška"]`          |
| `for`     | Standardna petlja koja prolazi kroz svaki element polja koristeći indeks.                                                                                       | `for (let i = 0; i < polje.length; i++) { console.log(polje[i]); }`                                      | `"jabuka" "banana" "kruška"`    |
| `for...in`| Prolazi kroz indekse polja.                                                                                                                                     | `for (let index in polje) { console.log(index); }`                                                       | `"0" "1" "2"`                   |
| `for...of`| Prolazi kroz vrijednosti polja.                                                                                                                                 | `for (let value of polje) { console.log(value); }`                                                       | `"jabuka" "banana" "kruška"`    |
| `forEach` | Prolazi kroz svaki element polja i primjenjuje callback funkciju na svaki element.                                                                              | `polje.forEach(function(stavka) { console.log(stavka); });`                                              | `"jabuka" "banana" "kruška"`    |
| `map`     | Prolazi kroz svaki element polja i stvara novo polje s rezultatima primjene callback funkcije na svaki element.                                                 | `const novoPolje = polje.map(function(stavka) { return stavka.toUpperCase(); }); console.log(novoPolje);`| `["JABUKA", "BANANA", "KRUŠKA"]`|
| `filter`  | Stvara novo polje koje sadrži samo elemente koji zadovoljavaju uvjet naveden u callback funkciji.                                                               | `const novoPolje = polje.filter(function(stavka) { return stavka.length > 5; }); console.log(novoPolje);`| `["jabuka"]`                    |
| `sort`    | Sortira elemente u polju.                                                                                                                                       | `const sortiranoPolje = polje.sort(); console.log(sortiranoPolje);`                                      | `["banana", "jabuka", "kruška"]`|
| `reverse` | Okreće redoslijed elemenata u polju.                                                                                                                            | `const okrenutoPolje = polje.reverse(); console.log(okrenutoPolje);`                                     | `["kruška", "banana", "jabuka"]`|
| `join`    | Spaja sve elemente polja u jedan string koristeći zarez ili drugi separator.                                                                                    | `const spojeni = polje.join(", "); console.log(spojeni);`                                                | `"jabuka, banana, kruška"`      |
| `includes`| Provjerava sadrži li polje određenu stavku i vraća `true` ili `false`.                                                                                          | `const rezultat = polje.includes("banana"); console.log(rezultat);`                                      | `true`                          |
| `some`    | Provjerava zadovoljava li barem jedan element u polju uvjet naveden u callback funkciji. Ako barem jedan element zadovoljava uvjet, vraća `true`, inače `false`.| `const rezultat = polje.some(function(stavka) { return stavka.length > 5; }); console.log(rezultat);`    | `true`                          |
| `every`   | Provjerava zadovoljava li svaki element u polju uvjet naveden u callback funkciji. Ako svaki element zadovoljava uvjet, vraća `true`, inače `false`.            | `const rezultat = polje.every(function(stavka) { return stavka.length > 5; }); console.log(rezultat);`   | `false`                         |