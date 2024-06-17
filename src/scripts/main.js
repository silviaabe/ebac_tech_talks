    AOS.init();

    const dataDoEvento = new Date("Sep 13, 2024 19:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(function() {
      const agora = new Date();
      const timeStampAtual = agora.getTime();

      const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

      const mesEmMs = 1000 * 60 * 60 * 24 * 30;
      const diasEmMs = 1000 * 60 * 60 * 24;
      const horasEmMs = 1000 * 60 * 60;
      const minutosEmMs = 1000 * 60;

      const mesAteOEvento = Math.floor(distanciaAteOEvento / mesEmMs);
      const diasAteOEvento = Math.floor((distanciaAteOEvento % mesEmMs) / diasEmMs);
      const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
      const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
      const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

      document.getElementById('contador').innerHTML = `${mesAteOEvento}m ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    
      if (mesAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
      }
    }, 1000);