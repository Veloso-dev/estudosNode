const express = require("express"); // serve para orientação de rotas
const app = express();

app.get("/", function(req, res) {
    res.send("Seja bem-vindo ao meu app") //toda vez que quero enviar algo para o servidor usso (send)
});

app.get("/sobre", function(req, res) {
    res.send("minha página sobre");
})

app.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu blog");
})

app.get("/ola/:nome/:profissao", function(req, res) { // receber dados de uma função (req)
    res.send("<h1> ola" + " " + req.params.nome + "<h1>"); //(.params. + o parametro ) exibe o parametro definido
    // so pode enviar 1 sendo por bloco de codigo

})



app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081");
});