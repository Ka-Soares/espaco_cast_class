/* Criando o slideshow */

// Declarando o objeto de imagens em um array

let imagens =['img/clarence.jpg', 'img/clarence_water.jpeg', 'img/clarence_president.jpg'];

// Declarando a posição de inicio

let Index =0;

// Declarando o tempo que as imagens vão passar em milesegundos

let time =3000;

// Criando a funcao chamada slideshow
function slideShow(){
// Pegando o id da imagem no html para poder carregar as imagens usando DOM
    document.getElementById('img-clarence').src=imagens[Index];
// Incremento das imagens e sua posição 
    Index++;

// Se a posição da imagem for imagem e a quantidade de imagens no array
    if(Index ==imagens.length){
        Index=0;
    }
// Set timeout é uma funcao que executa o tempo, nesse caso vai cha,ar a funcao e aplicar o time 
    setTimeout('slideShow()', time)
}

// executar toda a funcao 
slideShow();

// Validando o Login

function validar(){
    //declarando variaveis
    let usuario = document.getElementById('idUser').value;
    let senha = document.getElementById('idSenha').value;

    //condicioanl para validar os campos
    if (usuario === "Admin" && senha ==="12345"){
        window.open('dashboard.html');
        // Caso a senha ou usuaro estejam incorretos 
    }else{
        // emita uma alerta
        alert("Usuario ou senha invalidos")
    }
}