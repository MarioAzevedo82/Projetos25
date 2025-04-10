document.querySelector('.botao-pause').style.display = 'none';//sumir o botão pause enquanto não aperta o play
let musicas = [
    {
        titulo: 'Bad', artista: 'M Jackson', src: 'musicas/Mickael Jackson - Bad (1).mp3',
        img: 'imagens/call-me-fred-X6kdEEqxbB4-unsplash.jpg'
    },
    {
        titulo: 'BlackWhite', artista: 'M J', src: 'musicas/Mickael Jackson - Black or white.mp3',
        img: 'imagens/mickaeljackson.jpg'
    },
    {
        titulo: 'Say, Say, Say', artista: 'M J paul', src: 'musicas/Mickael Jackson & Paul Mc Cartney - Say, Say, Say.mp3',
        img: 'imagens/mjbad.jpg'
    },
    {
        titulo: 'Smooth Criminal', artista: 'Michael Jackson', src: 'musicas/Micheal Jackson- Smooth Criminal.mp3',
        img: 'imagens/moonwalker.jpg'
    }
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 3) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block'
    document.querySelector('.botao-pause').style.display = 'none'
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos
}



