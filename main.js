// GET FILTER ELEMENT
const input = document.getElementById("pesquisa");

// GET CARDS ELEMENTS
const cards = document.querySelectorAll(".card");

// CRIANDO UMA FUNÇÃO PARA VERIFICAR O VALUE DO INPUT
input.addEventListener("input", filterCards);

// CRIANDO A FUNÇÃO
function filterCards() {
  //   VERFIFICAR SE TEM ALGUMA COISA DENTRO DO INPUT
  if (input.value != "") {
    // PERCORRENDO CADA CARD
    for (let card of cards) {
      // PEGANDO O H2 DE CADA CARD
      let title = card.querySelector("h2");
      //   TRANSFORMANDO O VALOR DO CARD EM MINÚSCULO
      title = title.textContent.toLowerCase();
      // TRANSFORMANDO O VALOR DO INPUT EM MINÚSCULO
      let lowerInput = input.value.toLowerCase();
      // VERIFICANDO SE O VALOR DO TITULO DO H2 ESTÁ INCLUSO NO INPUT
      if (!title.includes(lowerInput)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    // MOSTRANDO TODOS OS CARDS QUANDO NÃO TIVER NADA ESCRITO
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
