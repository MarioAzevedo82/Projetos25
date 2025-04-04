document.querySelector('.botao-pause').style.display = 'none';//sumir o botão pause enquanto não aperta o play

let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}