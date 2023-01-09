function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    //const instrumento = listaDeTeclas[contador].classList[1];

    listaDeTeclas[i].onclick = function () {
        tocaSom('#som_' + listaDeTeclas[i].classList[1]);
    };

}
