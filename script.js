const botao = document.querySelector("button");

// cria o elemento da carta (mas ainda não mostra)
const carta = document.createElement("div");
carta.classList.add("carta");
carta.innerHTML = `
  <h2>💌 Minha Carta Para Você 💌</h2>
  <p>
    Amor,<br><br>
    Este site é simples, mas cada linha dele foi escrita pensando em você.<br>
    Quis esconder aqui uma pequena mensagem, como quem guarda um bilhete no bolso da alma.<br><br>
    Você é meu ponto fixo no caos, meu “Hello, World!” preferido.<br>
    Que este botão misterioso te lembre: eu te amo — no passado, no presente e em cada linha de código que ainda vou escrever.<br><br>
    ❤️
  </p>
`;

botao.addEventListener("click", () => {
  // se a carta já estiver na tela, não faz nada
  if (document.body.contains(carta)) return;

  // adiciona a carta no corpo do site
  document.body.appendChild(carta);

  // adiciona uma pequena animação
  carta.classList.add("mostrar");
});
