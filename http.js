const http = require("http");

http.createServer(function (request, response) {
    console.log(request.url); //modulo muy grande sobre el cliente
    if (request.url === "/") {
      response.write("welcome to the server");
      return response.end();
    }
    if (request.url === "/about") {
      response.write("acerca de");
      return response.end();
    }

    response.write(`
    <h1>Not found</h1>
    <p>esta pagina no seencontro</p>
    <a href="/">volver a la pagina principal</a>
    `);
    response.end();
  })
  .listen(3000);

console.log("servidor escuchando el puerto 3000");
