import {
  handleEmpezarClick,
  handlePedirCartaClick,
  handlePlantoClick,
  handleSeguirClick,
} from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const btnPideCarta = document.getElementById("dameCarta");
  const btnPlanto = document.getElementById("mePlanto");
  const btnEmpezar = document.getElementById("empezarPartida");
  const btnSeguir = document.getElementById("seguir");

  if (btnPideCarta instanceof HTMLButtonElement) {
    btnPideCarta.addEventListener("click", handlePedirCartaClick);
  }

  if (btnPlanto instanceof HTMLButtonElement) {
    btnPlanto.addEventListener("click", handlePlantoClick);
  }

  if (btnEmpezar instanceof HTMLButtonElement) {
    btnEmpezar.addEventListener("click", handleEmpezarClick);
  }

  if (btnSeguir instanceof HTMLButtonElement) {
    btnSeguir.addEventListener("click", handleSeguirClick);
  }
});
