const palindrome = (str) => {
    if (typeof str === "string"){
        let lowStr = str.toLowerCase()
        let reverseStr = lowStr.split('').reverse().join('')
        if (reverseStr === lowStr){
            console.log("Palindrom")
        }
        else(console.log("Bukan Palindrom"))
    
    }else (console.log("Parameter harus string"))  
}

palindrome("malam")