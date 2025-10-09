// API música

const express = require ('express');
const app = express();
const port= 3000;

const musicas=
[
    {titulo: "Best Part", autor: "Daniel Caesar", duracao: "3:15"},
    {titulo: "Get You", autor: "Daniel Caesar", duracao: "4:48"},    
    { titulo: "Yellow", autor: "Codplay", duracao: "3:50"},

];

app.get('/musicas/', (req,res)  => {
    res.json(musicas)
});

app.get('/musicas/:titulo', (req,res)  => {
    const titulo = (req.params.titulo)
    const musica = musicas.find(m => m.titulo === titulo);

if(musica) {
        res.json(musica);
    } else {
        res.status(404).json({erro: 'musica n encontrada'})
    }

});



app.post('/musicas', (req,res)  => {
    const titulo = req.body.titulo;    
    const autor = req.body.autor;
    const duracao = req.body.duracao;

    const novamusica = { id: musicas.length +1, titulo:titulo, autor:autor, duracao:duracao}

musicas.push(novamusica);
res.status(201).json(novamusica);

});



app.put('/musicas/:titulo', (req, res) => {
    const tituloAntigo = req.params.titulo;
    const { titulo: novoTitulo, autor, duracao } = req.body;

    const musica = musicas.find(m => m.titulo === tituloAntigo);

    if(musica) {
        musica.titulo = novoTitulo || musica.titulo;
        musica.autor = autor || musica.autor;
        musica.duracao = duracao || musica.duracao;

        res.json(musica);
    } else {
        res.status(404).json({erro: 'Música não encontrada'});
    }
}); 


app.delete('/musicas/:titulo', (req, res) =>{
    const titulo = (req.params.titulo);
    const index = musicas.findIndex(m => m.titulo === titulo);
             

        if (index !== -1){
            const musicaDeletada = musicas.splice(index, 1);
           
            res.json(musicaDeletada)
        }else{
            res.status(404).json ({erro: 'ops! musica não encontrada...'});
    }

}
);














app.listen(port, () => {
    console.log("Servidor em execução : http://localhost:3000")
});