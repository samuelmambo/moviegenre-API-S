const express = require('express');
const  router = express.Router();

 const genre = [
        { id: 1, name: 'Horror' },
        { id: 2, name: 'Action' },
        { id: 3, name: 'Romance' },
        { id: 4, name: 'Fiction' },
    ]
    
    router.get('/',(req,res)=>{
        res.send(genre)
    });

    router.get('/:id',(req,res)=>{
        const genre = genre.find (c =>c.id === parseInt(req.params.name));
        if(!genre){
            res.status(404).send('movie genre with given id was not found');
        }else{
            res.send(genre)
        }
    });

    router.post('/:id',(req,res)=>{
        const genre={
            id: genre.length +1,
            name: req.body.name
        };
        genre.send(genre);
        res.json(genre);
    });

    router.delete('/:id',(req,res)=>{
        const genre = genre.find (c =>c.id === parseInt(req.params.name));
        if(!genre) return res.status(404).send('movie genre with given id was not found');

        const index =genre.indexOf(genre)
        genre.splice(index, 1);
        res.send(genre);

    });

    router.put('/:id',(req,res)=>{
        const genre = genre.find(c => c.id === parseInt(req.params.id))
        if(!genre) return res.status(404).send('Movie genre with the given id was not found');
        genre.name = req.body.name;
        res.send(genre);
    });

    module.exports= router;