# Programiranje u skriptnim jezicima (PJS)

**Nositelj**: doc. dr. sc. Nikola Tanković  
**Asistenti**:

- Luka Blašković, univ. bacc. inf.
- Alesandro Žužić, univ. bacc. inf.

**Ustanova**: Sveučilište Jurja Dobrile u Puli, Fakultet informatike u Puli

<img src="https://fipu.unipu.hr/_pub/themes_static/unipu2020/fipu/icons/fipu_hr.png" style="width:40%"></img>

# [4] Ugniježđene strukture i Napredne funkcije

[comment]: <> (Ažurirati sliku - logojs/js0.png)
<img src="https://github.com/lukablaskovic/FIPU-PJS/blob/main/0.%20Template/logojs/js4.png?raw=true" style="width:9%; float:right;"></img>

<p style="float: clear">"Baratanje" ugniježđenim strukturama (<b><i>eng. nested structures</i></b>) je jedna od ključnih vještina u programiranju. Bilo to u obliku ugniježđenih petlji, objekata, funkcija, ili polja. Dohvat podataka s različitih API-eva, obrada podataka, ili pisanje algoritama, sve to zahtijeva dobro poznavanje ugniježđenih struktura. U ovoj skripti naučit ćete pisati ugniježđene strukture u JavaScriptu i naučiti koristiti napredne funkcije i operatore za jednostavniji rad s njima.</p>

<br>

