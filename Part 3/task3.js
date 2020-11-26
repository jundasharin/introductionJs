// 1 ========================================================================================================================

const cekMenu = menu => {
    console.log('Loading...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataMenu = ['kopi', 'teh', 'kopisusu', 'wedangjahe', 'airmineral']
            const cek = dataMenu.find((item)=>{
                return item === menu.toLowerCase()
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Tidak ada di menu'))
            }
        }, 1000)
    })
}

cekMenu('teh')
    .then(res => console.log(`${res}nya ada`))
    .catch(err => console.log(err.message))

//2 ========================================================================================================================

const cekKetersediaan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ready = false
            if(ready){
                resolve()
            }else{
                reject(new Error('Eh... Kosong Broo'))
        }}, 2500)     
        setTimeout(() => {
            console.log('Bentar')
        }, 2000)
    })
}

const pesan = async(param) => {
    try{
        await(cekKetersediaan(param))
        console.log(`Mohon ditunggu`)
    }catch(err){
        console.log(err.message)
    }
}

pesan()
