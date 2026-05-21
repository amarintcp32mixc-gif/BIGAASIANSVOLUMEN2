const API_URL =
"https://bigaasiansvolumen2.onrender.com";
function encenderBuzzer() {
fetch(API_URL + "/buzzer/on");
}
function apagarBuzzer() {
fetch(API_URL + "/buzzer/off");
}
function consultar() {
fetch(API_URL + "/buzzer/estado")
.then(res => res.text())
.then(data => {
document.getElementById("estado")
.innerText = "Estado: " + data;
const buzzer =
document.getElementById("buzzer");
if(data === "ON") {
buzzer.classList.add("active");
} else {
buzzer.classList.remove("active");
}
})
.catch(error => {

document.getElementById("estado")
.innerText = "Error de conexión";
});
}
consultar();
setInterval(consultar, 2000);
