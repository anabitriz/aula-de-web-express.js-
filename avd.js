const express = require ('express');
const app = express();

app.get('/adicao/:n1/:n2',  (req, res) => {
    let n1 = parseFloat(req.params.n1);
    let n2 = parseFloat(req.params.n2);
// !isNaN indica que se for um numero, isNaN indica se não é
    if (!isNaN (n1) & !isNaN(n2)){
 let resultado = n1+n2
res.send('resultado: '+ resultado)
    }else{
       res.send('INVÁLIDO')

    }

   
});


app.get('/subtracao/:n1/:n2',  (req, res) => {
    let n1 = parseFloat(req.params.n1);
    let n2 = parseFloat(req.params.n2);

if (!isNaN (n1) & !isNaN(n2)){
 let resultado = n1-n2
res.send('resultado: '+ resultado)
    }else{
       res.send('INVÁLIDO')

    }
});

app.get('/multiplicacao/:n1/:n2',  (req, res) => {
    let n1 = parseFloat(req.params.n1);
    let n2 = parseFloat(req.params.n2);

if (!isNaN (n1) & !isNaN(n2)){
 let resultado = n1*n2
res.send('resultado: '+ resultado)
    }else{
       res.send('INVÁLIDO')

    }
});

app.get('/divisao/:n1/:n2',  (req, res) => {
    let n1 = parseFloat(req.params.n1);
    let n2 = parseFloat(req.params.n2);

if (!isNaN (n1) & !isNaN(n2)){
 let resultado = n1/n2
res.send('resultado: '+ resultado)
    }else{
       res.send('INVÁLIDO')

    }
});

app.listen(3001, ()=> {
    console.log ('em execução... http://localhost:3001/adicao/1/3')
    console.log ('em execução... http://localhost:3001/subtracao/7/6')
    console.log ('em execução... http://localhost:3001/multiplicacao/2/2')
    console.log ('em execução... http://localhost:3001/divisao/10/2')



})

