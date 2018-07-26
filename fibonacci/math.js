var fibonacci = exports.fibonacci = function(n){
    if (n===1)      return 1;
    else if (n===2) return 1;
    else            return fibonacci(n-1) + fibonacci(n-2);
}

//fibonacci with less strain
var fibonacciloop = exports.fibonacciloop = function(m){
    var fibos = [];
    fibos[0]=0;
    fibos[1]=1;
    fibos[2]=1;
    for(var i=3;i<=m;i++){
        fibos[i]=fibos[i-2]+fibos[i-1];
    }
    return fibos[m];
}

//fibonacci but the calculation is separated by chunks
var fibonacciAsync = exports.fibonacciAsync = function(o,done){
    if(o===0){
        done(undefined,0);
    } else if(o === 1 || o === 2)
        done(undefined,1);
    else{
        setImmediate(function(){
            fibonacciAsync(o-1, function(err,val1){
                if(err) done(err);
                else setImmediate(function(){
                    fibonacciAsync(o-2, function(err,val2){
                        if(err) done(err);
                        else done(undefined, val1+val2);
                    });
                });
            });
        });
    }
}



