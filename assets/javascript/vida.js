const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');


const relogio = setInterval(function tempo(){
    let data_atual = new Date();
    let hr = data_atual.getHours();
    let min = data_atual.getMinutes();
    let seg = data_atual.getSeconds();


    if(hr < 10){ hr = '0' + hr;}

    if(min < 10){ min = '0' + min;}

    if(seg < 10){ seg = '0' + seg;}

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;



})