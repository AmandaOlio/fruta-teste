function frutas() {
    let fruta = "fruta";
    fruta = prompt("nome da fruta")
    switch (fruta) {
        case "Maçã":
            alert("Não vendemos essa fruta aqui!");
            break;
        case "Kiwi":
            alert("Estamos com escassez de kiwis!");
            break;
        case "Melancia":
            alert("Aqui está, são 3 reais o quilo!");
            break;
        default:
            alert("Erro no console");
    }
}

frutas();

function clickReiniciar() {
    frutas();
}
