// minha chave de acesso do servidor
const key = "7a584a8b095834429e326122a6f02439"

let conteudo = document.getElementById("box-info")

function clique() {

    // essa função guarda o valor inserido pelo usuário
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade);
}

// Se o usuário pressionar a tecla Enter, envia a resposta ao código
document.addEventListener('keypress', function(tecla) {
    if (tecla.key === 'Enter') {
      clique();
    }
  });

async function buscarCidade(cidade) {
    // essa função acessa a API e coleta os dados
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    atualizarDados(dados)
}

function atualizarDados(dados){
    console.log(dados)
    // essa função mostra os dados na tela para o usuário
    if (conteudo.classList.contains("view")) 
        {
            conteudo.classList.remove("view")
        }

    if (dados.message == "city not found") 
        {
            alert("Verifique se o dado inserido está correto!")
            conteudo.classList.add("view");
            // document.querySelector(".input-cidade").value = "";
        }

    if (document.querySelector(".input-cidade").value == "")
        {
            alert("Campo não preenchido...")
            conteudo.classList.add("view");
        }

    document.querySelector(".cidade").innerHTML = dados.name + ", " + dados.sys.country;
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".temp-max").innerHTML = Math.floor(dados.main.temp_max) + "°C";
    document.querySelector(".temp-min").innerHTML = Math.floor(dados.main.temp_min) + "°C";
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

    // limpa o input
    document.querySelector(".input-cidade").value = "";
}

// linha 7 -> ".value" seleciona apenas o valor que estiver dentro do input

// linha 14 -> "async" informa o programa que estamos utilizando um servidor(API)

// linha 16 -> "fetch" faz o programa ir até o servidor

// linha 16 -> "await" espera o programa coletar todas as informações do servidor
// ou seja, o programa agora leva o mesmo tempo para mostrar todas as informações

// linha 16 -> ".then" informa o que vai ser carregado depois de acessar o servidor
// no caso, passar os dados coletados para a extensão 'json'

// linha 43 -> "Math.floor" arredonda o número, deixando-o com 2 casas


// referência do Canal DevClub Programação