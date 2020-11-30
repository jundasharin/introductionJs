const arkFood = (harga, voucher, jarak, pajak) => {
    
    console.log(`Harga : ${harga}`)
    
    const ongkir = () => {
        if (jarak <= 2){
          return 5000
        } else {
            return 5000 + ((jarak-2)*3000)
        }}

    const hargaAntar = ongkir()
    const kenaPajak = 0.05 * harga

    if (harga >= 50000){
        if (voucher == "ARKFOOD5"){
            let potongan = harga * 0.5 
            if (potongan >= 50000 ){
                console.log(`Potongan : 50000`)
                let total = harga - 50000
                if (pajak === true){
                    console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
                } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
            } else {
                console.log(`Potongan : ${potongan}`)
                let total = harga - potongan
                if (pajak === true){
                    console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
                } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
            }
        } else if(voucher == "DITRAKTIRDEMY"){
            let potongan = harga * 0.6 
            if (potongan >= 30000 ){
                console.log(`Potongan : 30000`)
                let total = harga - 30000
                if (pajak === true){
                    console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
                } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
            } else {
                console.log(`Potongan : ${potongan}`)
                let total = harga - potongan
                if (pajak === true){
                    console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
                } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
            }
        } else {
            console.log(`Potongan : Tidak Ada Potongan`)
            if (pajak === true){
                console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
            } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
        }

    } else if (harga >= 25000){
        if (voucher == "DITRAKTIRDEMY"){
            let potongan = harga * 0.6 
            if (potongan >= 30000 ){
                console.log(`Potongan : 30000`)
                let total = harga - 30000
                if (pajak === true){
                    console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
                } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
            } else {
                console.log(`Potongan : ${potongan}`)
                let total = harga - potongan
                if (pajak === true){
                    console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
                } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
            }
        }
    } else {
        console.log(`Potongan : Tidak Ada Potongan`)
        if (pajak === true){
            console.log(`Harga Antar : ${hargaAntar} \nPajak : ${kenaPajak}\nSub Total : ${total+hargaAntar+kenaPajak}`)
        } else (console.log(`Harga Antar : ${hargaAntar} \nPajak : Tidak Ada Pajak\nSub Total : ${total+hargaAntar}`))
    }
}

arkFood(75000,"DITRAKTIRDEMY",3,false)