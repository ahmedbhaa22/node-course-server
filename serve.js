const express= require('express');
const fs=require('fs');
const app=express()
const hbs= require('hbs');
const port= process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('currentYear',()=>{ return new Date().getFullYear()})
hbs.registerHelper('TOUPPER',(text)=>
{
    return text.toUpperCase();
})
app.set('view engine','hbs');
//App Middleware
app.use((req,rep,next)=>
{
    req.url='/index2'
    next();
})
app.use((req, rep, next) => {
    var st = new Date().toString() + ' : ' + req.method + ' => ' + req.url + '\n';
    fs.appendFileSync('servel.log', st);
    next();
})

app.use(express.static(__dirname+'/public'))
//End Middleware
//Start Apllication Route

app.get('/',(req,resp)=>
{
    resp.send('HelloWorld');
})
app.get('/index',(req,resp)=>
{
    resp.render('index',
    {
        title:'Welcome',
        'message':'Welecome To Our Amazaing Website',
        'content':'Lets Have Some Fun',
       
    })
})
//End Route
// starting App;
app.listen(port,()=>
{
    console.log('LOLOLOLOLOL');
})
