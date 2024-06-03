let nome = prompt("Qual é o seu nome?");

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

const ano = document.getElementById('ano');
const horaTotal = document.getElementById('horaTotal');
const diaSemana = document.getElementById('diaSemana');

let x = document.getElementById('saudacao');

const relatorio = setInterval(function report() {
    let dateToday = new Date();

    let year = dateToday.getFullYear();
    let month = dateToday.getMonth();
    let week = dateToday.getDay();
    let day = dateToday.getDate();
    
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let milisec = dateToday.getMilliseconds();

    if (hr < 12) { x = "Bom dia, " + nome + "!"};
    if (hr >= 12 && hr < 18) { x = "Boa tarde, " + nome + "!"};
    if (hr >= 18) { x = "Boa noite, " + nome + "!"};

    saudacao.textContent = x;

    if (month == 0) {month = "Janeiro"};
    if (month == 1) {month = "Fevereiro"};
    if (month == 2) {month = "Março"};
    if (month == 3) {month = "Abril"};
    if (month == 4) {month = "Maio"};
    if (month == 5) {month = "Junho"};
    if (month == 6) {month = "Julho"};
    if (month == 7) {month = "Agosto"};
    if (month == 8) {month = "Setembro"};
    if (month == 9) {month = "Outubro"};
    if (month == 10) {month = "Novembro"};
    if (month == 11) {month = "Dezembro"};

    switch (week) {
        case 0: diaSemana.textContent = 'Hoje é Domingo' + ', dia ' + day + ' de ' + month + ' de ' + year; break;
        case 1: diaSemana.textContent = 'Hoje é Segunda-feira' + ', dia ' + day + ' de ' + month + ' de ' + year; break;    
        case 2: diaSemana.textContent = 'Hoje é Terça-feira' + ', dia ' + day + ' de ' + month + ' de ' + year; break;
        case 3: diaSemana.textContent = 'Hoje é Quarta-feira' + ', dia ' + day + ' de ' + month + ' de ' + year; break;
        case 4: diaSemana.textContent = 'Hoje é Quinta-feira' + ', dia ' + day + ' de ' + month + ' de ' + year; break;
        case 5: diaSemana.textContent = 'Hoje é Sexta-feira' + ', dia ' + day + ' de ' + month + ' de ' + year; break;
        case 6: diaSemana.textContent = 'Hoje é Sábado' + ', dia ' + day + ' de ' + month + ' de ' + year; break;
        default: "error"; break;
    }

    horaTotal.textContent = 'Horário: ' + hr + ':' + min + ':' + sec + ':' + milisec;
})

// getDate = dia do mes
// getDay = dia da semana, contagem do 0 ao 6
// getMonth = número correspondente aos meses, contagem de 0 ao 11

// referência do canal Larissa Kich