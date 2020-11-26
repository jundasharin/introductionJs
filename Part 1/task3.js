const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir) {
        const valueBetween = (value) =>{
            return value >= nilaiAwal && value <= nilaiAkhir
        }
        let filter = dataArray.filter(valueBetween).sort((a,b) => a-b );
        
        if (dataArray.length > 5) {
        console.log(filter)
        }
        else (console.log("Jumlah angka dalam dataArray tidak ada"))
    }
    else (console.log("Nilai akhir harus lebih besar dari awal"))
} 

seleksiNilai(3,10,[4,6,7,8]);