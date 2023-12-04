
const menuMoblile = document.querySelector('.menu-button');

menuMoblile.addEventListener('click', menuShow = () => {
    const cabecalho = document.querySelector('.cabecalho');

    if (cabecalho.classList.contains('open')) {
        cabecalho.classList.remove('open');
        document.querySelector('.menu-icon').src = 'imagens/menu.png'
    }
    else {
        cabecalho.classList.add('open');
        document.querySelector('.menu-icon').src = 'imagens/close.png'
    }

})