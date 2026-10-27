let erabiltzailea1 = new Erabiltzailea("Eder", "Bilbao", "12345678A", 1990, "Bizkaia");
console.log(erabiltzailea1.sortuLogin());
console.log(erabiltzailea1.toString());
document.getElementById("resultado").innerHTML = erabiltzailea1.toHtml();

let erabiltzailea2 = new Erabiltzailea("Jane", "Smith", "87654321B", 1985, "Cataluña");
console.log(erabiltzailea2.sortuLogin());
console.log(erabiltzailea2.toString());
document.getElementById("resultado").innerHTML = erabiltzailea2.toHtml();
