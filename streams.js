/*const {writeFile}= require('fs/promises')
const craeteBigFile= async()=>{
    await writeFile('./data/bigFiile.txt','helo world'.repeat(1000000))
}
craeteBigFile()*/

const {crateReadStream, createReadStream}= require('fs')

const stream= createReadStream('./data/bigFiile.txt','utf-8')
stream.on('data',(chunk)=>{
    console.log(chunk)
})
stream.on('end',()=>{
    console.log('ya termine de leer')
})
stream.on('error',(error)=>{
    console.log(error)
})