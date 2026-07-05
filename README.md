# 🎮 Jogo de Adivinhação

Um jogo simples e divertido desenvolvido com tecnologias web fundamentais, onde o usuário deve adivinhar um número aleatório gerado pelo sistema.

---

## 📝 Sobre o Projeto

O objetivo do jogo é descobrir qual número secreto foi sorteado pelo programa em um intervalo de **1 a 100**. O jogador tem o limite de **10 tentativas** e, a cada palpite errado, o sistema fornece dicas informando se o número correto é maior ou menor.

## 🚀 Funcionalidades

* **Sorteio Dinâmico:** Um número de 1 a 100 é gerado aleatoriamente a cada nova partida.
* **Validação de Entrada:** O sistema impede palpites inválidos (menores que 1 ou maiores que 100).
* **Sistema de Dicas:** Informa se o número correto é **maior** ou **menor** que o palpite atual.
* **Contador de Tentativas:** Exibe na tela quantas tentativas o usuário já utilizou até o limite de 10.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação da página, criação dos campos de entrada (`input`) e botões de interação.
* **CSS3:** Estilização visual do jogo, responsável pelo layout da interface (classe `.caixa`), cores, fontes e alinhamento dos elementos.
* **JavaScript (ES6):** Toda a inteligência do jogo, incluindo manipulação do DOM, controle do contador de tentativas e lógica de geração do número aleatório.

---

## 💻 Como Executar o Projeto

1. Faça o clone ou baixe os arquivos do repositório.
2. Certifique-se de que os três arquivos (`index.html`, `javascript.js` e `style.css`) estão na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador web (Chrome, Firefox, Edge, etc.).

---

## 🧠 Lógica de Desenvolvimento

O script foi construído seguindo os seguintes passos:
1. Sorteio de um número inteiro entre 1 e 100 usando `Math.random()`.
2. Captura e validação do palpite do usuário ao clicar no botão.
3. Verificação de acerto ou erro comparando as variáveis.
4. Atualização do número de tentativas e exibição de dicas dinâmicas na tela.

---

## 🔮 Melhorias Futuras

Algumas ideias de funcionalidades e evoluções planejadas para o projeto:
* **Botão Reiniciar:** Adicionar um botão de "Jogar Novamente" para resetar o número secreto e as tentativas sem precisar atualizar a página.
* **Histórico de Palpites:** Exibir uma lista com os números que o jogador já chutou para ajudá-lo a não repetir
