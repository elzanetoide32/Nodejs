import express from 'express';
import fileUpload from 'express-fileupload';
import {getFiles, uploadFile,getFile, downloadFile} from './s3.js';

const app=express()
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
}))
app.get('/files',async (req,res)=>{
    const result=await getFiles()
    res.json(result.Contents)
})
app.get('/files/:fileName',async (req,res)=>{
    const result=await getFile(req.params.fileName)
    res.json(result.$metadata)
})
app.get('/downloadFile/:fileName',async (req,res)=>{
    await downloadFile(req.params.fileName)
    res.json({message:'archivo descargado'})
})
app.post('/files',async (req,res)=>{
    const result= await uploadFile(req.files.file)
    res.json({result})
})

app.use(express.static('images'))
app.listen(3000)
console.log('server on port 3000')