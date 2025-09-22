function fibonacciGenerator(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    var fibo = [0, 1];
    for (var i = 2; i < n; i++) {
        fibo.push(fibo[i - 2] + fibo[i - 1]);
    }
    return fibo;
}
console.log(fibonacciGenerator(10));