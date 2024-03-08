
var banana = 1.5;
var laranja = 3;
var pera = 2.5;

var quantidadeMaca = 5;
var quantidadeBanana = 3;
var quantidadeLaranja = 0;
var quantidadePera = 6;

if (quantidadeMaca >= 5){
    var maca = 1.5;
} else {
    var maca = 2;
}

if (quantidadeBanana >= 5){
    var banana = 1;
} else {
    var banana = 1.5;
}

if (quantidadeLaranja >= 5){
    var laranja = 2.5;
} else {
    var laranja = 3;
}

if (quantidadePera >= 5){
    var pera = 2;
} else {
    var pera = 2.5;
}

var total = quantidadeMaca*maca + quantidadeBanana*banana + quantidadeLaranja*laranja + quantidadePera*pera;

console.log(total);