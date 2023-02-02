console.log('first')
setTimeout(()=>{
    console.log('second')
},3000) ////aunque se 0 lo manda para otro lado y despues se encarga de ello
///BLOCKING BLOCK
console.log('third')