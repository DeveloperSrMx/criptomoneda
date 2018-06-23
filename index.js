const euro = 23.34;
const pesoMx = 1;

debugger;
var selectSrc = document.getElementById("src");
selectSrc.options[selectSrc.options.length] = new Option('euro', 'peso mexicano', 'dolar');

var selectDst = document.getElementById("dst");
selectDst.options[selectDst.options.length] = new Option('euro', 'peso mexicano', 'dolar');

function convert (){
    debugger;
    var cantidad = document.getElementById('qty').value;

}