## Sadržaj

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Programiranje u skriptnim jezicima (PJS)](#programiranje-u-skriptnim-jezicima-pjs)
- [\[4\] Ugniježđene strukture i Napredne funkcije](#4-ugniježđene-strukture-i-napredne-funkcije)
  - [Sadržaj](#sadržaj)
- [1. Uvod u ugniježđene strukture](#1-uvod-u-ugniježđene-strukture)
- [2. Ugniježđene strukture](#2-ugniježđene-strukture)
  - [2.1 Objekti unutar objekata](#21-objekti-unutar-objekata)
    - [2.1.1 Manipulacije podataka unutar ugniježđenih objekata](#211-manipulacije-podataka-unutar-ugniježđenih-objekata)
      - [Izmjena podataka unutar ugniježđenih objekata](#izmjena-podataka-unutar-ugniježđenih-objekata)
      - [Dodavanje novih podataka unutar ugniježđenih objekata](#dodavanje-novih-podataka-unutar-ugniježđenih-objekata)
      - [Brisanje podataka unutar ugniježđenih objekata](#brisanje-podataka-unutar-ugniježđenih-objekata)
  - [2.2 Polja unutar objekata](#22-polja-unutar-objekata)
    - [2.2.1 Iteracija kroz polje unutar objekata](#221-iteracija-kroz-polje-unutar-objekata)
  - [2.3 Objekti unutar polja](#23-objekti-unutar-polja)
    - [Vježba 1](#vježba-1)
    - [Vježba 2](#vježba-2)
  - [2.4 Polja unutar polja](#24-polja-unutar-polja)
    - [2.4.1 Iteracije kroz više dimenzija](#241-iteracije-kroz-više-dimenzija)
    - [2.4.2 Stvaranje višedimenzionalnih polja pomoću `Array` konstruktora](#242-stvaranje-višedimenzionalnih-polja-pomoću-array-konstruktora)
    - [Vježba 3](#vježba-3)
  - [2.5 Sažetak ugiježđenih struktura](#25-sažetak-ugiježđenih-struktura)
    - [Vježba 4](#vježba-4)
- [Samostalni zadatak za vježbu 6](#samostalni-zadatak-za-vježbu-6)
- [3. Napredne funkcije](#3-napredne-funkcije)
  - [3.1 Callback funkcije](#31-callback-funkcije)
    - [3.1.1 Primjer callback funkcije](#311-primjer-callback-funkcije)
    - [3.1.2 Osnovna podjela `callback` funkcija](#312-osnovna-podjela-callback-funkcija)
      - [1. Globalno definirana `callback` funkcija](#1-globalno-definirana-callback-funkcija)
      - [2. Anonimna `callback` funkcija](#2-anonimna-callback-funkcija)
  - [3.2 Callback funkcije s poljima](#32-callback-funkcije-s-poljima)
    - [3.2.1 Metoda `find(callbackFn)`](#321-metoda-findcallbackfn)
    - [3.2.2 Metoda `forEach(callbackFn)`](#322-metoda-foreachcallbackfn)
    - [3.2.3 Metoda `filter(callbackFn)`](#323-metoda-filtercallbackfn)
    - [Primjer 1: Tražilica 🔍](#primjer-1-tražilica-)
  - [Vježba 5](#vježba-5)
  - [Vježba 6](#vježba-6)
  - [3.3 Arrow funkcije (`=>`)](#33-arrow-funkcije-)
    - [3.3.1 Funkcijski izrazi i deklaracije](#331-funkcijski-izrazi-i-deklaracije)
    - [3.3.2 Sintaksa `arrow` funkcija](#332-sintaksa-arrow-funkcija)
    - [3.3.3 Primjeri `arrow` funkcija](#333-primjeri-arrow-funkcija)
      - [Primjer 1: Arrow funkcija koja zbraja 2 broja](#primjer-1-arrow-funkcija-koja-zbraja-2-broja)
      - [Primjer 2: Arrow funkcija koja ispisuje pozdravnu poruku](#primjer-2-arrow-funkcija-koja-ispisuje-pozdravnu-poruku)
      - [Primjer 3: Arrow funkcija koja kvadrira broj](#primjer-3-arrow-funkcija-koja-kvadrira-broj)
      - [Primjer 4: Arrow funkcija bez parametara](#primjer-4-arrow-funkcija-bez-parametara)

<br>

# 1. Uvod u ugniježđene strukture

Do sad smo naučili da možemo ugniježđivati selekcije i petlje, pa i funkcije. U JavaScriptu međutim, kada pričamo o ugniježđenim strukturama, mislimo na razne složene strukture koje se pretežito sastoje od ugniježđenih objekata i polja. Prema tome, ugniježđene strukture možemo podijeliti u **4 kategorije**:

> 1.  **Objekti unutar objekata** `{{}}`
> 2.  **Polja unutar objekata** `{[]}`
> 3.  **Objekti unutar polja** `[{}]`
> 4.  **Polja unutar polja** `[[]]`

Prije nego odradimo navedene kategorije, prisjetimo se ugniježđenih selekcija, petlji i funkcija.
Primjer ugniježđene selekcije:

```javascript
if (zaposlen) {
  if (placa > 1500) {
    console.log("Kreditno sposoban!");
  } else {
    console.log("Ne diži kredit!");
  }
} else {
  console.log("Ne diži kredit nikako!");
}
```

Primjer ugniježđene petlje:

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(`i je ${i}, a j je ${j}`);
  }
}
```

Rekli smo da možemo ugniježđivati i funkcije. Možda to nije nešto što ćemo često raditi, ali je moguće. Evo primjera:

```javascript
function prvaFunkcija() {
  console.log("Pozdrav iz prve funkcije!");
  function drugaFunkcija() {
    console.log("Pozdrav iz druge funkcije!");
  }
  drugaFunkcija();
}
prvaFunkcija();
```

Recimo da želimo pohraniti podatke o korisniku naše aplikacije: `ime`, `prezime`, `adresa` i `kontakt`.
Pod adresu želimo pohraniti `ulica`, `grad` i `poštanski broj`. Pod kontakt želimo pohraniti `telefon` i `email`.

Prvo ćemo sve pohraniti u jednostavan objekt **bez** ugniježđenih struktura:

```javascript
let korisnik = {
  ime: "Ivo",
  prezime: "Ivić",
  adresa: "Ulica 123, 52100 Pula",
  kontakt: "0911234567",
  email: "ivo@gmail.com",
};
```

Uočite zašto je ovakav zapis nezgrapan. Kako bi dohvatili `ulicu` moramo koristiti `split` metodu. Isti problem predstavlja `poštanski broj`.

Idemo problem riješiti **ugniježđenim objektima**.

```javascript
let korisnik = {
  ime: "Ivo",
  prezime: "Ivić",
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  kontakt: {
    telefon: "0911234567",
    email: "ivo@gmail.com",
  },
};
```

Sada možemo jednostavno dohvatiti `ulicu`, `grad`, `poštanski broj`, `telefon` i `email`, a naš kôd je pregledniji. Na jednaki način kako dohvaćamo atribute objekata, možemo dohvaćati i atribute ugniježđenih objekata, koristeći `.` operator.

```javascript
console.log(korisnik.adresa.ulica); // Ispisuje "Ulica 123"
console.log(korisnik.adresa.grad); // Ispisuje "Pula"
console.log(korisnik.adresa.postanskiBroj); // Ispisuje "52100"

console.log(korisnik.kontakt.telefon); // Ispisuje "0911234567"
console.log(korisnik.kontakt.email); // Ispisuje "ivo@gmail.com"
```

# 2. Ugniježđene strukture

## 2.1 Objekti unutar objekata

Često ćemo se u programiranju susretati s potrebom za pohranjivanjem složenih podataka i specifikacije nekakve hijerarhijske strukture. Primjerice, kako ćemo pohraniti podatke o korisniku? Korisnik sadrži `ime`, `prezime`, `adresu` i `kontakt`. `Adresa` se sastoji od `ulice`, `grada` i `poštanskog broja`. `Kontakt` se sastoji od `telefona` i `emaila`. Navedeno možemo postići s pomoću ugniježđenih objekata, tj. **objekata unutar objekata**.

Objekte "ugnježđujemo" tako da stvaramo **objekte unutar objekata**, doslovno. Sintaksa je sljedeća:

```javascript
let objekt1 = {
  svojstvo1: vrijednost1,
  svojstvo2: vrijednost2,
  objekt2: {
    svojstvo3: vrijednost3,
    svojstvo4: vrijednost4,
  },
  objekt3: {
    svojstvo5: vrijednost5,
    svojstvo6: vrijednost6,
  },
};
```

Već smo rekli da kod ugniježđenih objekata za dohvaćanje podataka koristimo već poznate operatore `.` ili `[]`. Primjer:

```javascript
console.log(objekt1.svojstvo1); // Ispisuje vrijednost1
console.log(objekt1.objekt2.svojstvo3); // Ispisuje vrijednost3
console.log(objekt1["objekt2"]["svojstvo3"]); // Ispisuje vrijednost3
```

Zamislimo da radimo backend aplikacije. Gotovo uvijek bit će nam potrebna autentifikacija za korisnika, poveznica na bazu podataka te nekakav server koji će služiti kao podloga našoj aplikaciji. Idemo definirati dummy konfiguracijski objekt za našu aplikaciju. Konfiguracijski objekt se često definira kao objekt u koji ćemo definirati neke postavke tj. parametre naše aplikacije. Primjer:

```javascript
let konfiguracija = {
  server: {
    host: "localhost",
    port: 8080,
  },
  bazaPodataka: {
    url: "mongodb://localhost:27017",
    ime: "mojaBaza",
  },
  sigurnost: {
    tip: "OAuth2",
    tajna: "tajniKljuc",
  },
};

console.log(konfiguracija.server.host); // Ispisuje "localhost
console.log(konfiguracija.bazaPodataka.url); // Ispisuje "mongodb://localhost:27017"
console.log(konfiguracija.sigurnost.tip); // Ispisuje "OAuth2"
```

Podobjekt može biti definiran i izvan objekta `konfiguracija`:

```javascript
let server = {
  // Podobjekt #1
  host: "localhost",
  port: 8080,
};

let bazaPodataka = {
  //Podobjekt #2
  url: "mongodb://localhost:27017",
  ime: "mojaBaza",
};

let sigurnost = {
  //Podobjekt #3
  tip: "OAuth2",
  tajna: "tajniKljuc",
};
// Glavni objekt
let konfiguracija = {
  server: server, // Podobjekt
  bazaPodataka: bazaPodataka, // Podobjekt
  sigurnost: sigurnost, // Podobjekt
};
```

Što ako ispišemo cijeli objekt `konfiguracija`? Rezultat ispisa će biti cijeli objekt, **uključujući i podobjekte**.

```javascript
console.log(konfiguracija); // Ispisuje: {server: {...}, bazaPodataka: {...}, sigurnost: {...}}
```

Detaljni ispis objekta `konfiguracija`:

```javascript
{
  bazaPodataka: {
        url: "mongodb://localhost:27017",
        ime: "mojaBaza"
    },
    server: {
        host: "localhost",
        port: 8080
    },
    sigurnost: {
        tip: "OAuth2",
        tajna: "tajniKljuc"
    }
}
```

### 2.1.1 Manipulacije podataka unutar ugniježđenih objekata

#### Izmjena podataka unutar ugniježđenih objekata

Kako mijenjati podatke unutar ugniježđenih objekata? Na primjer, kako promijeniti `host` servera u našem objektu `konfiguracija`? Na isti način kako dohvaćamo podatke iz ugniježđenih objekata, koristeći `.` operator ili notaciju uglatih zagrada `[]`.

```javascript
konfiguracija.server.host = "192.168.5.5";
console.log(konfiguracija.server.host); // Ispisuje "192.168.5.5"
```

Možemo koristiti i notaciju uglatih zagrada `[]`:

```javascript
konfiguracija["server"]["host"] = "192.168.5.5";
console.log(konfiguracija["server"]["host"]); // Ispisuje "192.168.5.5"
```

#### Dodavanje novih podataka unutar ugniježđenih objekata

Recimo da hoćemo dodati `protocol` podatak u naš objekt `server`. To radimo na isti način kao dodavanje novih podataka u obične objekte.

```javascript
konfiguracija.server.protocol = "http";
console.log(konfiguracija.server.protocol); // Ispisuje "http"
```

Možemo i koristeći notaciju uglatih zagrada `[]`:

```javascript
konfiguracija.server["protocol"] = "http";
```

ili

```javascript
konfiguracija["server"]["protocol"] = "http";
```

Ima li smisla dodavati naknadno svojstva? Ako ne znamo unaprijed koja će svojstva biti potrebna, onda ima smisla. Ako znamo unaprijed, onda je bolje definirati sva svojstva odmah. Primjerice, ako znamo svojstva `server` konfiguracije, možemo odmah napisati:

```javascript
let konfiguracija = {
  server: {
    host: "localhost",
    port: 8080,
    protocol: "http",
  },
};
```

Ako ne znamo, imamo više opcija:

1. Možemo definirati prazan objekt i dodavati svojstva kako ih trebamo.

```javascript
let konfiguracija = {
  server: {},
};

konfiguracija.server.host = "localhost";
konfiguracija.server.port = 8080;
konfiguracija.server.protocol = "http";
```

2. Možemo napraviti isto, ali definirati i koja podsvojstva će imati `server` objekt.

```javascript
let konfiguracija = {
  server: {
    host: "", // Prazni string jer nagađamo da će biti string
    port: null, // Null jer nagađamo da će biti broj
    protocol: "", // Prazni string jer nagađamo da će biti string
  },
};

konfiguracija.server.host = "localhost";
konfiguracija.server.port = 8080;
konfiguracija.server.protocol = "http";
```

#### Brisanje podataka unutar ugniježđenih objekata

Kako obrisati podatke unutar ugniježđenih objekata? Na primjer, tj. kako obrisati `port` servera u našem objektu `konfiguracija`? Koristimo `delete` naredbu.

```javascript
delete konfiguracija.server.port; // vraća true
console.log(konfiguracija.server.port); // Ispisuje "undefined"
```

>Naravno, objekte možemo i dublje ugnježđivati, koliko god želimo. U praksi, nećemo ići dublje od 3-4 razine ugnježđivanja, jer postaje nepraktično i teško za održavanje.

## 2.2 Polja unutar objekata

Zamislite da radite neku web trgovinu, morate na neki način pohranjivati podatke o kupcu i narudžbama. Podaci koje želimo pohraniti su: `ime`, `prezime`, `adresa`, `kontakt` i `narudžbe`. Pod adresa želimo pohraniti `ulica`, `grad` i `poštanski broj`. Pod kontakt želimo pohraniti `telefon` i `email`. Kako ćemo pohraniti narudžbe? Narudžba se sastoji od više podataka iste strukture (stavki/proizvoda), dakle moramo koristiti polja!

Prvo ćemo pohraniti osnovne podatke o kupcu:

```javascript
let kupac = {
  ime: "Ivo",
  prezime: "Ivić",
  adresa: "Ulica 123, 52100 Pula",
  kontakt: "0911234567",
  email: "iivic@gmail.com",
};
```

Ideja je da svojstva `adresa` i `kontakt` budu objekti.
Definirat ćemo i objekt `narudzbe` gdje ćemo pohraniti proizvode koje je kupac naručio i ukupnu cijenu narudžbe.

> Novi oblik ugniježđene strukture koji sad moramo koristiti jesu **polja unutar objekata**.

```javascript
let kupac = {
  ime: "Ivo",
  prezime: "Ivić",
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  kontakt: {
    telefon: "0911234567",
    email: "iivic@gmail.com",
  },
  narudzbe: {
    proizvodi: ["Mobitel", "Slušalice", "Punjač"],
    ukupnaCijena: 1500,
  },
};
```

Koristili smo polje `proizvodi` unutar objekta `narudzbe` kako bismo pohranili proizvode koje je kupac naručio. Polje `proizvodi` je niz stringova. Kako dohvatiti proizvode koje je kupac naručio?

```javascript
console.log(kupac.narudzbe.proizvodi); // Ispisuje ["Mobitel", "Slušalice", "Punjač"]
```

Kako dohvatiti prvi proizvod iz niza proizvoda?

```javascript
console.log(kupac.narudzbe.proizvodi[0]); // Ispisuje "Mobitel"
```

### 2.2.1 Iteracija kroz polje unutar objekata

Kako iterirati kroz **polje unutar objekata**? Na primjer, kako ispisati sve proizvode koje je kupac naručio?
Možemo koristeći `for` petlju:

```javascript
for (let i = 0; i < kupac.narudzbe.proizvodi.length; i++) {
  console.log(kupac.narudzbe.proizvodi[i]); // Ispisuje svaki proizvod - "Mobitel", "Slušalice", "Punjač"
}
```

ili bolje, koristeći `for-of` petlju:

```javascript
for (let proizvod of kupac.narudzbe.proizvodi) {
  console.log(proizvod); // Ispisuje svaki proizvod - "Mobitel", "Slušalice", "Punjač"
}
```

Ovo je u redu, međutim naši proizvodi u narudžbi će u web trgovini uvijek sadržavati i cijenu i neku naručenu količinu. Kako ćemo to pohraniti? Možemo koristiti **objekte unutar polja**.

## 2.3 Objekti unutar polja

Nastavljamo s prethodnim primjerom. Recimo da je kupac naručio 3 proizvoda: `"Mobitel" 1 kom`, `"Slušalice" 1 kom` i `"Punjač" 2 kom`. Cijene proizvoda su `300`, `20` i `10` eur. Kako pohraniti proizvode?

Idemo proizvode pohraniti kao zasebne objekte, prvo izvan objekta `kupac`, a zatim ih dodati u objekt `kupac`.

```javascript
let proizvod_1 = {
  naziv: "Mobitel",
  kolicina: 1,
  cijena: 300,
};
let proizvod_2 = {
  naziv: "Slušalice",
  kolicina: 1,
  cijena: 20,
};
let proizvod_3 = {
  naziv: "Punjač",
  kolicina: 2,
  cijena: 10,
};
```

Sada ćemo dodati proizvode u objekt `kupac`:

```javascript
kupac.narudzbe.proizvodi.push(proizvod_1);
kupac.narudzbe.proizvodi.push(proizvod_2);
kupac.narudzbe.proizvodi.push(proizvod_3);
```

Objekt `kupac` sada izgleda ovako:

```javascript
let kupac = {
  ime: "Ivo",
  prezime: "Ivić",
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  kontakt: {
    telefon: "0911234567",
    email: "iivic@gmail.com",
  },
  narudzbe: {
    proizvodi: [
      // U polje smo dodali objekte proizvoda
      {
        naziv: "Mobitel",
        kolicina: 1,
        cijena: 300,
      },
      {
        naziv: "Slušalice",
        kolicina: 1,
        cijena: 20,
      },
      {
        naziv: "Punjač",
        kolicina: 2,
        cijena: 10,
      },
    ],
    ukupnaCijena: 0,
  },
};
```

> Novi oblik ugniježđene strukture koji smo sad iskoristili jesu **objekti unutar polja**.

Idemo vidjeti kako sada dohvaćamo podatke. Polje `proizvodi` sadrži objekte, pa ćemo morati koristiti `.` operator za dohvaćanje svojstava objekata.

```javascript
console.log(kupac.narudzbe.proizvodi[0].naziv); // Ispisuje "Mobitel"
console.log(kupac.narudzbe.proizvodi[0].kolicina); // Ispisuje 1
console.log(kupac.narudzbe.proizvodi[0].cijena); // Ispisuje 300
```

Kako možemo iterirati kroz proizvode i ispisati ih? Možemo koristiti `for-of` petlju:
Pripazite, `proizvod` je sada objekt, pa ćemo morati koristiti `.` operator za dohvaćanje svojstava objekta.

```javascript
for (let proizvod of kupac.narudzbe.proizvodi) {
  console.log(proizvod.naziv); // Ispisuje naziv proizvoda
  console.log(proizvod.kolicina); // Ispisuje količinu proizvoda
  console.log(proizvod.cijena); // Ispisuje cijenu proizvoda
}
```

Kako izračunati ukupnu cijenu narudžbe? Iterirajmo kroz proizvode i zbrojimo cijene:

```javascript
let ukupnaCijena = 0;
for (let proizvod of kupac.narudzbe.proizvodi) {
  ukupnaCijena += proizvod.kolicina * proizvod.cijena;
}
kupac.narudzbe.ukupnaCijena = ukupnaCijena;
console.log(kupac.narudzbe.ukupnaCijena); // Ispisuje 340
```

Uočite glavni problem: Narudžbe su ustvari objekt (`narudzbe`), gdje se svaka narudžba sastoji od više proizvoda (polje objekata) i ukupne cijene.

- Što ako kupac ima više narudžbi? Gdje to dodajemo i kako?

Rješenje je da svaka narudžba bude zaseban objekt koje ćemo pohranjivati u tzv. **polje objekata**.

Dakle, do sada smo imali objekt `narduzbe` koji sadržava polje objekata `proizvodi`. Narudžbe su množina narudžbi, pa ima smisla da budu polje. Svaka narudžba sastoji se potencijano više stavki (proizvoda), pa ima smisla da svaka narudžba bude objekt.

Dakle, definirajmo jednu narudžbu kao objekt:

```javascript
let narudzba_1 = {
  stavke: [
    // Polje objekata
    {
      naziv: "Mobitel",
      kolicina: 1,
      cijena: 300,
    },
    {
      naziv: "Slušalice",
      kolicina: 1,
      cijena: 20,
    },
    {
      naziv: "Punjač",
      kolicina: 2,
      cijena: 10,
    },
  ],
  ukupnaCijena: 0,
};
```

Zašto ne bi zamijenili svojstvo za ukupnu cijenu s odgovarajućom metodom? Dodat ćemo metodu koja za svaku stavku (proizvod) računa ukupnu cijenu narudžbe.

```javascript
let narudzba_1 = {
  stavke: [
    // Polje objekata
    {
      naziv: "Mobitel",
      kolicina: 1,
      cijena: 300,
    },
    {
      naziv: "Slušalice",
      kolicina: 1,
      cijena: 20,
    },
    {
      naziv: "Punjač",
      kolicina: 2,
      cijena: 10,
    },
  ],
  // Vraća ukupnu cijenu narudžbe (340)
  ukupnaCijena: function () {
    let ukupnaCijena = 0;
    for (let stavka of this.stavke) {
      ukupnaCijena += stavka.kolicina * stavka.cijena;
    }
    return ukupnaCijena;
  },
  valuta: "eur", // Možemo dodati i valutu kao zasebno svojstvo
};
```

Sada ćemo svojstvo `narudzbe` iz objekta `kupac` pretvoriti u polje objekata i u njega dodati našu narudžbu - `narudzba_1`.

```javascript
let kupac = {
  ime: "Ivo",
  prezime: "Ivić",
  // Objekt unutar objekta `kupac`
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  // Objekt unutar objekta `kupac`
  kontakt: {
    telefon: "0911234567",
    email: "iivic@gmail.com",
  },
  // Polje objekata unutar objekta `kupac`
  narudzbe: [
  ],
};
```

Kako sad dohvatiti ukupnu cijenu prve narudžbe našeg kupca?

```javascript
console.log(kupac.narudzbe[0].ukupnaCijena()); // 340
```

> Da rezimiramo, u ovom primjeru imali smo **objekt** `narudzbe` koji je postao **polje objekata** `narudzba`.
>
> Svaka narudžba je objekt koji sadržava **polje objekata** `stavke`.
>
> Dodatno, svaka `stavka` je objekt (ima svojstva `naziv`, `kolicina`, `cijena`). Svaka narudžba ima svoju ukupnu cijenu, koja je **metoda objekta** `narudzba`.

Konačno, naš objekt `kupac` sada izgleda ovako:

```javascript
let kupac = {
  ime: "Ivo",
  prezime: "Ivić",
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  kontakt: {
    telefon: "0911234567",
    email: "iivic@gmail.com",
  },
  narudzbe: [
    {
      stavke: [
        {
          naziv: "Mobitel",
          kolicina: 1,
          cijena: 300,
        },
        {
          naziv: "Slušalice",
          kolicina: 1,
          cijena: 20,
        },
        {
          naziv: "Punjač",
          kolicina: 2,
          cijena: 10,
        },
      ],
      ukupnaCijena: function () {
        let ukupnaCijena = 0;
        for (let stavka of this.stavke) {
          ukupnaCijena += stavka.kolicina * stavka.cijena;
        }
        return ukupnaCijena;
      },
      valuta: "eur",
    },
  ],
};
```

<details>
  <summary>Objekt kupac - s komentarima</summary>

```javascript
// Glavni objekt
let kupac = {
  ime: "Ivo",
  prezime: "Ivić",
  // Objekt `adresa` unutar objekta `kupac`
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  // Objekt `kontakt` unutar objekta `kupac`
  kontakt: {
    telefon: "0911234567",
    email: "iivic@gmail.com",
  },
  // Polje `narudzbe` unutar objekta `kupac`
  narudzbe: [
    // Objekt `narudzba_1` unutar polja `narudzbe`
    {
      // Polje `stavke` unutar objekta `narudzba_1`
      stavke: [
        // 3 objekta `proizvod` unutar polja `stavke`
        {
          naziv: "Mobitel",
          kolicina: 1,
          cijena: 300,
        },
        {
          naziv: "Slušalice",
          kolicina: 1,
          cijena: 20,
        },
        {
          naziv: "Punjač",
          kolicina: 2,
          cijena: 10,
        },
      ],
      // Metoda `ukupnaCijena` unutar objekta `narudzba_1`
      ukupnaCijena: function () {
        let ukupnaCijena = 0;
        for (let stavka of this.stavke) {
          ukupnaCijena += stavka.kolicina * stavka.cijena;
        }
        return ukupnaCijena;
      },
      valuta: "eur",
    },
  ],
};
```

</details>

### Vježba 1

**EduCoder šifra**: `Valli`

Kino Valli je kino u Puli na adresi Giardini 1, 52100 Pula. Kino ima jednu dvoranu kapaciteta 209 sjedećih mjesta i prikazuje filmove gotovo svaki dan. Svoj program prikazuje putem web-a: https://www.kinovalli.net/. Na web stranici možete pronaći Tjedni raspored filmova gdje se prikazuje koji filmovi se prikazuju u kojem terminu (datum i vrijeme). Isti film prikazuje se u više termina u tjednom rasporedu, a svaki film se dodatno sastoji od sekcije gdje se prikazuje naslov filma, trajanje, godina izlaska, kategorija/žanr, izvorno ime, period prikazivanja, IMDb link, kratki opis, režija te više fotografija.

Za rezervaciju karata potrebno je unijeti osobne podatke prilikom registracije: ime, prezime, adresa (ulica, grad) i kontakt (telefon, email). Također, potrebno je za određenu projekciju unijeti broj karata i odabrati sjedala, nakon čega se izračunava ukupna cijena rezervacije. Ovo realizirajte metodom `dodajRezervaciju()`. Možete dodati i pomoćne metode za provjeru dostupnih sjedala, maksimalnog broja prodanih karata (popunjavanje kapaciteta), izračuna ukupne cijene i sl.

Na temelju ugrubo danog opisa poslovnog procesa kina Valli, definirajte objekt `kinoValli` koji će sadržavati sve potrebne podatke za opisani poslovni proces. Za modeliranje ovog objekta koristite ugniježđene strukture objekata i polja.

Prvo definirajte objekte `film` koristeći sljedeće podatke:

> **Film 1:** INTERSTELLAR, 169 min, 2014. god, znanstvena fantastika, Interstellar, 01.10.2014. - 07.10.2014., https://www.imdb.com/title/tt0816692/, režija:
> Christopher Nolan, **Fotografije**: "https://www.kinovalli.net/Interstellar/fakePoveznicaSlika1", "https://www.kinovalli.net/Interstellar/fakePoveznicaSlika2",
> "https://www.kinovalli.net/Interstellar/fakePoveznicaSlika3", **Opis**: "Skupina astronauta putuje u svemir i ulazi u crvotočinu kako bi pronašla novi planet na koji bi se ljudi mogli naseliti."

> **Film 2:** DINA: DRUGI DIO, 166 min, 2023. god, znanstvena fantastika, Dune: Part Two, 29.2.2024. - 12.3.2024., https://www.imdb.com/title/tt15239678/, režija: Denis Villeneuve, **Fotografije**: "https://www.kinovalli.net/Dune2/fakePoveznicaSlika1", "https://www.kinovalli.net/Dune2/fakePoveznicaSlika2", "https://www.kinovalli.net/Dune2/fakePoveznicaSlika3", **Opis**: "Nove pustolovine Paula Atreidesa i Chani, kao i sudbine brojnih drugih likova iz svijeta temeljenog na romanima Franka Herberta."

Nakon toga definirajte objekt `kinoValli` koji će sadržavati sve potrebne podatke za opisani poslovni proces. Potrudite se da objekt bude što precizniji, **jedinstvenog rješenja nema**, ali pokušajte što bolje modelirati opisani poslovni proces, pokrivajući što veći broj mogućih slučajeva: npr. popunjenost dvorane, provjere dostupnih sjedala, brisanja rezervacije itd.

Jednom kad definirate objekt i metodu `dodajRezervaciju()`, pozovite metodu `dodajRezervaciju()`.

```javascript
let kinoValli = {
  // Vaš kôd ovdje...
};

kinoValli.dodajRezervaciju(...);
```

### Vježba 2

**EduCoder šifra**: `rentaBoat`

Obrt `rentaBoat` bavi se iznajmljivanjem brodica i brodova za razne prigode. Njihova web stranica https://www.rentaboat.net/ glavni je kanal komunikacije s korisnicima. Na web stranici se nalazi ponuda brodova i brodica, gdje se prikazuje koji brodovi su dostupni za najam, u kojem terminu (datum i vrijeme) te cijena najma. Svaki brod/brodica ima svoje karakteristike: naziv, maksimalni kapacitet, tip, godina proizvodnje, maksimalna brzina, snaga motora u KS, dodatna oprema, dnevna cijena najma.

U dodatnu opremu mogu spadati: tuš, hladnjak, GPS, radio, kuhinja, WC, utičnice za struju, tenda, gumenjak, oprema za ribolov, ekosonder.
Tipovi brodica i brodova mogu uključivati: gliser, jahta, brodica za ribolov, gumenjak, jedrilica, brodica s kabinom, mala brodica bez kabine.

Korisnici se moraju registrirati i unijeti osobne podatke, te za registraciju odabrati željeni termin najma (datumi od/do), broj osoba, željenu dodatnu opremu te naravno samu brodicu. Nakon što korisnik unese sve podatke, izračunava se ukupna cijena najma i korisnika se obavještava o uspješnoj rezervaciji.

Na temelju ugrubo danog opisa poslovnog procesa obrta `rentaBoat`, definirajte objekt `rentaBoat` koji će sadržavati sve potrebne podatke za opisani poslovni proces. Za modeliranje ovog objekta koristite ugniježđene strukture objekata i polja.

Prvo definirajte 3 objekta `brod` koristeći sljedeće podatke:

> **Brod 1:** "Gliser", 2015. god, 20 čvorova, 150 KS, 6 osoba, "Tuš", "Hladnjak", "GPS", "Radio", "Tenda", "Oprema za ribolov", "Ekosonder", 250 eur/dan
>
> **Brod 2:** "Jahta", 2018. god, 35 čvorova, 300 KS, 8 osoba, "Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja", "WC", "Utičnice za struju", "Tenda", "Gumenjak", 1000 eur/dan
>
> **Brod 3.** "Jedrilica", 2019. god, 12 čvorova, 50 KS, 4 osobe, "Tuš", "Hladnjak", "GPS", "Radio", "Kuhinja", "WC", "Utičnice za struju", "Gumenjak", "Oprema za ribolov" 300 eur/dan

Nakon toga definirajte objekt `rentaBoat` koji će sadržavati sve potrebne podatke za opisani poslovni proces. Potrudite se da objekt bude što precizniji, **jedinstvenog rješenja nema**, ali pokušajte što bolje modelirati opisani poslovni proces.

Jednom kad napravite objekt `rentaBoat`, definirajte metode `provjeriOpremu()`, `ukupnaCijena()` i `dodajRezervaciju()`. Ideja je da metoda `dodajRezervaciju()` poziva metode `provjeriOpremu()` i `ukupnaCijena()`. Na kraju pozovite metodu `dodajRezervaciju()`.

```javascript
let rentaBoat = {
  // Vaš kôd ovdje...
};
rentaBoat.dodajRezervaciju(...);
```

## 2.4 Polja unutar polja

Ugniježđena polja su polja definirana unutar drugih polja, još se nazivaju **multidimenzionalnim poljima** (***eng. multidimensional arrays***). U praksi, multidimenzionalna polja se koriste za pohranu podataka koji su međusobno povezani.

Multidimenzionalna polja možemo definirati ugnježđivanjem polja definiranih uglatim zagradama `[]`.

Primjer jednodimenzionalnog polja:

```javascript
let = [1, 2, 3, 4, 5];
```

Primjer dvodimenzionalnog polja (**2D matrica**)

```javascript
let matrica = [
  [1, 2, 3], // Prvi redak
  [4, 5, 6], // Drugi redak
  [7, 8, 9], // Treći redak
];
```

U ovom primjeru imamo matricu dimenzija 3x3. Matrica ima 3 redaka i 3 stupca. Svaki redak je polje koje sadrži 3 elementa. Matrica je dvodimenzionalna jer ima dvije (2) dimenzionalnosti (redak i stupac).

Kako možemo dohvatiti elemente matrice? Koristimo indekse redaka i stupaca.

```javascript
console.log(matrica[0][0]); // Ispisuje 1 (prvi redak, prvi stupac)
console.log(matrica[1][1]); // Ispisuje 5 (drugi redak, drugi stupac)
console.log(matrica[2][0]); // Ispisuje 7 (treći redak, prvi stupac)
```

Možemo dohvatiti i samo cijeli redak matrice koristeći indeks redaka

```javascript
console.log(matrica[0]); // Ispisuje [1, 2, 3] (prvi redak)
console.log(matrica[1]); // Ispisuje [4, 5, 6] (drugi redak)
console.log(matrica[2]); // Ispisuje [7, 8, 9] (treći redak)
```

Modifikacije elemenata višedimenzionalnih polja rade se na isti način kao i kod jednodimenzionalnih polja.

```javascript
matrica[0][0] = 10; // Modificira prvi element matrice

console.log(matrica[0][0]); // Ispisuje 10

console.log(matrica); // Ispisuje [[10, 2, 3], [4, 5, 6], [7, 8, 9]]
```

**Matrice** se u programiranju reprezentiraju višedimenzionalnim poljima. Ako se pokušate dosjetiti primjera gdje bi se mogli koristiti ovakvi zapisi, na prvu će vam višedimenzionalna polja možda izgledati komplicirano i nepotrebno, ali u praksi su vrlo korisna i često se koriste.

U računarstvu i informacijskoj znanosti, matrice se koriste za:

- računalnu grafiku (slike, video, 3D modeli i sl.)
- strojno učenje i umjetnu inteligenciju
- modeliranje i simulacije
- kriptografiju
- teorija grafova
- obrada signala
- linearne transformacije

### 2.4.1 Iteracije kroz više dimenzija

Iteracije kroz više dimenzija rade se na isti način kao i kod jednodimenzionalnih polja, samo što koristimo više petlji - odnosno koristimo **ugniježđene petlje**.

Idemo definirati jednu matricu dimenzija 5x5.

```javascript
let matrica = [
  [10, 20, 45, 4, 3],
  [6, 7, 8, 18, 11],
  [30, 12, 70, 14, 5],
  [16, 22, 100, 19, 2],
  [18, 22, 23, 24, 266],
];

console.log(matrica); // [[10,20,45,4,3],[6,7,8,18,11],[30,12,70,14,5],[16,22,100,19,2],[18,22,23,24,266]]
```

Idemo iterirati kroz matricu i ispisati sve elemente.

```javascript
for (let i = 0; i < matrica.length; i++) {
  console.log(matrica[i]); // Ispisuje svaki redak matrice
  /*
                            [10, 20, 45, 4, 3]
                            [6, 7, 8, 18, 11]
                            [30, 12, 70, 14, 5]
                            [16, 22, 100, 19, 2]
                            [18, 22, 23, 24, 266]
  */
}
```

Kôd  iznad ispisuje 5 puta (5 elemenata), ne ispisuje svaki element matrice (25 elemenata).

Kako su rezultati ispisivanja redaka matrice **polja**, moramo iterirati ponovo kroz svaki element tih **5 polja**.

```javascript
for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    console.log(matrica[i][j]); // Ispisuje svaki element matrice
    //Ispisuje: 10, 20, 45, 4, 3, 6, 7, 8, 18, 11, 30, 12, 70, 14, 5, 16, 22, 100, 19, 2, 18, 22, 23, 24, 266
  }
}
```

Kako bismo definirali matricu dimenzija 3x3x3, koristimo 3 ugniježđena polja koja sadrže po 3 elementa (također polja):

```javascript
let matrica3D = [
  [
    // Prvi sloj
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    // Drugi sloj
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    // Treći sloj
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
  ],
];
```

Primjer kako izgleda iteracija kroz 3D matricu:

```javascript
for (let i = 0; i < matrica3D.length; i++) {
  for (let j = 0; j < matrica3D[i].length; j++) {
    for (let k = 0; k < matrica3D[i][j].length; k++) {
      console.log(matrica3D[i][j][k]); // Ispisuje svaki element 3D matrice
    }
  }
}
```

**3D matricama** možemo reprezentirati razne stvari, npr. u području fizike i ineženjerstva možemo 3D matricom definirati tzv. **Stress tensor** (tenzor naprezanja) koji se koristi za opisivanje naprezanja u različitim točkama nekog tijela (Cauchy stress tensor).

U računalnoj grafici možemo 3D matricom definirati **voxel grid** gdje svaki element matrice predstavlja jedan voxel (3D piksel) koji sadrži informacije o boji, teksturi, materijalu i sl.

### 2.4.2 Stvaranje višedimenzionalnih polja pomoću `Array` konstruktora

U višedimenzionalna polja ne moraju biti pohranjeni samo brojevi (premda je to najčešće), već i bilo koji drugi tipovi podataka. U tom slučaju se višedimenzionalna polja više ne nazivaju matricama.

Npr, pohranimo u višedimenzionalno polje stringove.

```javascript
let filmovi = [
  "Begin Again",
  "Soul",
  ["Matrix", "Matix Reloaded", "Matrix Revolutions"], // polje (sadrži samo stringove)
  ["Frozen", "Frozen 2", ["Tangled", "Alladin"]], // 2D polje (jer sadrži stringove i još jedno polje)
];
```

Drugi način je pozivanjem `Array` konstruktora.

```javascript
let filmovi = new Array();

filmovi[0] = "Begin Again";
filmovi[1] = "Soul";
filmovi[2] = new Array("Matrix", "Matrix Reloaded", "Matrix Revolutions"); // polje (sadrži samo stringove)
filmovi[3] = new Array("Frozen", "Frozen 2", new Array("Tangled", "Alladin")); // 2D polje (jer sadrži stringove i još jedno polje)
```

Dakle `filmovi[2]` predstavlja jednodimenzionalno polje s tri elementa (filmovi (string)), a `filmovi[3]` predstavlja dvodimenzionalno polje s tri elementa (**filmovi** (string) i polje s dva elementa (**filmovi** string)).

Kako se raspoređuju elementi u višedimenzionalnim poljima? Pogledamo ilustraciju:

![Indices array](./screenschots/indices_array.png)

> Izvor: https://dev.to/sanchithasr/understanding-nested-arrays-2hf7

Ako želimo dohvatiti film "Tangled" iz polja `filmovi`, koristimo indekse `[3][2][0]`.

```javascript
console.log(filmovi[3][2][0]); // Ispisuje "Tangled"
```

Ako želimo dohvatiti film "Matrix Reloaded" iz polja `filmovi`, koristimo indekse `[2][1]`.

```javascript
console.log(filmovi[2][1]); // Ispisuje "Matrix Reloaded"
```

Polje možemo "izravnati", odnosno **svesti višedimenzionalno polje na jednodimenzionalno** polje koristeći metodu `Array.flat()`.

Primjerice uzmimo više dimenzionalno polje koje želimo svesti na jednodimenzionalno polje (listu).

```javascript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); // [0, 1, 2, 3, 4]
```

Metoda `Array.flat()` smanjuje dubinu polja za jedan nivo. Ako želimo smanjiti dubinu polja za više nivoa, unosimo argument `depth`.

```javascript
const arr2 = [0, 1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // [0, 1, 2, 3, 4, [5, 6]]

// ali
console.log(arr2.flat(2)); // [0, 1, 2, 3, 4, 5, 6]
```

> Već smo naveli moguće primjene višedimenzionalnih polja te naglasili da se u pravilu koriste za pohranu numeričkih podataka, koji su međusobno povezani odnosno predstavljaju neku **vrstu višedimenzionalne strukture**.

- U praksi, ovaj primjer nije nešto što želite pohraniti u višedimenzionalno polje.
Dohvaćanje filmova postaje nezgrapno (više-dimenzionalno indeksiranje), značajno se smanjuje čitljivost kôda , a i održavanje postaje teže.

Filmove je bolje pohraniti koristeći ranije naučene ugniježđene strukture - kombiniranjem objekata i polja.

Recimo ovako:

```javascript
let filmovi = {
  singleFilms: ["Begin Again", "Soul"],
  matrixSeries: ["Matrix", "Matrix Reloaded", "Matrix Revolutions"],
  disneyAnimations: {
    frozenSeries: ["Frozen", "Frozen 2"],
    classicTales: ["Tangled", "Alladin"],
  },
};
```

Sada možemo dohvatiti filmove na jednostavniji način:

```javascript
console.log(filmovi.disneyAnimations.classicTales[0]); // Ispisuje "Tangled"
console.log(filmovi.matrixSeries[1]); // Ispisuje "Matrix Reloaded"
```

### Vježba 3

**EduCoder šifra**: `matrix`

Definirajte dvodimenzionalno polje (matricu) dimenzija 3x3 koja će sadržavati random brojeve od `1` do `9`. Matricu morate "izgraditi" s pomoću ugniježđenih petlji, ne ručno! Implementirajte funkciju `randomNumbers()` koja vraća random broj između `1` i `9` koristeći `Math.random()` metodu.
Na kraju definirajte funkciju `ispisMatrice(matrix2D)` koja ispisuje sve elemente dvodimenzionalne matrice `matrix2D`.

## 2.5 Sažetak ugiježđenih struktura

Ugniježđene strukture su strukture koje se sastoje od više različitih struktura koje su međusobno povezane. U kontekstu ove skripte, one se odnose na ugniježđene objekte i polja. Ugniježđene strukture koje smo obradili su:

> 1.  **Objekti unutar objekata** `{{}}`
> 2.  **Polja unutar objekata** `{[]}`
> 3.  **Objekti unutar polja** `[{}]`
> 4.  **Polja unutar polja** `[[]]`

U kontekstu web programiranja, naučili smo da često koristimo prve 3 strukture - primjerice za modeliranje raznih entiteta iz stvarnog života. Međutim, višedimenzionalna polja odnosno polja unutar polja su korisna za pohranu drugih vrsta podataka, npr. matrica, 3D modela, slika, videa, zvuka, tabličnih podataka i sl.

> 1. **Objekte unutar objekata** koristimo za modeliranje entiteta koji imaju svoje pod-entitete (npr. kupac s podentitetima adresa i kontakt). Kako adresa i kontakt sami po sebi nisu jasni entiteti, koristimo objekte kako bi ih razložili na detaljnije podatke.

```javascript
let kupac = {
  // Glavni objekt `kupac`
  ime: "Ivo",
  prezime: "Ivić",
  // Podobjekt `adresa` unutar objekta `kupac`
  adresa: {
    ulica: "Ulica 123",
    grad: "Pula",
    postanskiBroj: "52100",
  },
  // Podobjekt `kontakt` unutar objekta `kupac`
  kontakt: {
    telefon: "0911234567",
    email: "iivic@gmail.com",
  },
};
```

> 2. **Polja unutar objekata** koristimo za modeliranje entiteta koji imaju više podataka istog tipa (npr. kupac s više narudžbi). Kako narudžbe nisu jasni entiteti, modeliramo ih pomoću objekata kako bi ih razložili na detaljnije podatke, a potom te objekte pohranjujemo u polje.
> 3. Svaku stavku narudžbe predstavljamo kao **Objekt unutar polja**

```javascript
let narudzbe = [
  {
    // Polje objekata `stavke` unutar objekta `narudzba`
    stavke: [
      {
        // Objekt `stavka` unutar polja `stavke`
        naziv: "Mobitel",
        kolicina: 1,
        cijena: 300,
      },
      {
        // Objekt `stavka` unutar polja `stavke`
        naziv: "Slušalice",
        kolicina: 1,
        cijena: 20,
      },
      {
        // Objekt `stavka` unutar polja `stavke`
        naziv: "Punjač",
        kolicina: 2,
        cijena: 10,
      },
    ],
    // Metoda unutar objekta `narudzba`
    ukupnaCijena: function () {
      let ukupnaCijena = 0;
      for (let stavka of this.stavke) {
        ukupnaCijena += stavka.kolicina * stavka.cijena;
      }
      return ukupnaCijena;
    },
  },
];
console.log(narudzbe[0].ukupnaCijena()); // 340

// Iteracija kroz polje objekata (stavke svake narudžbe)
for (let i = 0; i < narudzbe.length; i++) {
  for (let j = 0; j < narudzbe[i].stavke.length; j++) {
    console.log(narudzbe[i].stavke[j]); // Ispisuje svaku stavku narudžbe
  }
}
```

> 4. **Polja unutar polja** koristimo za modeliranje struktura podataka koji su međusobno povezani (npr. matrica, 3D modeli, slike, videa, zvuka, tablični podaci). U ovom slučaju, **svaki element polja je polje**.

```javascript
let matrica = [
  [10, 20, 45, 4, 3],
  [6, 7, 8, 18, 11],
  [30, 12, 70, 14, 5],
  [16, 22, 100, 19, 2],
  [18, 22, 23, 24, 266],
];
console.log(matrica[4][0]); // Ispisuje 18

// Iteracija kroz dvodimenzionalno polje (matricu)
for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    console.log(matrica[i][j]); // Ispisuje svaki element matrice
  }
}
```

### Vježba 4

**EduCoder šifra**: `student`

Definirajte objekt `student` koji će sadržavati podatke o studentu: ime, prezime, adresa (ulica, grad, poštanski broj), kontakt (telefon, email), ocjene (polje objekata `Ocjena`).

- definirajte konstruktor `Ocjena` koji se sastoji od 2 svojstva: `numerickaOcjena` i `opisnaOcjena`. Konstruktor se mora pozivati samo s argumentom numeričke ocjene, opisna ocjena dodjeljuje se ovisno o numeričkoj ocjeni (npr. 5 - "odličan", 4 - "vrlo dobar", 3 - "dobar", 2 - "dovoljan", 1 - "nedovoljan", default = "nevažeća ocjena"). Primjer poziva konstruktora: `new Ocjena(5)` - stvara objekt `{numerickaOcjena: 5, opisnaOcjena: "odličan"}`.
- Dodajte studentu nekoliko ocjena (npr. 5 ocjena) implementacijom metode `dodajOcjenu()` i izračunajte prosječnu ocjenu studenta zaokruženu na dvije decimale (dodajte metodu `prosjecnaOcjena()` u objekt student).

# Samostalni zadatak za vježbu 6

**EduCoder šifra**: `restoran`

Imate zadatak napraviti malu web aplikaciju za restoran kako bi gosti mogli naručiti hranu i piće preko tableta u restoranu. Definirajte objekt `restoran` koji će sadržavati podatke o restoranu: naziv, adresa (ulica, grad, poštanski broj), kontakt (telefon, email), objekt meni (sadrži polje objekata `Jelo` i `Pice`).

- definirajte konstruktor `Jelo` koji se sastoji od 5 svojstva: `naziv`, `cijena`, `opis`, `sastojci` i `kategorija`.

Primjer pozivanja konstruktora može biti: `new Jelo("Margherita", 7, "Pizza s rajčicom i mozzarella sirom", ["rajčica", "sir"], "glavno jelo")`.

- Definirajte nekoliko jela pozivanjem konstruktora `Jelo`
- definirajte konstruktor `Pice` koji se sastoji od 4 svojstva: `naziv`, `cijena`, `opis` i `kategorija`. Primjer pozivanja konstruktora može biti: `new Pice("Coca-Cola", 2, "Osvježavajuće gazirano bezalkoholno piće", "bezalkoholno")`.
- Definirajte nekoliko pića pozivanjem konstruktora `Pice`

U objekt `restoran` dodajte metodu `dodajNarudzbu()` koja će dodati novu narudžbu u polje narudžbi. Metoda mora raditi na sljedeći način:

- kada se pozove funkcija, korisniku se mora otvoriti izbornik gdje će mu se izlistati sva jela i pića iz menija s indeksom koji počinje od 1 ispred zapisa. Primjer:

```
1. Margherita (Pizza s rajčicom i mozarella sirom)  - 7 eur
2. Coca-Cola (Osvježavajuće gazirano bezalkoholno piće) - 3 eur
3. Tjestenina s umakom od rajčice (Tjestenina s umakom od svježe rajčice) - 8 eur
4. Fanta (Osvježavajuće gazirano bezalkoholno piće) - 2 eur
5. Piletina s povrćem (Piletina s povrćem i umakom od vrhnja) - 10 eur
```

- korisnik unosi redni broj jela ili pića koje želi naručiti. Ako korisnik unese redni broj koji ne postoji, ispisuje se poruka `"Narudžba ne postoji, pokušajte ponovno".` Koristite `prompt()` funkciju za unos podataka.
- ako korisnik unese ispravan redni broj, traži ga se količina koju želi naručiti. Ako korisnik unese količinu manju od 1, ispisuje se poruka `"Količina mora biti veća od 0, pokušajte ponovno".` Koristite `prompt()` funkciju za unos podataka.
- preferencije koje korisnik unosi moraju se spremati u objekt `trenutna_narudzba` i polje `stavke`, a dodatno, u objekte jela i/ili pića potrebno je dodati svojstvo `kolicina`.

Primjer za naručivanje 2 Margherita pizza i 2 Coca-Cola pića:

```javascript
let trenutna_narudzba = {
  stavke: [
    {
      // narudžba Margherita (objekt Jelo + količina)
      naziv: "Margherita",
      cijena: 7,
      opis: "Pizza s rajčicom i mozzarella sirom",
      sastojci: ["rajčica", "sir"],
      kategorija: "glavno jelo",
      kolicina: 2,
    },
    {
      // narudžba Coca-Cola (objekt Pice + količina)
      naziv: "Coca-Cola",
      cijena: 2,
      opis: "Osvježavajuće gazirano bezalkoholno piće",
      kategorija: "bezalkoholno",
      kolicina: 2,
    },
  ],
};
```

- korisnik završava s naručivanjem kada unese redni broj `0`. Tada se ispisuje trenutna narudžba i ukupna cijena narudžbe.
- dodajte `timestamp` u objekt `trenutna_narudzba` koji će sadržavati trenutni datum i vrijeme narudžbe.
- jednom kad je narudžba uspješno dodana obavijestite o tome korisnika funkcijom `alert()`. U poruci obavijestite korisnika i o ukupnoj cijeni narudžbe.

<br>

# 3. Napredne funkcije

Napredne funkcije i metode odnose se na kompleksnije metode i tehnike koje se koriste za rješavanje određenih tipova problema. Studenti će kroz ove vježbe naučiti koristiti funkcije višeg reda (eng. **_higher-order functions_**). To su funkcije koje primaju funkcije kao argumente, poput: `map()`, `filter()`, `reduce()`, `sort()`.

Detaljnije ćemo obraditi `callback` funkcije koje smo već spomenuli u primjerima skripte PJS3 te ćemo naučiti pisati tzv. `arrow` ili anonimne funkcije koje nam pružaju konkretniju sintaksu za pisanje funkcijskih izraza, o kojima je bilo riječi u skripti PJS2.

> Važno je prije prolaska kroz ovo poglavlje dobro ponoviti koncepte funkcija, funkcijskih izraza, objekata, polja te ugniježđenih struktura.

<img src="./screenschots/reduce_graphics.png" alt="Advanced functions" style="width: 60%;" />

> Izvor: https://blog.khanacademy.org/lets-reduce-a-gentle-introduction-to-javascripts-reduce-method/

## 3.1 Callback funkcije

### 3.1.1 Primjer callback funkcije

U poglavlju PJS3 već smo ukratko napravili uvod u `callback` funkcije. 

> `Callback` funkcije su funkcije koje se koriste kao argumenti drugih funkcija. Drugim riječima, `callback` **funkcija je funkcija koja se poziva unutar druge funkcije**.

Vidjeli smo da `callback` funkcije  možemo koristiti kao argumente za neke od metoda `Array` objekta, kao što su `find` i `filter`.

Primjer koji smo prošli u prošloj skripti je bio:

```javascript
let stabla = new Array("hrast", "bukva", "javor", "bor", "smreka");
```

Za definirano polje `stabla` pokazali smo kako pronaći stablo `bor` koristeći metodu `find()`.

```javascript
let bor = stabla.find(function(stablo) {
    return stablo == "bor"; // vraća prvi element koji zadovoljava ovaj uvjet
});
console.log(bor); // Ispisuje "bor"
```

Ovdje je `callback` funkcija je **anonimna funkcija** koja se koristi kao argument za metodu `find()`. Ova `callback` funkcija je anonimna jer nema ime i definirana je direktno unutar metode `find()`.

- Kako bi nam bilo jasnije, idemo razdvojiti `callback` funkciju od metode `find()` na način da ćemo ju pretočiti u  funkciju `pronadiBor()` koja provjerava je li stablo "bor".

Metoda `find()` će pozvati funkciju `pronadiBor()` za svaki element polja `stabla`.

```javascript
let bor = stabla.find(pronadiBor); // Pozovi metodu find() s callback funkcijom pronadiBor()
```

Funkcija `pronadiBor()` mora imati jedan argument (`stablo`) koji predstavlja svaki element polja `stabla`.

Primjer kako možemo implementirati našu funkciju `pronadiBor()`:

```javascript
function pronadiBor(stablo) { // Definiraj funkciju pronadiBor() koja prima jedan argument "stablo"
    return stablo == "bor";  // Vrati true ako je "stablo" jednako "bor"
}
```

Naš kôd sada izgleda ovako:

```javascript
let stabla = new Array("hrast", "bukva", "javor", "bor", "smreka");

function pronadiBor(stablo) { 
    return stablo == "bor";
}

let bor = stabla.find(pronadiBor); // Callback funkciju pronadiBor() proslijeđujemo bez zagrada ()
console.log(bor); // Ispisuje "bor"
```

> Ima li kôd grešaka? Funkciju `pronadiBor` proslijeđujemo bez zagrada `()`. Zašto? **Zato što želimo proslijediti referencu na funkciju, a ne rezultat izvršavanja funkcije.** 
- Grešku bi dobili da smo napisali `let bor = stabla.find(pronadiBor());`. U tom slučaju, `pronadiBor()` bi se izvršila odmah, a rezultat bi bio proslijeđen metodi `find()`.

### 3.1.2 Osnovna podjela `callback` funkcija

Najjednostavnije rečeno, u JavaScriptu, `callback` funkcija je funkcija proslijeđena kao argument drugoj funkciji - `callback` funkcije se koriste za izvršavanje koda nakon što je druga funkcija završila izvršavanje.

U primjeru sa stablima koristili smo `callback` funkcije na 2 načina:
1. koristili smo **globalno definiranu funkciju** kao `callback` funkciju (*definirana s imenom*)
2. koristili smo **anonimnu funkciju** kao `callback` funkciju (*bez imena*)

#### 1. Globalno definirana `callback` funkcija

Pokazat ćemo prvo 1. primjer gdje koristimo `callback` funkciju definiranu izvana kao argument za metodu `forEach()`. Rekli smo da je metoda `forEach()` metoda koja prolazi kroz svaki element polja i izvršava `callback` funkciju za svaki element odnosno za svaki element polja izvršava neku operaciju.

Zadatak nam je da za svaki element polja `brojevi` ispišemo kvadrat tog broja.

Prvo ćemo definirati polje `brojevi`:

```javascript
let brojevi = [1, 2, 3, 4, 5];
```

Zatim ćemo definirati globalnu `callback` funkciju `ispisiKvadrat()` koja će ispisati kvadrat broja.

```javascript
// ovu funkciju ćemo koristiti kao callback funkciju 
function ispisiKvadrat(broj) {
    console.log(broj * broj);
}
```

Za sada je sve poznato, idemo upotrijebiti metodu `forEach()` i proslijediti `callback` funkciju `ispisiKvadrat()`.

```javascript
brojevi.forEach(ispisiKvadrat); // Pozovi metodu forEach() s callback funkcijom ispisiKvadrat()

// Ispisuje:
// 1
// 4
// 9
// 16
// 25
```

> VAŽNO: Primjetite da **nismo** pozivali `callback` funkciju niti definirali argument `broj`. Metoda `forEach()` će to učiniti za nas - mi smo samo **proslijedili referencu na funkciju** `ispisiKvadrat`.

#### 2. Anonimna `callback` funkcija

Sada ćemo pokazati kako isto definirati anonimnom `callback` funkcijom.

> **Anonimne funkcije** u programiranju su funkcije koje nisu vezane nekim identifikatorom (imenom). Često predstavljaju argumente koji se proslijeđuju drugim funkcijama. Ponovite si poglavlje: **Uvod u funkcijsko programiranje** u skripti **PJS2**.

Opet ćemo definirati polje `brojevi`:

```javascript
let brojevi = [1, 2, 3, 4, 5];
```

Ideja je da ovoga puta koristimo **anonimnu** `callback` funkciju koja će ispisati kvadrat broja.

```javascript
brojevi.forEach(nasaAnonimnaFunkcija); // ???
```

>Anonimne funkcije možemo definirati na potpuno isti način kao i obične funkcije, samo što im ne navodimo, pogađate, ime.

```javascript
let brojevi = [1, 2, 3, 4, 5];
brojevi.forEach(function(broj) { // Anonimna `callback` funkcija koja ispisuje kvadrat broja (bez imena)
    console.log(broj * broj);
});

// Ispisuje:
// 1
// 4
// 9
// 16
// 25
```

## 3.2 Callback funkcije s poljima

Kroz primjere s metodama `forEach()` i `find()` napravili smo uvod u `callback` funkcije. U ovom poglavlju proći ćemo kroz još nekoliko metoda `Array` objekta koje koriste `callback` funkcije.

U 4. poglavlju - `Polja` naučili smo koristili osnovne metode `Arary` objekta. Podijelili smo ih u:
- **metode dodavanja, brisanja i stvaranja novih polja**: npr. `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`
- **metode pretraživanja polja**: npr. `indexOf()`, `lastIndexOf()`, `includes()`, `find()`

Neke od metoda pretraživanja polja koje smo već spomenuli koriste `callback` funkcije. Primjer:
- `find(callbackFn)` metoda pretražuje polje i vraća prvi element koji zadovoljava uvjet definiran u `callback` funkciji.
- `findIndex(callbackFn)` metoda pretražuje polje i vraća indeks prvog elementa koji zadovoljava uvjet definiran u `callback` funkciji.
- `findLast(callbackFn)` metoda pretražuje polje i vraća zadnji element koji zadovoljava uvjet definiran u `callback` funkciji.
- `findLastIndex(callbackFn)` metoda pretražuje polje i vraća indeks zadnjeg elementa koji zadovoljava uvjet definiran u `callback` funkciji.

U ovom poglavlju, kroz primjere ćemo detaljnije proći kroz navedene metode, kao i dodatne metode `Array` objekta koje koriste `callback` funkcije.

### 3.2.1 Metoda `find(callbackFn)`

Metodu `find()` koristili smo za pretraživanje polja stabala i pronalazak stabla "bor".

```javascript
let stabla = new Array("hrast", "bukva", "javor", "bor", "smreka");
let bor = stabla.find(function(stablo) { // Anonimna funkcija koja provjerava je li "stablo" jednako "bor"
    return stablo == "bor";
});
console.log(bor); // Ispisuje "bor"
```

Metoda `find()` vraća **prvi element** polja koji zadovoljava uvjet definiran u `callback` funkciji. Ako nema elementa koji zadovoljava uvjet, vraća se `undefined`.

Imamo definirano polje objekata `studenti`:

```javascript
let studenti = [
    {ime: "Ivo", prezime: "Ivić", ocjena: 5},
    {ime: "Ana", prezime: "Anić", ocjena: 4},
    {ime: "Maja", prezime: "Majić", ocjena: 3},
    {ime: "Ivan", prezime: "Ivanić", ocjena: 2},
    {ime: "Pero", prezime: "Perić", ocjena: 1},
];
```

Želimo pronaći studenta s prezimenom `Ivanić`. Koristimo metodu `find()` i `callback` funkciju koja provjerava je li prezime studenta jednako `Ivanić`.

```javascript
let student = studenti.find(function(student) { // Anonimna funkcija koja provjerava je liprezime studenta jednako "Ivanić"
    return student.prezime == "Ivanić";
});
console.log(student); // Ispisuje {ime: "Ivan", prezime: "Ivanić", ocjena: 2}
```

Što ako želimo pronaći studenta s negativnom ocjenom? Potrebno je samo redefinirati uvjet u `callback` funkciji.

```javascript
let student = studenti.find(function(student) { // Anonimna funkcija koja provjerava je li ocjena studenta jednaka 1
    return student.ocjena === 1;
});
```
Što ako želimo pronaći studenta s ocjenom većom od 3? Izmjenit ćemo uvjet i definirati u vanjskoj `callback` funkciji.

```javascript
function ocjenaVecaOdTri(student) {
    return student.ocjena > 3;
}
let student = studenti.find(ocjenaVecaOdTri); // Pozovi metodu find() s callback funkcijom ocjenaVecaOdTri.

console.log(student); // Ispisuje {ime: "Ivo", prezime: "Ivić", ocjena: 5}
```
Rezultat je samo 1 objekt iako imamo 2 studenta s ocjenom većom od 3. Metoda `find()` vraća **prvi element** polja koji zadovoljava uvjet.
Varijante postoje, to su metode: `findIndex()`, `findLast()` i `findLastIndex()`.

Međutim ako želimo pronaći sve studente (ne samo prve ili zadnje) koji zadovoljavaju uvjet, moramo koristiti neke druge metode.

### 3.2.2 Metoda `forEach(callbackFn)`

Vidjeli smo već metodu `forEach()` koja prolazi kroz svaki element polja i izvršava `callback` funkciju za svaki element. Međutim, metoda `forEach()` ne vraća ništa, već samo prolazi kroz polje. Svejedno to možemo iskoristiti za pronalazak svih studenata s ocjenom većom od 3.

```javascript
let studenti = [
    {ime: "Ivo", prezime: "Ivić", ocjena: 5},
    {ime: "Ana", prezime: "Anić", ocjena: 4},
    {ime: "Maja", prezime: "Majić", ocjena: 3},
    {ime: "Ivan", prezime: "Ivanić", ocjena: 2},
    {ime: "Pero", prezime: "Perić", ocjena: 1},
];

let studentiPrekoTri = []; // Inicijaliziraj prazno polje za spremanje studenata s ocjenom većom od 3

studenti.forEach(function(student) { // Anonimna funkcija koja provjerava je li ocjena studenta veća od 3
    if (student.ocjena > 3) {
        studentiPrekoTri.push(student); // Dodaj studenta u polje studentiPrekoTri
    }
});

console.log(studentiPrekoTri); // Ispisuje [{ime: "Ivo", prezime: "Ivić", ocjena: 5}, {ime: "Ana", prezime: "Anić", ocjena: 4}]
```

Ako bi izvukli `callback` funkciju iz metode `forEach()` i definirali ju izvan metode, ona bi izgledala ovako:
  
```javascript
function ocjenaVecaOdTri(student) {
  if (student.ocjena > 3) {
      studentiPrekoTri.push(student);
  }
}
```

I na ovaj način ju možemo koristiti kao `callback` funkciju za metodu `forEach()`.

```javascript
let studentiPrekoTri = []; // Inicijaliziraj prazno polje za spremanje studenata s ocjenom većom od 3
studenti.forEach(ocjenaVecaOdTri); // Pozovi metodu forEach() s callback funkcijom ocjenaVecaOdTri

console.log(studentiPrekoTri); // Ispisuje [{ime: "Ivo", prezime: "Ivić", ocjena: 5}, {ime: "Ana", prezime: "Anić", ocjena: 4}]
```

### 3.2.3 Metoda `filter(callbackFn)`

U prethodnom primjeru koristili smo metodu `forEach()` za prolazak kroz polje i filtriranje studenata s ocjenom većom od 3. Međutim, postoji metoda `filter()` koja radi upravo to - filtrira elemente polja prema zadanim kriterijima.

Metoda `filter()` vraća **novo polje** s elementima koji zadovoljavaju uvjet definiran u `callback` funkciji.

```javascript
let studenti = [
    {ime: "Ivo", prezime: "Ivić", ocjena: 5},
    {ime: "Ana", prezime: "Anić", ocjena: 4},
    {ime: "Maja", prezime: "Majić", ocjena: 3},
    {ime: "Ivan", prezime: "Ivanić", ocjena: 2},
    {ime: "Pero", prezime: "Perić", ocjena: 1},
];

let studentiPrekoTri = studenti.filter(function(student) { // Anonimna funkcija koja provjerava je li ocjena studenta veća od 3
    return student.ocjena > 3;
});
console.log(studentiPrekoTri); // Ispisuje [{ime: "Ivo", prezime: "Ivić", ocjena: 5}, {ime: "Ana", prezime: "Anić", ocjena: 4}]
```

Ili koristeći globalno definiranu `callback` funkciju:

```javascript
function ocjenaVecaOdTri(student) {
    return student.ocjena > 3;
}
let studentiPrekoTri = studenti.filter(ocjenaVecaOdTri); // Pozovi metodu filter() s callback funkcijom ocjenaVecaOdTri
console.log(studentiPrekoTri); // Ispisuje [{ime: "Ivo", prezime: "Ivić", ocjena: 5}, {ime: "Ana", prezime: "Anić", ocjena: 4}]
```

To je to! Metoda `filter()` je korisna za filtriranje polja prema zadanim kriterijima.

### Primjer 1: Tražilica 🔍

**EduCoder šifra**: `trazilica`

Na web stranicama trgovina, često se koristi tražilica koja omogućuje korisnicima pretraživanje proizvoda upisivanjem ključnih riječi ili same riječi proizvoda. Na primjer, korisnik može upisati "mobitel" i dobiti sve proizvode koji sadrže riječ "mobitel" u nazivu. Neke bolje tražilice omogućuju i pretraživanje po cijeni, kategoriji, brendu i sl.

U ovom primjeru ćemo implementirati jednostavnu tražilicu koja će **pretraživati proizvode samo po nazivu**.

Upotrijebit ćemo novo znanje o `callback` funkcijama i metodi `filter()`, kao i poznavanje ugniježdenih struktura.

1. korak je definirati polje objekata `proizvodi` koje sadrži proizvode s nazivom, cijenom i kategorijom.

```javascript
let proizvodi = [
    {naziv: "Mobitel", cijena: 300, kategorija: "elektronika"},
    {naziv: "Slušalice", cijena: 20, kategorija: "elektronika"},
    {naziv: "Punjač", cijena: 10, kategorija: "elektronika"},
    {naziv: "Bicikl", cijena: 500, kategorija: "sport"},
    {naziv: "Tricikl", cijena: 350, kategorija: "sport"},
    {naziv: "Tenisice", cijena: 100, kategorija: "sport"},
    {naziv: "Dres", cijena: 50, kategorija: "sport"},
];
```

Recimo da je naša trgovina vrlo raznolikog asortimana, dodat ćemo u polje `proizvodi` i proizvode iz kategorije `prehrana`.

```javascript
proizvodi.push({naziv: "Jabuka", cijena: 1, kategorija: "prehrana"});
proizvodi.push({naziv: "Jogurt", cijena: 2, kategorija: "prehrana"});
proizvodi.push({naziv: "Mlijeko", cijena: 2, kategorija: "prehrana"});
proizvodi.push({naziv: "Kruh", cijena: 3, kategorija: "prehrana"});
```

2. korak - želimo definirati funkciju `pretraziProizvode()` koja će pretraživati proizvode po nazivu. Funkcija će primati 2 argumenta: polje proizvoda i ključnu riječ za pretraživanje. Na primjer:

```javascript
pretraziProizvode(proizvodi, "mob"); // Ispisuje [{naziv: "Mobitel", cijena: 300, kategorija: "elektronika"}] // vraća polje s 1 elementom

pretražiProizvode(proizvodi, "ten"); // Ispisuje [{naziv: "Tenisice", cijena: 100, kategorija: "sport"}] // vraća polje s 1 elementom

pretražiProizvode(proizvodi, "J"); // Ispisuje [{naziv: "Punjač", cijena: 10, kategorija: "elektronika"}, {naziv: "Jabuka", cijena: 1, kategorija: "prehrana"}, {naziv: "Jogurt", cijena: 2, kategorija: "prehrana"}, {naziv: "Mlijeko", cijena: 2, kategorija: "prehrana"}] // vraća polje s 4 elementa

pretražiProizvode(proizvodi, "cikl"); // Ispisuje [{naziv: "Bicikl", cijena: 500, kategorija: "sport"}, {naziv: "Tricikl", cijena: 350, kategorija: "sport"}] // vraća polje s 2 elementa
```

Idemo definirati kostur funkcije `pretraziProizvode()`:

```javascript
function pretraziProizvode(proizvodi, kljucnaRijec) {
    // Implementacija funkcije
}
```

Ideja je da koristimo metodu `filter()` za filtriranje proizvoda prema ključnoj riječi. 
**Kao rezultat želimo dobiti novo polje filtriranih proizvoda koji sadrže ključnu riječ u nazivu.**

```javascript
function pretraziProizvode(proizvodi, kljucnaRijec) {
    let filtriraniProizvodi = proizvodi.filter(function(proizvod) {
        // Implementacija anonimne callback funkcije koja provjerava je li ključna riječ sadržana u nazivu proizvoda
    });
    return filtriraniProizvodi;
}
```

3. korak - implementacija `callback` funkcije koja provjerava je li ključna riječ sadržana u **nazivu proizvoda**.

```javascript
function pretraziProizvode(proizvodi, kljucnaRijec) {
    let filtriraniProizvodi = proizvodi.filter(function(proizvod) {
        return proizvod.naziv.includes(kljucnaRijec); // Vraća true ako ključna riječ sadrži naziv proizvoda
    });
    return filtriraniProizvodi;
}
```

Problem riješen! Sada možemo pretraživati proizvode po ključnoj riječi.

```javascript
console.log(pretraziProizvode(proizvodi, "MOB")); // Ispisuje: ništa? - vraća prazno polje
```

Problem je što je naš korisnik zaboravio ugasiti Caps Lock 🥲 Kako bi riješili ovaj problem, možemo koristiti metodu `toLowerCase()` koja će pretvoriti ključnu riječ u mala slova (normalizacija teksta).

```javascript
function pretraziProizvode(proizvodi, kljucnaRijec) {
    let filtriraniProizvodi = proizvodi.filter(function(proizvod) {
        return proizvod.naziv.toLowerCase().includes(kljucnaRijec.toLowerCase()); // Vraća true ako ključna riječ sadrži naziv proizvoda bez obzira na velika/mala slova
    });
    return filtriraniProizvodi;
}
```

Sada možemo pretraživati proizvode bez obzira na velika/mala slova.

```javascript
console.log(pretraziProizvode(proizvodi, "MOB")); // Ispisuje: [{naziv: "Mobitel", cijena: 300, kategorija: "elektronika"}]

console.log(pretraziProizvode(proizvodi, "ten")); // Ispisuje: [{naziv: "Tenisice", cijena: 100, kategorija: "sport"}]

console.log(pretraziProizvode(proizvodi, "cikl")); // Ispisuje: [{naziv: "Bicikl", cijena: 500, kategorija: "sport"}, {naziv: "Tricikl", cijena: 350, kategorija: "sport"}]
```

## Vježba 5

**EduCoder šifra**: `samo_parni`

Napišite funkciju `samoParni(brojevi)` koja prima polje brojeva i vraća novo polje koje sadrži samo parne brojeve iz polja `brojevi`. Za implementaciju ne smijete koristiti petlje `for` ili `while`, već metodu `filter()` s odgovarajućom `callback` funkcijom.

Primjer poziva funkcije `samoParni()`:

```javascript
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(samoParni(brojevi)); // Ispisuje: [2, 4, 6, 8, 10]
```

## Vježba 6

**EduCoder šifra**: `filtriraj_osobe`

Dano vam je polje objekata koje predstavlja skup ljudi s njihovim imenima, godinama i zemljama iz kojih dolaze:

```javascript
const osobe = [
    { ime: "Ana", godine: 22, zemlja: "Hrvatska" },
    { ime: "Marko", godine: 16, zemlja: "Slovenija" },
    { ime: "Ivan", godine: 35, zemlja: "Hrvatska" },
    { ime: "Maja", godine: 28, zemlja: "Bosna i Hercegovina" },
    { ime: "Eva", godine: 17, zemlja: "Slovenija" },
    { ime: "Tomislav", godine: 43, zemlja: "Hrvatska" }
];
```

Napišite funkciju `filtrirajOsobe(osobe, minGodine, zemlja)` koja prima polje `osobe`, minimalnu dob `minGodine` i zemlju `zemlja` te vraća novo polje koje sadrži samo osobe minimalne dobi i starije te iz zemlje `zemlja`. Za implementaciju koristite metodu `filter()` s odgovarajućom `callback` funkcijom.

Primjer poziva funkcije `filtrirajOsobe()`:

```javascript
console.log(filtrirajOsobe(osobe, 18, "Hrvatska")); // Ispisuje: [{ ime: "Ana", godine: 22, zemlja: "Hrvatska" }, { ime: "Ivan", godine: 35, zemlja: "Hrvatska" }, { ime: "Tomislav", godine: 43, zemlja: "Hrvatska" }] 
```

## 3.3 Arrow funkcije (`=>`)

U JavaScriptu, `arrow` funkcije predstavljaju kompaktnu alternativu tradicionalnim funkcijskim izrazima (eng. **_function expressions_**). `Arrow` funkcije su kratke i čitljive, a koriste se za **definiranje anonimnih funkcija**.

Arrow funkcije definiraju se koristeći sintaksu strelice `=>`. Međutim, osim sintakse, `arrow` funkcije imaju nekoliko značajki/ograničenja na koje treba obratiti pažnju:
- `arrow` funkcije nemaju vlastiti `this` kontekst, već nasljeđuju `this` kontekst iz roditeljskog okruženja (**najvažnija značajka**).
- `arrow` funkcije ne vežu se na argumente `arguments` objekta.
- `arrow` funkcije ne mogu biti konstruirane pomoću `new` ključne riječi, tj. ne mogu biti korištene kao konstruktori.
- `arrow` funkcije se ne mogu koristiti kao generatori.

Kako izgledaju `arrow` funkcije u usporedbi s tradicionalnim funkcijama? U lekciji Funkcije, doseg varijabli i kontrolne strukture, precizirali smo razliku između `function` deklaracija i `function` izraza odnosno funkcijskih izraza.

Kako bismo jasno definirali sintaksu `arrow` funkcija, prisjetit ćemo se sintakse funkcijskih izraza i deklaracija.

### 3.3.1 Funkcijski izrazi i deklaracije

Rekli smo da su **deklaracije funkcije** definirane ključnom riječi `function` i imenom funkcije. Deklaracije funkcija mogu se koristiti prije nego što su deklarirane (koncept **hoisting**).

```javascript
function zbroji(a, b) {
    return a + b;
}
console.log(zbroji(2, 3)); // Ispisuje 5
```

Deklaracijom klasičnih Javascript funkcijskih izraza na neki način dodjeljujemo funkciju varijabli.

```javascript
let zbroji = function(a, b) {
    return a + b;
}
console.log(zbroji(2, 3)); // Ispisuje 5
```

Kao drugu točku limitacije `arrow` funkcija rekli smo da ne poznaju/ne vežu se na `arguments` objekt. `arguments` objekt je lokalna varijabla funkcije koja sadrži sve argumente koje je funkcija primila.

Na primjeru funkcije `zbroji()` koja prima 2 argumenta, možemo koristiti `arguments` objekt za pristup argumentima funkcije (`a` i `b`).
```javascript
function zbroji(a, b) {
    console.log(arguments); // Ispisuje [2, 3]
    console.log(arguments[0]) // Ispisuje 2
    console.log(arguments[1]) // Ispisuje 3
    return a + b;
}
console.log(zbroji(2, 3)); // Ispisuje 5
```

### 3.3.2 Sintaksa `arrow` funkcija

Arrow funkciju definirat ćemo koristeći sintaksu strelice `=>`. Sintakse `arrow` funkcija su sljedeće:

>**Sintaksa 1 (više parametra i blok naredbi):** `(parametar1, parametar2, parametar3, parametarN) => {blok naredbi}`

Definiramo parametre u zagradama `()` i tijelo funkcije u vitičastim zagradama `{}`.
```javascript
const imeFunkcije = (parametar1, parametar2, ..., parametarN) => {
    // Tijelo funkcije
}
```

>**Sintaksa 2 (jedan parametar i blok naredbi):** `parametar => {blok naredbi}`

Međutim ako se funkcija sastoji samo od jednog parametra, možemo izostaviti zagrade oko parametara.

```javascript
const imeFunkcije = parametar => {
    // Tijelo funkcije
}
```

>**Sintaksa 3 (više parametara i jedna naredba):** `(parametar1, parametar2, parametar3, parametarN) => naredba`
```javascript
const imeFunkcije = (parametar1, parametar2, ..., parametarN) => naredba;
```

>**Sintaksa 4 (jedan parametar i jedna naredba):** `parametar => naredba`

Ako se funkcija sastoji samo od jedne naredbe, možemo izostaviti vitičaste zagrade `{}` i `return` ključnu riječ.
```javascript
const imeFunkcije = parametar => naredba;
```

>**Sintaksa 5 (nema parametra i blok naredbi):** `() => {blok naredbi}`
Ako funkcija ne prima parametre, koristimo prazne zagrade `()`.
```javascript
const imeFunkcije = () => {
    // Tijelo funkcije
}
```

>**Sintaksa 6 (nema parametra i jedna naredba):** `() => naredba`
```javascript
const imeFunkcije = () => naredba;
```

Na prvi pogled sintakse `arrow` funkcija mogu izgledati zbunjujuće, međutim s vježbom ćete se naviknuti na njih.
Iako su iznad navedene različite sintakse `arrow` funkcija, ne morate ih i nećete učiti napamet. Bitno je razumjeti pravila sintakse i znati ih primijeniti ovisno o situaciji.

**Pravila sintakse `arrow` funkcija su:**
> Ako `arrow` funkcija ima više parametara moramo ih definirati u zagradama `()`, inače ih možemo izostaviti.
> 
> Ako `arrow` funkcija ima više naredbi, moramo koristiti vitičaste zagrade `{}`.
> 
> Ako nam se funkcija sastoji samo od jedne naredbe, možemo izostaviti vitičaste zagrade `{}` i `return` ključnu riječ.
> 
> Ako se funkcija sastoji od više parametara i više naredbi, u pravilu ne koristimo arrow funkcije

### 3.3.3 Primjeri `arrow` funkcija

#### Primjer 1: Arrow funkcija koja zbraja 2 broja
Za početak ćemo definirati `arrow` funkciju koja zbraja 2 broja, dakle ekvilaventno funkciji `zbroji()` koju smo definirali ranije.

```javascript
// Deklaracija funkcije zbroji() koja zbraja 2 broja
function zbroji(a, b) {
    return a + b;
}
console.log(zbroji(2, 3)); // Ispisuje 5
```

Naša funkcija `zbroji` sastoji se od 2 parametra i jedne naredbe. Možemo definirati `arrow` funkciju koja zbraja 2 broja koristeći sintaksu 3.
```javascript
// Arrow funkcija koja zbraja 2 broja
const zbroji = (a, b) => a + b;
console.log(zbroji(2, 3)); // Ispisuje 5
```

#### Primjer 2: Arrow funkcija koja ispisuje pozdravnu poruku
Sada ćemo definirati `arrow` funkciju koja ispisuje pozdravnu poruku. Funkcija `pozdrav()` prima jedan parametar `ime` i ispisuje poruku "Pozdrav, ime!".

```javascript
// Deklaracija funkcije pozdrav() koja ispisuje pozdravnu poruku
function pozdrav(ime) {
    console.log(`Pozdrav ${ime}!`);
}
pozdrav("Ana"); // Ispisuje "Pozdrav Ana!"
```

Naša funkcija `pozdrav` sastoji se od 1 parametra i jedne naredbe. Možemo definirati `arrow` funkciju koja ispisuje pozdravnu poruku koristeći sintaksu 4.
```javascript
// Arrow funkcija koja ispisuje pozdravnu poruku
const pozdrav = ime => console.log(`Pozdrav ${ime}!`);
pozdrav("Ana"); // Ispisuje "Pozdrav Ana!"
```

#### Primjer 3: Arrow funkcija koja kvadrira broj

Definirat ćemo `arrow` funkciju koja kvadrira broj. Funkcija `kvadriraj()` prima jedan parametar `broj` i vraća kvadrat tog broja.

```javascript
// Deklaracija funkcije kvadriraj() koja kvadrira broj
function kvadriraj(broj) {
    return broj * broj;
}
console.log(kvadriraj(5)); // Ispisuje 25
```

Naša funkcija `kvadriraj` sastoji se od 1 parametra i jedne naredbe. Možemo definirati `arrow` funkciju koja kvadrira broj koristeći sintaksu 4.
```javascript
let kvadriraj = broj => broj * broj;
console.log(kvadriraj(5)); // Ispisuje 25
```

#### Primjer 4: Arrow funkcija bez parametara

Definirat ćemo funkciju koja recimo da inicijalizira našu aplikaciju. Funkcija `inicijaliziraj()` ne prima parametre i ispisuje poruku "Aplikacija inicijalizirana".

```javascript
// Deklaracija funkcije inicijaliziraj() koja inicijalizira aplikaciju
function inicijaliziraj() {
    console.log("Aplikacija inicijalizirana");
}
inicijaliziraj(); // Ispisuje "Aplikacija inicijalizirana"
```

Naša funkcija `inicijaliziraj` ne prima parametre i sastoji se od jedne naredbe. Možemo definirati `arrow` funkciju koja inicijalizira aplikaciju koristeći sintaksu 5 ili 6.
```javascript
let inicijaliziraj = () => console.log("Aplikacija inicijalizirana");
inicijaliziraj(); // Ispisuje "Aplikacija inicijalizirana"
```

`arrow` funkcije su uvijek anonimne, tj. nikada ih ne imenujemo. Međutim, možemo ih dodijeliti varijabli ili koristiti kao argument funkcije, kao što smo pokazali u primjerima iznad.

Sljedeći primjeri `arrow` funkcija su također ispravni. Jedina razlika je što ih ovdje ne pohranjujemo u varijable, poput funnkcijskih izraza.
Ove funkcije su anonimne i koriste se kao callback funkcije, same po sebi se neće pozvati.

```javascript
(a,b) => a + b;
```

```javascript
() => console.log("Hello, World!");
```


>`arrow` funkcije su korisne za definiranje jednostavnih funkcija koje se koriste kao callback funkcije.