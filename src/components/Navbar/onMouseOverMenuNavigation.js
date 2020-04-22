export function onMouseOverMenuNavigation() {
    
    // onmouseover li
    const liHome = document.getElementById('li-home')
    const liShop = document.getElementById('li-shop')
    const liPages = document.getElementById('li-pages')
    const liBlog = document.getElementById('li-blog')

    const liCollection = [ liHome, liShop, liPages, liBlog ]

    const styleSheets = document.styleSheets[8]

    liCollection.forEach( (li) => {
        li.onmouseover = () => {
            const id = li.id
            const menuDropdown = document.querySelector(`#wrap-dropdown-${id}`)
            
            if(id !== 'li-home') {
                menuDropdown.classList.add('menu-dropdown-active')  
                
                if(id === 'li-shop') {
                    styleSheets.cssRules[9].style.width = '68px'
                } else if(id === 'li-pages') {
                    styleSheets.cssRules[10].style.width = '68px'
                } else if(id === 'li-blog') {
                    styleSheets.cssRules[11].style.width = '68px'
                }
            } else {
                styleSheets.cssRules[8].style.width = '50px'
            }
        }
        li.onmouseout = () => {
            const id = li.id
            const menuDropdown = document.querySelector(`#wrap-dropdown-${id}`)

            if(id !== 'li-home') {
                menuDropdown.classList.remove('menu-dropdown-active')  
                
                if(id === 'li-shop') {
                    styleSheets.cssRules[9].style.width = '0px'                    
                } else if(id === 'li-pages') {
                    styleSheets.cssRules[10].style.width = '0px'
                } else if(id === 'li-blog') {
                    styleSheets.cssRules[11].style.width = '0px'
                } 
            } else {
                styleSheets.cssRules[8].style.width = '0px'
            }
        }
    })

    // onmouseover wrap dropdown
    const containerMenuDropdownLiShop = document.getElementById('wrap-dropdown-li-shop')
    const containerMenuDropdownLiPages = document.getElementById('wrap-dropdown-li-pages')
    const containerMenuDropdownLiBlog = document.getElementById('wrap-dropdown-li-blog')

    const containerCollection = [
        containerMenuDropdownLiShop, 
        containerMenuDropdownLiPages,
        containerMenuDropdownLiBlog
    ]

    containerCollection.forEach( (container) => {
        const idContainer = container.id

        container.onmouseover = () => {
            container.classList.add('menu-dropdown-active')

            if(idContainer === 'wrap-dropdown-li-shop') {
                styleSheets.cssRules[9].style.width = '68px'
            } else if (idContainer === 'wrap-dropdown-li-pages') {
                styleSheets.cssRules[10].style.width = '68px'
            }else if (idContainer === 'wrap-dropdown-li-blog') {
                styleSheets.cssRules[11].style.width = '68px'
            }
        }
        container.onmouseout = () => {
            container.classList.remove('menu-dropdown-active')

            if(idContainer === 'wrap-dropdown-li-shop') {
                styleSheets.cssRules[9].style.width = '0px'
            } else if (idContainer === 'wrap-dropdown-li-pages') {
                styleSheets.cssRules[10].style.width = '0px'
            }else if (idContainer === 'wrap-dropdown-li-blog') {
                styleSheets.cssRules[11].style.width = '0px'
            }
        }
    })   

}