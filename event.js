const eventEmitter= require('events')

const customEmitter= new eventEmitter()
customEmitter.on('response',(data,second)=>{
    console.log('received')
    console.log(data)
    console.log(second)
})

customEmitter.emit('response','hello world',[1,2,3])
/*customEmitter.emit('response','fast')
customEmitter.emit('response',30)
customEmitter.emit('response',[1,2,3])
customEmitter.emit('response',{name:"ryan"})
*/

