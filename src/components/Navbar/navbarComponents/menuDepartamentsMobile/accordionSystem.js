export function accordionSystem() {

    // MAIN MENU
    document.querySelectorAll('.btn-accordion').forEach((btnAccordion, indexBtnMainMenu) => {
        btnAccordion.addEventListener('click', () => {

            //Fecha um accordion antes de abrir outro
            const btnsMainMenu = Array.from(document.querySelectorAll('.btn-accordion'))

            if (indexBtnMainMenu > -1) {
                btnsMainMenu.splice(indexBtnMainMenu, 1)

                btnsMainMenu.forEach(btnAccordion => {
                    
                    if (btnAccordion.classList.contains('btn-departement-active')) {
                        const accordionContent = btnAccordion.nextElementSibling
                        
                        accordionContent.style.maxHeight = 0

                        btnAccordion.classList.remove('btn-departement-active')

                    }
                })
            }

            const accordionContent = btnAccordion.nextElementSibling

            btnAccordion.classList.toggle('btn-departement-active')

            if (btnAccordion.classList.contains('btn-departement-active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            }
            else {
                accordionContent.style.maxHeight = 0

            }
        })
    })

    // SUBMENU
    document.querySelectorAll('.btn-accordion-submenu').forEach((btnAccordionSubmenu, indexBtnSubmenu) => {
        btnAccordionSubmenu.addEventListener('click', () => {

            //Fecha um accordion antes de abrir outro
            const  btnsSubmenu = Array.from(document.querySelectorAll('.btn-accordion-submenu'))           

            if(indexBtnSubmenu > -1) {               

                btnsSubmenu.splice(indexBtnSubmenu, 1)

                btnsSubmenu.forEach(btnAccordionSubmenu => {

                    if(btnAccordionSubmenu.classList.contains('btn-departement-submenu-active')) {                        
                        const accordionContentSubmenu = btnAccordionSubmenu.nextElementSibling  

                        accordionContentSubmenu.style.maxHeight = 0      

                        btnAccordionSubmenu.classList.remove('btn-departement-submenu-active')
                    }             
                })

            }

            // Abre um novo accordion
            const accordionContentSubmenu = btnAccordionSubmenu.nextElementSibling
            const parent = accordionContentSubmenu.parentNode.parentNode

            btnAccordionSubmenu.classList.toggle('btn-departement-submenu-active')

            if (btnAccordionSubmenu.classList.contains('btn-departement-submenu-active')) {
                accordionContentSubmenu.style.maxHeight = accordionContentSubmenu.scrollHeight + 'px'
                parent.style.maxHeight = parent.clientHeight + accordionContentSubmenu.scrollHeight + 'px'

            }
            else {
                accordionContentSubmenu.style.maxHeight = 0
                parent.style.maxHeight = parent.clientHeight + accordionContentSubmenu.scrollHeight + 'px'
            }

        })
    })
}