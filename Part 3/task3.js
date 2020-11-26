// 1

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
        },  2000)
    })
}

cekMenu('teh')
    .then(res => console.log(`${res}nya ada`))
    .catch(err => console.log(err.message))

//2

const cekId = (param) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${param}`)
    .then(res => res.json())
    .then(result => {
        if(result.error){
            console.log(result.error)
        }else{
            console.log(result.title)
        }
    })
    .catch(err => console.log(err))
}

cekId(10)