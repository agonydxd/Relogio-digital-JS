const hora = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
  let data = new Date()
  let hr = data.getHours()
  let min = data.getMinutes()
  let sec = data.getSeconds() 

  if(hr < 10 ){
    hr = '0' + hr  
}
  if(min < 10){
    min = '0' + min
}
  if(sec < 10){
    sec = '0' + sec
}
  hora.textContent = hr
  minutos.textContent = min
  segundos.textContent = sec

})

/*

O setInterval() serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo. A sua sintaxe é: setInterval(funcao, tempo)
 Isto significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo.

*/