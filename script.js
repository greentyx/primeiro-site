const botao = document.querySelector("button");

// cria o elemento da carta (mas ainda não mostra)
const carta = document.createElement("div");
carta.classList.add("carta");
carta.innerHTML = `
  <h2>🤨 Curioso ele</h2>
  <p>
    Parabéns, meu amigo! 🌟<br>
    De verdade, significa muito pra mim saber que você tirou um tempinho pra explorar meu primeiro site. Esse projeto nasceu de muita curiosidade, café e horas tentando fazer cada detalhe funcionar e ver alguém chegando até aqui é simplesmente incrível.<br>
    Cada clique seu é um pedacinho de apoio, cada olhar sobre o site é como um empurrão pra continuar criando, melhorando e sonhando mais alto. Obrigado por fazer parte desse começo, que, espero, seja apenas o primeiro de muitos passos pela frente.<br>
    De verdade, significa muito pra mim saber que você tirou um tempinho pra explorar meu primeiro site. Esse projeto nasceu de muita curiosidade, café e horas tentando fazer cada detalhe funcionar e ver alguém chegando até aqui é simplesmente incrível.
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
