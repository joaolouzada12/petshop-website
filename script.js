window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (btn) {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnTopo");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  const titulo = document.querySelector(".titulo-topo");
  if (titulo) {
    titulo.style.opacity = 0;
    titulo.style.transition = "opacity 2s ease-in";
    setTimeout(() => {
      titulo.style.opacity = 1;
    }, 100);
  }
  const visitas = localStorage.getItem("visitasPetshop") || 0;
  const novoTotal = Number(visitas) + 1;
  localStorage.setItem("visitasPetshop", novoTotal);
  const elContador = document.getElementById("contador-visitas");
  if (elContador) {
    elContador.innerText = `Você visitou este site ${novoTotal} vez(es).`;
  }
});
