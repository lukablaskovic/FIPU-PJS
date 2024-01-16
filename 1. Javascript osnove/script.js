function showMessage() {
  let cijenaProizvoda = 5e3; // 5000 u eksponencijalnom zapisu
  let valuta = "EUR";

  let formatiranaCijena = `Cijena proizvoda je ${Number(
    cijenaProizvoda
  )} ${valuta}.`;
  console.log(formatiranaCijena);
}
