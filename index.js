const controle = document.querySelectorAll('.controle-ajuste');
const stats = document.querySelectorAll('[data-estatistica]');
console.log(stats);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((item) => {
    item.addEventListener('click', (e) =>{
        changeValue(e.target.dataset.controle, e.target.parentNode);
        update(e.target.dataset.pecas);
    });
});

const changeValue = (string, item) => {
    const controle = item.querySelector('[data-contador]');

    if (string === '-') {
        if (parseInt(controle.value) === 0) return false;
        controle.value = parseInt(controle.value) - 1;
    }
    else controle.value = parseInt(controle.value) + 1;
}

const update = (peca) => {
    console.log(pecas[peca]);

    stats.forEach((item) => {
        item.textContent = parseInt(item.textContent) + pecas[peca][item.dataset.estatistica];
    });
};
