import express from 'express';
import employeesRouter from './routes/employees.routes.js';
import indexRoutes from './routes/index.routers.js';
import {PORT} from'./CONFIG.js'
const app=express()
app.use(express.json())
app.use(indexRoutes)
app.use('/api',employeesRouter)
app.use((req,res,nex)=>{
    res.status(404).json({
        message:'endpoint not found'
    })
})

app.listen(PORT)
console.log('server runing',PORT)