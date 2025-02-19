function fib(n, fibarr=[0, 1]) {
    if(fibarr.length > n){
        return fibarr.slice(0, n + 1);
    }
    fibarr[fibarr.length] = fibarr[fibarr.length - 1] + fibarr[fibarr.length - 2];
    return fib(n, fibarr)
}
