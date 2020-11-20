const searchName = (karakter, limit, useCallback) => {
    const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope'
    ]

    let cari = (karakter) => {
        return name.filter((cek) =>
        cek.toLowerCase().indexOf(karakter.toLowerCase()) > -1
        )};

    useCallback(cari(karakter),limit)
    //console.log(cari(karakter))
}

const callback = (data,limit) =>{
    let hasil = data.slice (0,limit)
    console.log(hasil)
}

searchName("AN",2, callback);