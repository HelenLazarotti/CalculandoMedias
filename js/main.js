//pego os elementos que vou manipular:
const tela_inicial = document.querySelector('.box_one');
const mediaFinal = document.querySelector('.box_two');
const infoNota = document.querySelector('.info_note');

//função calcular média
function calc() {
    //pego meus campos de input:
    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);
    const n3 = parseInt(document.querySelector('#n3').value);

    let nota = ((n1 + n2 + n3) / 3).toFixed(1);

    tela_inicial.classList.toggle('hide');
    mediaFinal.classList.toggle('hide');

    //pego a tag que vai aparecer a nota:
    const notaParag = document.querySelector('.oficial_note');

    //pego a tag que vai o texto explicativo:
    const infoNota = document.querySelector('.info_note');

    notaParag.innerHTML = nota

    if (nota <= 5) {
        infoNota.classList.add('bad');
        infoNota.innerHTML = `REPROVADO!`;

    } else if (nota >= 6 && nota <= 10) {
        infoNota.classList.add('good');
        infoNota.innerHTML = `APROVADO!`;

    } else {
        infoNota.classList.add('invalid');
        infoNota.innerHTML = `Valor Inválido.`;
    }
}

//função limpar os campos de inputs:
function clearInputs() {
    n1.value = '';
    n2.value = '';
    n3.value = '';

    //pra recarregar a pág:
    window.location.reload(true);

    /*não funcionou:
    infoNota.classList = '';*/
}

//função voltar p pág inicial:
function backCalculadora() {
    tela_inicial.classList.remove('hide');
    mediaFinal.classList.add('hide');
    clearInputs();
}

