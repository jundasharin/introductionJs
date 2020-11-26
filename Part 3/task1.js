const cekHariKerja = day => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            const cek = dataDay.find((item)=>{
                return item === day.toLowerCase()
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },  1000)
    })
}

// Pengunaan then dan catch
cekHariKerja('sabtu')
    .then(res => console.log(`${res} KERJA KERJA KERJA`))
    .catch(err => console.log(err.message))

// Jika langsung di console.log(cekHariKerja('SENIN')) maka status promisenya pending untuk menangkap data resolve / reject menggunakan then dan catch
// Method then akan terpanggil jika promisenya fulfilled
// Method catch akan terpanggil jika status promisenya rejected

// Penggunaan try and catch
const asyncWeek = async(param) => {
    try{
        const result = await(cekHariKerja(param))
        console.log(`${result} TIPES`)
    }catch(err){
        console.log(err.message)
    }
}

asyncWeek('selasa')

// async mengubah function menjadi asynchronous
// Await Menunda eksekusi hingga proses asynchronous selesai 
// Didalam block try disimpan code javascript yang mungkin terjadi error / akan mengembailkan nilai jika promisenya fulfilled
// Didalam block catch akan menangkap error yang terjadi pada block try apabila pada block try si error muncul