const printSegitiga = "aa";

if(typeof printSegitiga == "number"){
	for (let i = printSegitiga; i >= 1; i--) {
		let num = '';

		for (let j = 1; j <= i; j++) {
			num += j;
		}
	console.log(num);
}}
else (console.log("Data harus number"))