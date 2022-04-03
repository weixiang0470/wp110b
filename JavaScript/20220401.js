function each(x, y) {
    for (var i in x) {
        y(x[i]);
    }
}

function x(n) {
    console.log(n * n * n)
}

function df(f, x, h = 0.00000000001) {
    return (f(x + h) - f(x)) / h
}
var add = (x, y) => x + y
console.log(add(2, 4))
