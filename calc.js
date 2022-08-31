function display(vrijednost) {
    document.getElementById('rezultat') .value += vrijednost; 
  
} 

function rjesenje() {
    var x= document.getElementById('rezultat').value
    var y= eval(x);
    document.getElementById('rezultat').value =y
}

function ocisti() {
    document.getElementById('rezultat').value =''
}

