const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relógio = setInterval(function time() {
  let DateToday = new Date();
  let hr = DateToday.getHours();
  let mim = DateToday.getMinutes();
  let se = DateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (mim < 10) mim = "0" + mim;
  if (se < 10) se = "0" + se;

  horas.textContent = hr;
  minutos.textContent = mim;
  segundos.textContent = se;
})