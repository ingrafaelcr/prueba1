const express =require('express');
const app =express();

const docentes=require('./routes/docentes');

//Setting
app.set('port', process.env.PORT ||3000)

//Middelwares
app.use(express.json());

//Routes
app.use('/docentes',docentes);

//Starting Server

app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));

});