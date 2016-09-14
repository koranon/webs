var myconstants;
(function (myconstants) {
    myconstants[myconstants["pi"] = 3.14] = "pi";
    myconstants[myconstants["e"] = 2.73] = "e";
    myconstants[myconstants["log2"] = 0.3] = "log2";
    myconstants[myconstants["log5"] = 0.7] = "log5";
})(myconstants || (myconstants = {}));
console.log('Finding circumference of circle');
var radius = 10;
console.log(2 * myconstants.pi * radius);
