const matematika = 80;
const bInd = 90;
const bIng = 89;
const ipa = 69;

const total = (matematika + bInd + bIng + ipa)/4;

const option = [{nilai: 90,message: "A"},{nilai: 80,message: "B"},{nilai: 70,message: "C"},{nilai: 60,message: "D"},{nilai: 0,message: "E"}];

const nilaiArr = [matematika, bInd, bIng, ipa];

const checkNilai = nilaiArr.every((v) => v <= 100 && v >= 0 && typeof v === "number");

if (!matematika || !bInd || !bIng || !ipa) {
    console.log("Semua mapel harus di isi");
} else if(!checkNilai) {        
    console.log("Error: Nilai tidak boleh lebih dari 100 atau kurang dari 0 dan nilai harus berupa angka");
}else{
    const x = option.find((v) => total >= v.nilai);
    console.log(`Rata-rata = ${total} \nGrade = ${x.message}`)};