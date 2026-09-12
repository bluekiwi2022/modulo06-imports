let puntosTotales = 0;

const generarNumeroAleatorio = (): number => {
  return Math.ceil(Math.random() * 11);
};

const generarNumeroCarta = (numeroAlea: number): number => {
  if (numeroAlea > 7) {
    return numeroAlea + 2;
  }
  return numeroAlea;
};

const obtenerPuntosCarta = (numeroCarta: number): number => {
  if (numeroCarta > 7) {
    return 0.5;
  }
  return numeroCarta;
};

const sumarPuntos = (puntos: number): number => {
  return puntos + puntosTotales;
};

const actualizarPuntosTotales = (puntosSumados: number): void => {
  puntosTotales = puntosSumados;
};

const obtenerMensajePlantado = (puntos: number): string => {
  if (puntos < 4) {
    return "Has sido muy conservador";
  } else if (puntos === 5) {
    return "Te ha entrado el canguelo, ¿eh?";
  } else if (puntos >= 6 && puntos <= 7) {
    return "Casi, casi...";
  } else if (puntos === 7.5) {
    return "¡Lo has clavado! ¡Enhorabuena!";
  }
  return "Game Over, has perdido";
};

const generarUrlCarta = (numeroCarta: number): string => {
  switch (numeroCarta) {
    case 1:
      return "imagenes/1_as-copas.jpg";
    case 2:
      return "imagenes/2_dos-copas.jpg";
    case 3:
      return "imagenes/3_tres-copas.jpg";
    case 4:
      return "imagenes/4_cuatro-copas.jpg";
    case 5:
      return "imagenes/5_cinco-copas.jpg";
    case 6:
      return "imagenes/6_seis-copas.jpg";
    case 7:
      return "imagenes/7_siete-copas.jpg";
    case 10:
      return "imagenes/10_sota-copas.jpg";
    case 11:
      return "imagenes/11_caballo-copas.jpg";
    case 12:
      return "imagenes/12_rey-copas.jpg";
    default:
      return "imagenes/back.jpg";
  }
};

const mostrarUrlCarta = (url: string): void => {
  const elementoImagen = document.getElementById("carta");
  if (elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = url;
  }
};

const mostrarPuntuacion = (puntos: number): void => {
  const totalPuntuacion = document.getElementById("resultado");
  if (totalPuntuacion instanceof HTMLElement) {
    totalPuntuacion.textContent = puntos.toString();
  }
};

const mostrarMensaje = (texto: string, idElemento: string): void => {
  const elemento = document.getElementById(idElemento);
  if (elemento instanceof HTMLParagraphElement) {
    elemento.textContent = texto;
  }
};

const cambiarEstadoBotonPideCarta = (deshabilitado: boolean): void => {
  const btnPideCarta = document.getElementById("dameCarta");
  if (btnPideCarta instanceof HTMLButtonElement) {
    btnPideCarta.disabled = deshabilitado;
  }
};

const pedirCartaFlujo = (): void => {
  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = generarUrlCarta(carta);
  mostrarUrlCarta(urlCarta);

  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntosTotales(puntosSumados);
  mostrarPuntuacion(puntosTotales);
};

const revisarPartida = (): void => {
  if (puntosTotales === 7.5) {
    mostrarMensaje("Enhorabuena, has ganado la partida", "gameOver");
    cambiarEstadoBotonPideCarta(true);
  } else if (puntosTotales > 7.5) {
    mostrarMensaje("Has perdido la partida", "gameOver");
    cambiarEstadoBotonPideCarta(true);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btnPideCarta = document.getElementById("dameCarta");
  const btnPlanto = document.getElementById("mePlanto");
  const btnEmpezar = document.getElementById("empezarPartida");
  const btnSeguir = document.getElementById("seguir");

  if (btnPideCarta instanceof HTMLButtonElement) {
    btnPideCarta.addEventListener("click", () => {
      pedirCartaFlujo();
      revisarPartida();
    });
  }

  if (btnPlanto instanceof HTMLButtonElement) {
    btnPlanto.addEventListener("click", () => {
      const mensaje = obtenerMensajePlantado(puntosTotales);
      mostrarMensaje(mensaje, "mensaje");
      cambiarEstadoBotonPideCarta(true);
    });
  }

  if (btnEmpezar instanceof HTMLButtonElement) {
    btnEmpezar.addEventListener("click", () => {
      actualizarPuntosTotales(0);
      mostrarPuntuacion(0);
      mostrarUrlCarta("imagenes/back.jpg");
      mostrarMensaje("", "mensaje");
      mostrarMensaje("", "gameOver");
      cambiarEstadoBotonPideCarta(false);
    });
  }

  if (btnSeguir instanceof HTMLButtonElement) {
    btnSeguir.addEventListener("click", () => {
      pedirCartaFlujo();
      mostrarMensaje(
        `Habrías obtenido un total de: ${puntosTotales} puntos`,
        "mensaje",
      );
    });
  }
});
