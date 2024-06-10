const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function getTime() {
    const time = new Date();

    // divide a quantidade de tempo para dar uma volta pelos graus(posição) e multiplica pelo tempo que está no momento 
    const getHourRot = (360/12) * time.getHours();
    const getMinRot = (360/60) * time.getMinutes();
    const getSecRot = (360/60) * time.getSeconds();

    // adiciona no css o transform, já com o grau(posição) correspondente ao tempo que está no momento
    hour.style.transform = `rotate(${getHourRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;
}

// atualiza o relógio a cada 1 segundo
setInterval(() => {
    getTime();
}, 1000);

getTime();

// referência do Canal Will Dev e do Canal Code Braces