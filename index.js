const express = require('express');
const app  = express();

app.use(express.json());


const genreRouter =require('./routers/UserRouters');
app.use('/',genreRouter);

// app.get('api/movies/:id', (req, res) = {
//     const genre = movies.find(c => c.id === parseInt(req.params.id));
//     if(!movies) {
//         console.log('movie not found')
//     }else{
//         res.send(movies)
//     }
// })




const port= process.env.PORT ||3000
app.listen(port ,()=> {
    console.log(`listening on port${port}....`)
})



















