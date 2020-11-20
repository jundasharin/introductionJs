//1. Number - toFixed
//Membuat format angka dengan jumlah digit tertentu setelah angka desimal/koma

//contoh:
let nomer = 123.4567

console.log('1. hasil nomer.toFixed(6): '+ nomer.toFixed(2))

//2. Number - toPrecision
//Mengembalikan string yang mewakili objek angka ke presisi yang ditentukan

console.log('2. hasil nomer.toPrecision(6): '+ nomer.toPrecision(6))

//3. Number - valueOf
//Mengembalikan nilai dari objek bilangan yang ditentukan

console.log('3. hasil nomer.valueOf(): '+ nomer.valueOf())

//4. String - concat
//Menambah dua string atau lebih dan dikembalikan dalam satu string baru

let str = "Lorem ipsum dolor sit amet, "
let strr = "consectetur adipisicing elit, "
let strrr = "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

console.log('4. '+ str.concat(strr,strrr))

//5. String - charAt
//Mengembalikan karakter dari indek yang ditentukan

console.log('5. ' + str.charAt(4))

//6. String - indexOf
//Mengembalikan indeks objek string yang dipanggil dalam kemunculan pertama dari nilai yang ditentukan

console.log('6. ' + str.indexOf("dolor"[1]))

//7. String - lastIndexOf
//Mengembalikan indeks objek string yang dipanggil dalam kemunculan terakhir dari nilai yang ditentukan

console.log('7. ' + str.lastIndexOf("dolor"[1]))

//8. Array - includes
//Mengecek apakah pada array memenuhi suatu kondisi atau tidak

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('8. ' + arr.includes(1))

//9. Array - every
//Mengecek apakah setiap elemen pada array memenuhi suatu kondisi atau tidak

const every = arr.every(angka => angka < 6)

console.log('9. ' + every)

//10. Array - reduce
//Mengurangi/memperkecil elemen array menjadi single value dengan menjumlah setiap elemen

const jumlah = arr.reduce((total, nilai) => total + nilai, 2)

console.log('10. ' + jumlah)