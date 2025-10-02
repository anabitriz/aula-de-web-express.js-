
//constantes iniciais
const express = require('express');
const app = express();
const port = 3000;
    app.use (express.json());

    //let ou const
    let pessoas = [
        {id: 1, nome: "ANA"},
        {id: 2, nome: "BEATRIZ"},
        {id: 3, nome: "ARTHUR"}
    ];

//retornar as pessoas

app.get('/pessoas', (req, res) =>{
res.json(pessoas)

});

app.get('/pessoas/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    //const pessoa = pessoas.find();
    //find recebe uma função. 
    const pessoa = pessoas.find( p => p.id === id );
                                            //forma reduzida de escrever:
                                            // function comp(p){ let igual= false; if(P.id===id){ igual = true;}return igual}
                                            //ou seja, substituimos tudo isso, por isso; p => p.id === id )
    if(pessoa){
        res.json(pessoa)
        //json ou send vai retornar do msm jeito. MAs quando for interface organizada, ai muda.
    }else{
        res.status(404).json({erro: 'pessoa n encontrada'})
        //inclui o status na resposta (nesse caso, nao encontrado)
    }
});

//inserir pessoa

app.post('/pessoas', (req, res) =>{
    const nome = req.body.nome;
    //recebe o nome e envia para a requisição
    const novaPessoa = { id: pessoas.length +1, nome:nome}
    //o próximo id vai ser o tamanho do array +1 . como temo 3 ids, essa const vai ver q tem tres e vai add mais 1, formando o id 4 obs; ELE SO VAI COLOCAR NO ARRAY QUANDO ADICIONAMOS O MÉTODO 'PUSH'. ABAIXO:
        pessoas.push(novaPessoa);
res.status(201).json(novaPessoa);
//agora vou abrir o postman
// coloca a rota; body [esse body, aparece o corpo(a estrutura)];
//na parte de body tem uma parte para escolher, ai coloca----raw; json.
    
});

//atualizar pessoa


app.put('/pessoas/:id', (req, res) =>{
    const id= parseInt(req.params.id);
    const nome= req.body.nome;

    const pessoa = pessoas.find( p => p.id===id );

    if(pessoa){
        pessoa.nome = nome;
        res.json(pessoa);
    }else{
        res.status(404).json ({erro: 'ops! Deu errado...'});
    }

});    


//excluir pessoa

app.delete('/pessoas/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(i => i.id === id);
              //so retorna so 1 indice q a pessoa está

        if (index !== -1){
            const pessoaDeletada = pessoas.splice(index, 1);
            //splice: nesse indice, exclui tal elemento
            res.json(pessoaDeletada)
        }else{
            res.status(404).json ({erro: 'ops! pessoa não encontrada...'});
    }

}
);











    //antecipando o cód de execucaodo servidor
app.listen(port, () => {
    console.log("Servidor em execução : http://localhost:3000")
});
