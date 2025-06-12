const inicio = new Date("2024-10-01T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  let años = ahora.getFullYear() - inicio.getFullYear();
  let meses = ahora.getMonth() - inicio.getMonth();
  let días = ahora.getDate() - inicio.getDate();

  if (días < 0) {
    meses--;
    const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
    días += mesAnterior.getDate();
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  const diferencia = ahora - inicio;
  const segundosTotales = Math.floor(diferencia / 1000);
  const horas = Math.floor((segundosTotales / 3600) % 24);
  const minutos = Math.floor((segundosTotales / 60) % 60);
  const segundos = segundosTotales % 60;

  document.getElementById("contador").innerHTML = `
        <div class="bloque"><span>${años}</span>Años</div>
        <div class="bloque"><span>${meses}</span>Meses</div>
        <div class="bloque"><span>${días}</span>Días</div>
        <div class="bloque"><span>${horas}</span>Horas</div>
        <div class="bloque"><span>${minutos}</span>Min</div>
        <div class="bloque"><span>${segundos}</span>Seg</div>
      `;
}

actualizarContador();
setInterval(actualizarContador, 1000);
