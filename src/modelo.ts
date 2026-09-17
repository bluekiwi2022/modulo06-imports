interface Partida {
  puntosTotales: number;
}

export const partida: Partida = {
  puntosTotales: 0,
};

export const crearPartida = (): void => {
  partida.puntosTotales = 0;
};
