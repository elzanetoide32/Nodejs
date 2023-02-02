const {readFile}=require('fs')
const {promisify}=require('util')

const readFilePromise= promisify(readFile)

function getText(pathFile){
    return new Promise(function(resolve,reject){
        readFile(pathFile,'utf-8',(err,data)=>{
            if(err){reject(err)}
            resolve(data)
        })
    })    
}

/*getText('./data/first.txt')
    .then((result)=>console.log(result))
    .catch(error=>console.log(error))////se puede segir poniendo .then sin poner catch 
*/

async function read(){
    try{
        //throw new Error("errorrrrrr :)") ////para provocar error para ver como funca
        const result=await getText('./data/first.txt')
        const result2=await readFilePromise('./data/first.txt')///nueva forma
        console.log(result)
        console.log(result2)
        /////mas codigo
    }catch(error){
        console.log(error)
    }    
}
////promesas nuevas///