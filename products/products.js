/* let d = new Date();
console.log()
        alert("La fecha de hoy es: " + d); */
let clicks = 0;

function countingCliks() {
    clicks += 1;
    console.log("Resultado Click: ",clicks)
    document.getElementById("clicks").innerHTML = clicks;
}