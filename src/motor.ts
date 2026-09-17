import { partida } from "./modelo";

export const generarNumeroAleatorio = (): number => {
  return Math.ceil(Math.random() * 11);
};

export const generarNumeroCarta = (numeroAlea: number): number => {
  if (numeroAlea > 7) {
    return numeroAlea + 2;
  }
  return numeroAlea;
};

export const obtenerPuntosCarta = (numeroCarta: number): number => {
  if (numeroCarta > 7) {
    return 0.5;
  }
  return numeroCarta;
};

export const sumarPuntos = (puntos: number): number => {
  return puntos + partida.puntosTotales;
};

export const obtenerMensajePlantado = (puntos: number): string => {
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

export const generarUrlCarta = (numeroCarta: number): string => {
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
