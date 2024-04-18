# Programiranje u skriptnim jezicima (PJS)

**Nositelj**: doc. dr. sc. Nikola Tanković  
**Asistenti**:

- Luka Blašković, univ. bacc. inf.
- Alesandro Žužić, univ. bacc. inf.

**Ustanova**: Sveučilište Jurja Dobrile u Puli, Fakultet informatike u Puli

<img src=https://fipu.unipu.hr/_pub/themes_static/unipu2020/fipu/icons/fipu_hr.png style="width:40%"></img>

# [4] Ugniježđene strukture i Napredne funkcije

[comment]: <> (Ažurirati sliku - logojs/js0.png)
<img src="https://github.com/lukablaskovic/FIPU-PJS/blob/main/0.%20Template/logojs/js4.png?raw=true" style="width:9%; float:right;"></img>

<p style="float: clear">"Baratanje" ugniježđenim strukturama (***eng. nested structures***) je jedna od ključnih vještina u programiranju. Bilo to u obliku ugniježđenih petlji, objekata, funkcija, ili JSON objekata. Dohvat podataka s različitih API-ja, obrada podataka, ili pisanje algoritama, sve to zahtijeva dobro poznavanje ugniježđenih struktura. U ovoj skripti naučit ćete pisati ugniježđene strukture u JavaScriptu i napredne funkcije za jednostavniji rad s njima.</p>

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
    - [2.2.1 Iteracija kroz polja unutar objekata](#221-iteracija-kroz-polja-unutar-objekata)
  - [2.3 Objekti unutar polja](#23-objekti-unutar-polja)

<br>

# 1. Uvod u ugniježđene strukture

Do sad smo naučili da možemo ugniježđivati selekcije i petlje, pa i funkcije. No, što ako želimo ugniježđivati objekte? Ili polja? Ili funkcije koje vraćaju objekte? Ili objekte koji sadrže funkcije, itd. U kratko, ugniježđene strukture možemo podijeliti u **4 kategorije**:
>1. **Objekti unutar objekata** `{{}}`
>2. **Polja unutar objekata** `{[]}`
>3. **Objekti unutar polja** `[{}]`
>4. **Polja unutar polja** `[[]]`

Prije nego odradimo navedene kategorije, prisjetimo se ugniježđenih selekcija, petlji i funkcija.
Primjer ugniježdene selekcije:

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

Primjer ugniježdene petlje:

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

Recimo da želimo napraviti pohraniti podatke o korisniku naše aplikacije. Želimo pohraniti `ime`, `prezime`, `adresa` i `kontakt`.
Pod adresu želimo pohraniti `ulica`, `grad` i `poštanski broj`. Pod kontakt želimo pohraniti `telefon` i `email`.

Prvo ćemo pohraniti u jednostavan objekt bez ugniježđenih struktura:

```javascript
let korisnik = {
    ime: "Ivo",
    prezime: "Ivić",
    adresa: "Ulica 123, 52100 Pula",
    kontakt: "0911234567",
    email: "ivo@gmail.com"
};
```
Primjetite zašto je ovakav zapis nezgrapan. Kako bi dohvatili ulicu, moramo koristiti `split` metodu. Kako dohvatiti poštanski broj? Idemo problem riješiti **ugniježđenim objektima**.
  
```javascript
let korisnik = {
    ime: "Ivo",
    prezime: "Ivić",
    adresa: {
        ulica: "Ulica 123",
        grad: "Pula",
        postanskiBroj: "52100"
    },
    kontakt: {
        telefon: "0911234567",
        email: "ivo@gmail.com"
    }
};
```
Sada možemo jednostavno dohvatiti ulicu, grad, poštanski broj, telefon i email, a naš kod je pregledniji. Na jednak način kako dohvaćamo atribute objekata, možemo dohvaćati i atribute ugniježđenih objekata, koristeći `.` operator.

```javascript
console.log(korisnik.adresa.ulica); // Ispisuje "Ulica 123"
console.log(korisnik.adresa.grad); // Ispisuje "Pula"
console.log(korisnik.adresa.postanskiBroj); // Ispisuje "52100"

console.log(korisnik.kontakt.telefon); // Ispisuje "0911234567"
console.log(korisnik.kontakt.email); // Ispisuje "ivo@gmail.com"
```

# 2. Ugniježđene strukture

## 2.1 Objekti unutar objekata

Često ćemo se u programirajnu susretati s potrebom za pohranjivanjem složenih podataka i specifikacije nekakve hijerarhijske strukture. Primjerice, kako ćemo pohraniti podatke o korisniku? Korisnik ima ime, prezime, adresu i kontakt. Adresa se sastoji od ulice, grada i poštanskog broja. Kontakt se sastoji od telefona i emaila. Navedeno možemo postići pomoću ugniježđenih objekata, tj. objekata unutar objekata.

Objekte ugniježđujemo na način da stvaramo **objekte unutar objekata**, doslovno. Sintaksa je sljedeća:

```javascript
let objekt1 = {
    svojstvo1: vrijednost1,
    svojstvo2: vrijednost2,
    objekt2: {
        svojstvo3: vrijednost3,
        svojstvo4: vrijednost4
    },
    objekt3: {
        svojstvo5: vrijednost5,
        svojstvo6: vrijednost6
    }
};
```
Za dohvaćanje podataka podataka kod ugniježđenih objekata koristimo već poznate operatore `.` ili `[]`. Primjer:

```javascript
console.log(objekt1.svojstvo1); // Ispisuje vrijednost1
console.log(objekt1.objekt2.svojstvo3); // Ispisuje vrijednost3
console.log(objekt1["objekt2"]["svojstvo3"]); // Ispisuje vrijednost3
```

Idemo definirati dummy konfiguracijski objekt za našu aplikaciju. Konfiguracijski objekt se često definira kao objekt u koji ćemo definirati neke postavke naše aplikacije. Primjer:

```javascript
let konfiguracija = {
    server: {
        host: "localhost",
        port: 8080
    },
    bazaPodataka: {
        url: "mongodb://localhost:27017",
        ime: "mojaBaza"
    },
    sigurnost: {
        tip: "OAuth2",
        tajna: "tajniKljuc"
    }
};

console.log(konfiguracija.server.host); // Ispisuje "localhost
console.log(konfiguracija.bazaPodataka.url); // Ispisuje "mongodb://localhost:27017"
console.log(konfiguracija.sigurnost.tip); // Ispisuje "OAuth2"
```

Podobjekt može biti definiran i izvan objekta `konfiguracija`:
  
```javascript
  let server = {
      host: "localhost",
      port: 8080
  };

  let bazaPodataka = {
      url: "mongodb://localhost:27017",
      ime: "mojaBaza"
  };

  let sigurnost = {
      tip: "OAuth2",
      tajna: "tajniKljuc"
  };
  // Glavni objekt
  let konfiguracija = {
      server: server, // Podobjekt
      bazaPodataka: bazaPodataka,  // Podobjekt
      sigurnost: sigurnost  // Podobjekt
  };
```
Što ako ispišemo cijeli objekt `konfiguracija`? Ispisat će se cijeli objekt, uključujući i podobjekte.

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

Recimo da hoćemo dodati `protocol` podataka u naš objekt `server`. To radimo na isti način kao i kod dodavanja novih podataka u obične objekte.

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

Ima li smisla dodavati naknadno svojstva? Ako ne znamo unaprijed koja će svojstva biti potrebna, onda ima smisla. Ako znamo unaprijed, onda je bolje definirati sva svojstva odmah. Primjerice, ako znamo svojstva `server` konfiguracije, možemo odmah reći:

```javascript
let konfiguracija = {
    server: {
        host: "localhost",
        port: 8080,
        protocol: "http"
    }
};
```

Ako ne znamo, imamo više opcija:

1. Možemo definirati prazan objekt i dodavati svojstva kako ih trebamo.

```javascript
let konfiguracija = {
    server: {}
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
        protocol: "" // Prazni string jer nagađamo da će biti string
    }
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

Naravno, objekte možemo i dublje ugniježđivati, koliko god želimo. U praksi, nećemo ići dublje od 3-4 razine ugniježđivanja, jer postaje nepraktično i teško za održavanje.

## 2.2 Polja unutar objekata

Zamislite da radite neku web trgovinu, morate na neki način pohranjivati podatke o kupcu i narudžbama. Podaci koje želimo pohraniti su: `ime`, `prezime`, `adresa`, `kontakt` i `narudžbe`. Pod adresa želimo pohraniti `ulica`, `grad` i `poštanski broj`. Pod kontakt želimo pohraniti `telefon` i `email`. Kako ćemo pohraniti narudžbe? Narudžba se sastoji od više proizvoda, dakle moramo koristiti polja!

Prvo ćemo pohraniti osnovne podatke o kupcu:
```javascript
let kupac = {
    ime: "Ivo",
    prezime: "Ivić",
    adresa: "Ulica 123, 52100 Pula",
    kontakt: "0911234567",
    email: "iivic@gmail.com"
};
```
Ideja je da svojstva `adresa`, `kontakt` i `narudžbe` budu objekti. Definirajmo ih:
Definirat ćemo i objekt narudžbe gdje ćemo pohraniti proizvode koje je kupac naručio i ukupnu cijenu narudžbe.
> Novi oblik ugniježdene strukture koji sad moramo koristiti jesu **polja unutar objekata**.
```javascript
let kupac = {
    ime: "Ivo",
    prezime: "Ivić",
    adresa: {
        ulica: "Ulica 123",
        grad: "Pula",
        postanskiBroj: "52100"
    },
    kontakt: {
        telefon: "0911234567",
        email: "iivic@gmail.com"
    },
    narudzbe: {
        proizvodi: ["Mobitel", "Slušalice", "Punjač"], 
        ukupnaCijena: 1500
    }
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

### 2.2.1 Iteracija kroz polja unutar objekata

Kako iterirati kroz polja unutar objekata? Na primjer, kako ispisati sve proizvode koje je kupac naručio?
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
    cijena: 300
};
let proizvod_2 = {
    naziv: "Slušalice",
    kolicina: 1,
    cijena: 20
};
let proizvod_3 = {
    naziv: "Punjač",
    kolicina: 2,
    cijena: 10
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
        postanskiBroj: "52100"
    },
    kontakt: {
        telefon: "0911234567",
        email: "iivic@gmail.com"
    },
    narudzbe: {
        proizvodi: [ // U polje smo dodali objekte proizvoda
            {
                naziv: "Mobitel",
                kolicina: 1,
                cijena: 300
            },
            {
                naziv: "Slušalice",
                kolicina: 1,
                cijena: 20
            },
            {
                naziv: "Punjač",
                kolicina: 2,
                cijena: 10
            }
        ], 
        ukupnaCijena: 0
    }
};
```
> Novi oblik ugniježdene strukture koji smo sad iskoristili jesu **objekti unutar polja**.

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
- Što ako kupac ima više narudžbi? Gdje to dodajemo?

Rješenje je da svaka narudžba bude zaseban objekt, a svaku narudžbu pohranimo u **polje objekata**.

Dakle, do sada smo imali objekt `narduzbe` koji sadržava polje objekata `proizvodi`. Narudžbe su množina narudžbi, pa ima smisla da budu polje. Svaka narudžba sastoji se potencijano više stavki (proizvoda), pa je svaka narudžba objekt.

```javascript
let narudzba_1 = {
    stavke: [
        {
            naziv: "Mobitel",
            kolicina: 1,
            cijena: 300
        },
        {
            naziv: "Slušalice",
            kolicina: 1,
            cijena: 20
        },
        {
            naziv: "Punjač",
            kolicina: 2,
            cijena: 10
        }
    ],
    ukupnaCijena: 0
};
```

Zašto ne bi zamijenili svojstvo za ukupnu cijenu s odgovarajućom metodom? Dodat ćemo metodu koja za svaku stavku (proizvod) računa ukupnu cijenu narudžbe.

```javascript
let narudzba_1 = {
    stavke: [
        {
            naziv: "Mobitel",
            kolicina: 1,
            cijena: 300
        },
        {
            naziv: "Slušalice",
            kolicina: 1,
            cijena: 20
        },
        {
            naziv: "Punjač",
            kolicina: 2,
            cijena: 10
        }
    ],
    ukupnaCijena: function() { // Vraća ukupnu cijenu narudžbe (340)
        let ukupnaCijena = 0;
        for (let stavka of this.stavke) {
            ukupnaCijena += stavka.kolicina * stavka.cijena;
        }
        return ukupnaCijena;
    },
    valuta: "eur" // Možemo dodati i valutu kao zasebno svojstvo 
};
```
Sada ćemo svojstvo `narudzbe` iz objekta `kupac` pretvoriti u polje objekata i u njega dodati `narudzba_1`. 

```javascript
let kupac = {
    ime: "Ivo",
    prezime: "Ivić",
    adresa: {
        ulica: "Ulica 123",
        grad: "Pula",
        postanskiBroj: "52100"
    },
    kontakt: {
        telefon: "0911234567",
        email: "iivic@gmail.com"
    },
    narudzbe: [
        narudzba_1 // Dodajemo narudžbu (narudzba_1) u polje narudžbi
    ]
};
```
Kako sad dohvatiti ukupnu cijenu prve narudžbe našeg kupca?
```javascript
console.log(kupac.narudzbe[0].ukupnaCijena()); // 340 
```

>Da rezimiramo, u ovom primjeru imali smo objekt `narudzbe` koji je postao polje objekata `narudzba`. Svaka narudžba je objekt koji sadržava polje objekata `stavke`. Dodatno, svaka `stavka` je objekt (naziv, kolicina, cijena). Svaka narudžba ima svoju ukupnu cijenu, koja je metoda objekta `narudzba`.