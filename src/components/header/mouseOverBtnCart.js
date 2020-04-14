export function mouseOverBtnCart() {
    const linkBtnCart = document.getElementById('link-btn-cart')

    linkBtnCart.onmouseover = function () {
        const cardPopover = document.getElementById('cart-popover')
        cardPopover.classList.remove('cart-popover-disable')
    }

    linkBtnCart.onmouseout = function () {
        const cardPopover = document.getElementById('cart-popover')
        cardPopover.classList.add('cart-popover-disable')
    }

}