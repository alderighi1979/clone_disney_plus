document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();

            event.target.classList.add('shows__tabs__button--is-active'); // ativa o botão clicado
            aba.classList.add('shows__list--is-active'); // ativa a lista correspondente
        })
    }
})

function escondeTodasAbas(){
    const botoes = document.querySelectorAll('[data-tab-button]'); // agora pega os <button> de verdade
    for(let i = 0; i < botoes.length; i++){
        botoes[i].classList.remove('shows__tabs__button--is-active');
    }

    const listas = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < listas.length; i++){
        listas[i].classList.remove('shows__list--is-active');
    }
}