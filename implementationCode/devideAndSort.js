const devideAndSort = (param) => {
    if (typeof param === "number"){
        const devide = param.toFixed().split(0).map(e => e.split('').sort((a,b) => a - b).join("")).join("")
        console.log(devide)
    }

// const number = param.toString().split(0)
  // const result = []
  // for(let a = 0; a<=number.length -1;a++){
  //     const numberAsc = number[a].split('').sort((a,b) => a-b).join('')
  //     result.push(numberAsc)
  // }
  // return result.join('')
    
    else (console.log("Parameter must be number"))
}
devideAndSort(5956560159466056)

