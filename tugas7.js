var tinggiBadan = [155,164,159,160,174,168,158,178,180,170];

console.log("INI MENGGUNAKAN FOR OF !")
for (let a of tinggiBadan) {
    console.log("Tinggi:",a,"CM")
};
console.log("--------------------------");
console.log("INI MENGGUNAKAN PERULANGAN BIASA !")
for (var cm=0; cm<tinggiBadan.length; cm++) {
    console.log("Tinggi:",tinggiBadan[cm],"CM")
};
console.log("--------------------------");

/*
Kesimpulannya perbedaan perulangan biasa dengan perulangan menggunakan for of
adalah dalam penulisannya saja. dimana jika menggunakan for of, penulisan lebih simple
*/
