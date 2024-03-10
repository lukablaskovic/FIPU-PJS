function lessby20_others(x, y, z) {
    // Provjeravamo za broj x je li veci ili jedank 20 i je li manji od barem jednog od preostala 2 broja (x < y || x < z)
    // Provjeravamo za broj y je li veci ili jednak 20 i je li manji od barem jednog od preostala 2 broja (y < x || y < z)
    // Provjeravamo za broj z je li veci ili jednak 20 i je li manji od barem jednog od preostala 2 broja (z < x || z < y)

    return (
        (x >= 20 && (x < y || x < z)) ||
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < y || z < x))
    )
}

console.log(lessby20_others(23, 45, 10)) //true
console.log(lessby20_others(23, 23, 10)) //false
console.log(lessby20_others(10, 25, 75)) //true
