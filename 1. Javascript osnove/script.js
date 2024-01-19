function showMessage() {
  const ime = "Luka"
  const prezime = "Blašković"
  let godina_rodenja = 2000
  let trenutno_vrijeme = new Date()
  console.log(trenutno_vrijeme.getFullYear()+1)
  console.log(trenutno_vrijeme.getFullYear() - godina_rodenja)

  const ime_duljina = ime.length
  const prezime_duljina = prezime.length

  console.log(ime_duljina === prezime_duljina)

  let x = (((ime_duljina + prezime_duljina) ** 2) + godina_rodenja++) / 2
  console.log(x)
  let xsc = 1.0845e3
  console.log(x == xsc)
}


