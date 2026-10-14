# Stanje skripti — PJS

Iz korijena repozitorija: `python3 script-patcher/build_status.py` generira `_site/index.html`.
Lokalni pregled: `python3 -m http.server 8000 --directory _site`.
Pregled svih skripti: `http://localhost:8000/`.
Izdvojeni prikaz: `http://localhost:8000/?script=PJS1`.
Provjere: `python3 script-patcher/test_status.py`.

Izvor datuma je postojeće polje `🆙 Posljednje ažurirano` u svakoj glavnoj Markdown skripti.
Neispravan, nedostajući ili višestruki datum prekida generiranje; datum se ne izmišlja.
Generator koristi postojeći odabir glavnih Markdown/PDF parova. PDF poveznice vode na GitHub,
a poveznica pri dnu pregleda vodi u postojeću Drive mapu. Nema javnih tokena ni API poziva.

## Jednokratno uključivanje (nakon odobrenog pusha)

U repozitoriju otvoriti Settings → Pages → Build and deployment → Source → GitHub Actions.
Provjeriti da okruženje `github-pages` dopušta objavu s grane `main`.
Pokrenuti postojeći workflow „Sync course materials to Google Drive”.
Status se objavljuje tek nakon uspješnog prijenosa na Drive i commita/pusha generiranih PDF-ova.
Ako objava stranice ne uspije, postojeća stranica ostaje na prethodnoj verziji; ponovno pokrenuti workflow.

## Merlin

Predviđeni URL nakon uključivanja: https://www.lukablaskovic.me/FIPU-PJS/
U HTML prikaz opisa zalijepiti pregled:

```html
<iframe src="https://www.lukablaskovic.me/FIPU-PJS/" title="Stanje skripti iz vježbi" width="100%" height="1100" style="border:0" loading="lazy"></iframe>
```

Ili pojedinu skriptu (zamijeniti oznaku prema potrebi):

```html
<iframe src="https://www.lukablaskovic.me/FIPU-PJS/?script=PJS1" title="PJS1 — posljednje ažurirano" width="100%" height="220" style="border:0" loading="lazy"></iframe>
```

Visinu prilagoditi prikazu u Merlinu; na užim zaslonima okvir se može pomicati.
Nakon spremanja provjeriti da Merlin nije uklonio iframe, zatim provjeriti studentski prikaz.
Prikaz čita objavljene podatke pri otvaranju/ponovnom učitavanju; nije praćenje uživo.
Pregled i izdvojeni prikaz dijele isti generirani HTML i iste datume.

Provjera preglednika (nakon `make setup`): `node script-patcher/test_status.mjs`.

Izdvojeni prikaz zahtijeva JavaScript; bez njega prikazuje se popis svih skripti s napomenom.
