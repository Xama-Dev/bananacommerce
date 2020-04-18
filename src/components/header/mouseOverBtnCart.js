export function mouseOverBtnCart() {
    const linkBtnCart = document.getElementById('link-btn-cart')

    linkBtnCart.onmouseover = function () {
        const wrapCartPopover = document.getElementById('wrap-cart-popover')
        wrapCartPopover.classList.add('wrap-cart-popover-active')
    }

    linkBtnCart.onmouseout = function () {
        const wrapCartPopover = document.getElementById('wrap-cart-popover')
        wrapCartPopover.classList.remove('wrap-cart-popover-active')
    }

}