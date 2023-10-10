// criando um cronometro

    //declarando as variaveis 
    let iniciar = document.querySelector('.iniciar');
    let pausar = document.querySelector('.pausar');
    let tempo = document.querySelector('.tempo');

    //manipulando os eventos ex: clique do mouse
    iniciar.addEventListener('click', iniciarTempo);
    pausar.addEventListener('click', pausarTempo);
    pausar.addEventListener('dblclick', resetarTempo);

    //declarando as variaveis do cronometro

    let i=0;
    let timer;

    //criando as funcoes 
    function iniciarTempo(){
        timer = setInterval(()=>{
            tempo.innerText = i++;
        }, 100);
        
        iniciar.setAttribute('disabled', '');
    }

    function pausarTempo(){
        clearInterval(timer);
        iniciar.removeAttribute('disabled');
    }

    function resetarTempo(){
        tempo.innerText =0;
        i=0;
    }
