const path=require('path')
const filePath= path.join('/public','dist','/styles','main.css')//para importar un archivo no importa donde este ni el os
console.log(filePath)
console.log(path.basename(filePath))//devuelve el archiuvo base de la dirreccion 
console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve('dist'))///como un join pero automatico en la misma carpeta

