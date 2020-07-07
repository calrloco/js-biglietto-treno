document.getElementById('form').addEventListener('submit', computeResoults);
function computeResoults(e) {
    const UIeta = document.getElementById("eta").value;
    const UIkm = document.getElementById("prezzo").value;
    var km = UIkm;
    var eta = UIeta;
    var sconto;
    var totale;
    var prezzo = 0.21 * km;
    //calcolo
    if (eta < 18) {
        sconto = (20 * prezzo) / 100;
    } else if (eta > 65) {
        sconto = (40 * prezzo) / 100;
    }else{
        sconto =0;
    }
    if ((eta < 18) || (eta > 65)) {
        totale = prezzo - sconto;
    } else {
        totale = prezzo;
    }
    document.getElementById('totale').innerHTML ='Prezzo per la corsa: '+  totale.toFixed(2);
    document.getElementById('sconto').innerHTML ='Sconto: '+  sconto.toFixed(2);

    e.preventDefault();
}
function RefreshPage(){
     location.reload();
    
}




