let prp = Number (prompt("Escreva sua idade:"));

    if (prp == "") {
        alert("Por favor escreva algo para eu verificar!");
    }else if (isNaN(prp)) {
        alert("Por favor escreva números para eu verificar!");
    }else if (prp >= 18 && prp <= 90) {
        alert("Ta grandão já emm, maior de idade!");
    }else if (prp > 90) {
        alert("Virou farofa já!");
    }else {
        alert("Puzt irmãozinho, você ainda é menor de idade!");
    }