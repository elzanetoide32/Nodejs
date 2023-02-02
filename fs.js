const fs = require("fs");
const first = fs.readFileSync("./data/first.txt", "utf-8"); //el utf es para convertir el buffer en un string
const second = fs.readFileSync("./data/second.txt");
console.log(first);
console.log(second.toString()); //tambien para convertirlo en string

/////para escribir un archivo///
const title = "hola mundo 3";
fs.writeFileSync("./data/third.txt", "est es el 3° hola mundo"); //o la avariable title
//si ya existe el archivo lo sobreescribe//

fs.writeFileSync("./data/third.txt", title, {
  flag: "a", ///append/añadir
});

/////el sync es sincronico en camion sin el sync es asincrono
///no existe datos cuando se escriben archivos
fs.readFile("./data/first.txt", function (error, dat) {
  console.log(error);
  console.log(data.toString());
});
