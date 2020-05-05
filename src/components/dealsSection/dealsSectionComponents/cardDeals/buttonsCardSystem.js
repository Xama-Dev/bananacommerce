export function buttonsCardSystem() {
    
    // funções disparadas no onmouseover e onmouseout em cada botão 
    document.querySelectorAll('.card__deals').forEach(card => {
        
        card.onmouseover = () => {
            card.children[1].classList.add('buttons-card__deals-container-active')

        }
        card.onmouseout = () => {
            card.children[1].classList.remove('buttons-card__deals-container-active')
        }
    })


}