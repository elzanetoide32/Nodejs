const http= require('http')
const{createReadStream}=require('fs')

const server=http.createServer((req,res)=>{
    const fileStream= createReadStream('./data/bigFiile.txt',{
        encodign: 'utf-8'
    })
    fileStream.on('data',(chunk)=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',error=>{
        console.log(console.error())
    })
})
server.listen(3000)
console.log('server ok')