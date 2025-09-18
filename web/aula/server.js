const express = require('express');
const app= express();

app.get('/', (req,res) =>{
    res.send('hello World'); 
});

app.get('/web', (req,res) =>{
    res.send('hello '); 
});

app.post('/teste3', (req,res) =>{
    res.send(' World')});



// oq determina o parametro é :
app.get('/adicao/:numeroA/:numeroB', (req,res) =>{
    let numeroA = parseInt(req.params.numeroA);
    let numeroB = parseInt(req.params.numeroB);
    let resultado = numeroA + numeroB;
    res.send("Resultado:"+ resultado.toString());
});

app.get('/subtracao/:numeroA/:numeroB', (req,res) =>{
    res.send("Resultado:"+ parseInt(req.params.numeroA)-parseInt(req.params.numeroB));
});





app.listen(3001 ,() =>{
    console.log("servidor em execução... localhost:3001")
});
