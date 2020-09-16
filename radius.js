const readline = require('readline')
const put = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var userInput;
put.on('line', (data) => {
    userInput = Number(data)
})

function circum(r){
    console.log((2*Math.PI*r).toFixed(2))
}



put.on('close',()=>{
    circum(userInput)
})
