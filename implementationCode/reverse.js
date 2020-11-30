const reverseString = (str)=> {
    const currentString = str.split(' ');
    let reverseStr = '';
   for (let i = currentString.length - 1; i >= 0; i--) {
     reverseStr += currentString[i] + ' ';
    }
    return reverseStr
   }
   
   console.log(reverseString('Saya belajar javascript'));