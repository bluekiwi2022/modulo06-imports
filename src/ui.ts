import { partida, crearPartida } from "./modelo";

import {
  generarNumeroAleatorio,
  generarNumeroCarta,
  generarUrlCarta,
  obtenerPuntosCarta,
  sumarPuntos,
  obtenerMensajePlantado,
} from "./motor";

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
  partida.puntosTotales = puntosSumados;
  mostrarPuntuacion(partida.puntosTotales);
};

const revisarPartida = (): void => {
  if (partida.puntosTotales === 7.5) {
    mostrarMensaje("Enhorabuena, has ganado la partida", "gameOver");
    cambiarEstadoBotonPideCarta(true);
  } else if (partida.puntosTotales > 7.5) {
    mostrarMensaje("Has perdido la partida", "gameOver");
    cambiarEstadoBotonPideCarta(true);
  }
};

export const handlePedirCartaClick = (): void => {
  pedirCartaFlujo();
  revisarPartida();
};

export const handlePlantoClick = (): void => {
  const mensaje = obtenerMensajePlantado(partida.puntosTotales);
  mostrarMensaje(mensaje, "mensaje");
  cambiarEstadoBotonPideCarta(true);
};

export const handleEmpezarClick = (): void => {
  crearPartida();
  mostrarPuntuacion(0);
  mostrarUrlCarta("imagenes/back.jpg");
  mostrarMensaje("", "mensaje");
  mostrarMensaje("", "gameOver");
  cambiarEstadoBotonPideCarta(false);
};

export const handleSeguirClick = (): void => {
  pedirCartaFlujo();
  mostrarMensaje(
    `Habrías obtenido un total de: ${partida.puntosTotales} puntos`,
    "mensaje",
  );
};
