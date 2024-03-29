# Programiranje u skriptnim jezicima (PJS)

**Nositelj**: doc. dr. sc. Nikola Tanković  
**Asistenti**:

- Luka Blašković, univ. bacc. inf.
- Alesandro Žužić, univ. bacc. inf.

**Ustanova**: Sveučilište Jurja Dobrile u Puli, Fakultet informatike u Puli

<img src=https://fipu.unipu.hr/_pub/themes_static/unipu2020/fipu/icons/fipu_hr.png style="width:40%"></img>

# [4] Ugniježđene strukture i napredne funkcije

[comment]: <> (Ažurirati sliku - logojs/js0.png)
<img src="https://github.com/lukablaskovic/FIPU-PJS/blob/main/0.%20Template/logojs/js4.png?raw=true" style="width:9%; float:right;"></img>

<p style="float: clear">"Baratanje" ugniježđenim strukturama je jedna od ključnih vještina u programiranju. Bilo to u obliku ugniježđenih petlji, objekata, funkcija, ili JSON objekata. Dohvat podataka s različitih API-ja, obrada podataka, ili pisanje algoritama, sve to zahtijeva dobro poznavanje ugniježđenih struktura. Cilj ove skripte je objasniti ugniježđene strukture i napredne funkcije za jednostavniji rad s njima.</p>

<br>

## Sadržaj

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Programiranje u skriptnim jezicima (PJS)](#programiranje-u-skriptnim-jezicima-pjs)
- [\[4\] Ugniježđene strukture i napredne funkcije](#4-ugniježđene-strukture-i-napredne-funkcije)
  - [Sadržaj](#sadržaj)
- [1. Uvod u ugniježđene strukture](#1-uvod-u-ugniježđene-strukture)
- [2. Ugniježđeni objekti](#2-ugniježđeni-objekti)
  - [2.1 Manipulacije podataka unutar ugniježđenih objekata](#21-manipulacije-podataka-unutar-ugniježđenih-objekata)
    - [2.1.1 Izmjena podataka unutar ugniježđenih objekata](#211-izmjena-podataka-unutar-ugniježđenih-objekata)
    - [2.1.2 Dodavanje novih podataka unutar ugniježđenih objekata](#212-dodavanje-novih-podataka-unutar-ugniježđenih-objekata)
    - [2.1.3 Brisanje podataka unutar ugniježđenih objekata](#213-brisanje-podataka-unutar-ugniježđenih-objekata)

<br>

# 1. Uvod u ugniježđene strukture

Do sad smo naučili da možemo ugniježđivati selekcije i petlje, pa i funkcije. No, što ako želimo ugniježđivati objekte? Ili polja? Ili funkcije koje vraćaju objekte? Ili objekte koji sadrže funkcije, itd. Sve to možemo, i to je ono što ćemo naučiti u ovoj skripti.

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

# 2. Ugniježđeni objekti

Najjednostavnije rečeno, **ugniježđeni objekti** su objekti koji sadrže druge objekte. U prethodnom primjeru smo vidjeli kako možemo ugniježđivati objekte.

Ugniježđeni objekti su korisni jer nam omogućuju da strukturiramo podatke na način koji je pregledniji i lakši za korištenje. Također, omogućuju nam da grupiramo slične podatke zajedno.

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

## 2.1 Manipulacije podataka unutar ugniježđenih objekata

### 2.1.1 Izmjena podataka unutar ugniježđenih objekata

Kako mijenjati podatke unutar ugniježđenih objekata? Na primjer, kako promijeniti `host` servera u našem objektu `konfiguracija`? Na isti način kako dohvaćamo podatke iz ugniježđenih objekata, koristeći `.` operator.

```javascript
konfiguracija.server.host = "192.168.5.5";
console.log(konfiguracija.server.host); // Ispisuje "192.168.5.5"
```

### 2.1.2 Dodavanje novih podataka unutar ugniježđenih objekata

Recimo da hoćemo dodati `protocol` podataka u naš objekt `server`. To radimo na isti način kao i kod dodavanja novih podataka u obične objekte.

```javascript
konfiguracija.server.protocol = "http";
console.log(konfiguracija.server.protocol); // Ispisuje "http"
```

### 2.1.3 Brisanje podataka unutar ugniježđenih objekata

Kako obrisati podatke unutar ugniježđenih objekata? Na primjer, kako obrisati `port` servera u našem objektu `konfiguracija`? Koristimo `delete` naredbu.

```javascript
delete konfiguracija.server.port; // vraća true
console.log(konfiguracija.server.port); // Ispisuje "undefined"
```

