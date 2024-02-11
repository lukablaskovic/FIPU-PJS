function sve_o_krugu(r) {
  function povrsina(r) {
    return r * r * Math.PI;
  }
  let opseg = function (r) {
    return 2 * r * Math.PI;
  };
  console.log("Površina kruga je: " + povrsina(r));
  console.log("Opseg kruga je: " + opseg(r));
  let zbroj = povrsina(r) + opseg(r);
  return zbroj;
}
let zbroj = sve_o_krugu(5);
console.log(zbroj);
