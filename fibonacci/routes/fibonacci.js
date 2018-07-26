//membuat route untuk fibonacci
var express = require('express');
var router = express.Router();

var math = require('../math');
router.get('/', function(req,res,next){
    if(req.query.fibonum){
        math.fibonacciAsync(req.query.fibonum, (err,fiboval) => {
            res.render('fibonacci',{
                title:"Calculate Fibonacci Numbers",
                fibonum: req.query.fibonum,
                fiboval: fiboval
            });
        });
    } else {
        res.render('fibonacci',{
            title:"Calculate Fibonacci Numbers",
            fiboval:undefined
        });
    }
});

module.exports = router;