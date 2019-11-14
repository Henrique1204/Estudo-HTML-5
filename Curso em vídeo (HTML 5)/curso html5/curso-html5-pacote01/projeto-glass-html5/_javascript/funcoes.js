function mudaFoto(foto){
    document.getElementById('icone').src = foto;    
};

function calcTotal(){
    let qtd = Number(document.getElementById('cQnt').value);
    let total = qtd * 1500;
    let inputTot = document.getElementById('cTot');
    inputTot.value = total;
}