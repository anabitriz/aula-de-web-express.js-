const express = require ('express');
const app = express();

const estudantes = [
    {id: 1, nome:"Ana", idade: 16},
    {id: 2, nome:"Marina", idade: 16},
    {id: 3, nome:"Mariana", idade: 15},
    {id: 4, nome:"Débora", idade: 18},
    {id: 5, nome:"Karyne", idade: 14},
    {id: 6, nome:"Juliana", idade: 16},
    {id: 7, nome:"Daiane", idade: 15},
    {id: 8, nome:"Gabrielly", idade: 17}
];

app.get('/estudante/:id', (req,res) =>  {
    let id = parseInt (req.params.id);
    let estudante = estudantes[id-1];
    
    if(estudante) {
        res.send(estudante.nome + estudante.idade);
    }else{
        res.send('Estudante não encontrado');
    }
});


app.listen(3000, () => {
    console.log('em execução: http://localhost:3000/estudante/id');

});