let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobby: "coding",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

let newData = {...data,
    name : "Ahmad Jundan Harish",
    username : "heyjuund",
    email : "harisjundan@gmail.com",
    hobby : ["running","traveling"]}

console.log(newData)

let {street,city} = data.address
console.log(street +', '+ city)