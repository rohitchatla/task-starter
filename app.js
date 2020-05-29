//lib/packages imports	
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv');
const port = process.env.PORT || 3000;
const bodyParser=require('body-parser');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs'); 

/*
require('dotenv/config');
*/

//post routes
const postRoute=require('./routes/post');
const userRoute=require('./routes/user');
const bmsRoute=require('./routes/bmc');

app.use('/api/user/project',postRoute);
app.use('/api/user/persona',userRoute);
app.use('/api/user/bmc',bmsRoute);




//home routes
app.get('/',async(req,res)=>{
	res.redirect('/posts');
});



//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('Connected to mongodb'));



//listening to server
app.listen(port,()=>console.log('Server in up and running',port));





