const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relógio = setInterval(function time() {
  let DateToday = new Date();
  let hr = DateToday.getHours();
  let mim = DateToday.getMinutes();
  let se = DateToday.getSeconds();

  horas.textContent = hr;
  minutos.textContent = mim;
  segundos.textContent = se
})