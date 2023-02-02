const os=require('os')
console.log(os.userInfo())
console.log(os.uptime())//en segundos
console.log(os.platform())//sistema operativo
console.log(os.totalmem())//en bite
console.log(os.freemem())

///o  se puede mostar con tablas///

console.table({
    os: os.platform(),
    version: os.release(),
    totaleMemory: os.totalmem()
})