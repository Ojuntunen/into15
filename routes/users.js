var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Hello there");
});

//ESIMERKIT OVAT TÄSSÄ
    router.use(function(req,res,next){
      console.log('The common middleware called');
      next();
    });

    router.use('/example',function(req,res,next){
    console.log('The example middleware called');
    next();
    });

    router.get('/example',function(request,response)
    {
        response.send('I am example');
        console.log('I am example');
    });

    router.get('/example/:name',function(request,response)
      {
        response.send('Hello '+request.params.name);
      });

    router.get('/example2/:firstName/:lastName',function(request, response)
      {
          response.send('Hello '+request.params.firstName+" "+request.params.lastName);
      });

    router.get('/example2/:firstName&:lastName',function(request, response)
      {
         response.send('Hello '+request.params.firstName+" "+request.params.lastName);
      });

    router.post('/', function(request,response)
      {
          response.send(request.body);
          console.log(request.body);
      });

module.exports = router;





/*
router.use(function (request,response,next) {
    console.log("I am middleware 1");
    next();
});

router.get('/toka',function(request,response)
{
    response.send("Olen toka")
    console.log("Täälläkin toka")
});

router.use(function (request,response,next) {
  console.log("I am middleware 2");
  next();
});

router.get('/kolmas/:nimi',function(request,response)
{
    response.send("Olenpa vaan "+request.params.nimi)
    console.log(request.params.nimi);
});

router.get('/neljas/:enimi/:snimi',function(request,response)
{
    response.send("Olenpa vaan "+request.params.enimi+" "+request.params.snimi)
    console.log(request.params.nimi);
}); 

router.post('/',function(request,response)
{
  response.send(request.body);

})
*/