// Variáveis globais
let numero;
let tentativa = 0;

// Sorteia um novo número
function sortear() {

    const dificuldade = document.getElementById("dificuldade").value;

    tentativa = 0;
    document.getElementById("tentativas").textContent = tentativa;
    document.getElementById("resultado").textContent = "";
    document.getElementById("dica").textContent = "";

    if (dificuldade == "facil") {
        numero = Math.floor(Math.random() * 50) + 1;
    }
    else if (dificuldade == "medio") {
        numero = Math.floor(Math.random() * 100) + 1;
    }
    else {
        numero = Math.floor(Math.random() * 150) + 1;
    }


}

// Faz o palpite
function Chutar() {

    const dificuldade = document.getElementById("dificuldade").value;
    const recolherPalpite = parseInt(document.getElementById("palpite").value);

    // Validação do intervalo
    if (dificuldade == "facil" && (recolherPalpite < 1 || recolherPalpite > 50)) {
        alert("Escolha um número entre 1 e 50.");
        return;
    }

    if (dificuldade == "medio" && (recolherPalpite < 1 || recolherPalpite > 100)) {
        alert("Escolha um número entre 1 e 100.");
        return;
    }

    if (dificuldade == "dificil" && (recolherPalpite < 1 || recolherPalpite > 150)) {
        alert("Escolha um número entre 1 e 150.");
        return;
    }

    tentativa++;
    document.getElementById("tentativas").textContent = tentativa;

    if (recolherPalpite == numero) {

        document.getElementById("resultado").textContent =
            "🎉 Parabéns! Você acertou!";

        document.getElementById("dica").textContent = "";

        return;
    }

    if (recolherPalpite > numero) {

        document.getElementById("dica").textContent =
            "⬇️ Tente um número menor.";

    } else {

        document.getElementById("dica").textContent =
            "⬆️ Tente um número maior.";
    }

    document.getElementById("palpite").value = "";
    document.getElementById("palpite").focus();

   if (tentativa >= 10) {

    document.getElementById("resultado").textContent =
        "😢 Você perdeu! O número era " + numero;

    document.getElementById("btnChutar").disabled = true;
}

}