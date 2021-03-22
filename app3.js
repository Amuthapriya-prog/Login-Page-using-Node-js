var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.use('/signup',function(req,res){
    console.log('hello');
    res.sendFile(__dirnmae+'/views/signup.html');
})

app.post('/check',function(req,res){
    var name=req.body.Name;
    var rollnumber=req.body.RollNumber;
    var email=req.body.Email;
    var password=req.body.Password;
    var confirmpassword=req.body.confirmPassword;
    console.log("Data submitted");
    res.writeHead(300,{'content-type':'text/html'});
    res.write("<h3>Registration done successfully</h3>");
    res.end();
})

app.use('/login',function(req,res){
    console.log('hi');
    res.sendFile(__dirname+'/views/login.html');
})

app.post('/validate',function(req,res){
    var email=req.body.Email;
    var password=req.body.Password;
    console.log("Data submitted");
    res.send('Email:$(email),Password:$(password)');
})

app.listen(5000,()=>{
    console.log("server is running at the port 5000");
})

function toggleForm()
    {
        var container = document.querySelector('.container');
        container.classList.toggle('active')
    }