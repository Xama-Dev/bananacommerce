export function menuDepartmentsActive() {
    const wrapMenuDepartments = document.getElementById('wrap-menu-departments')
    const containerBtnMenuDepartmentsBefore = document.styleSheets[8].cssRules[0]
        
    const containerMenuDepartamentsOptions = document.querySelector('.container-menu-departments-options')

    wrapMenuDepartments.onmouseover = function() {
        containerBtnMenuDepartmentsBefore.style.width = '260px'
        containerMenuDepartamentsOptions.classList.add('container-menu-departaments-options-active')
    }
    wrapMenuDepartments.onmouseout = function() {
        containerBtnMenuDepartmentsBefore.style.width = '0px'
        containerMenuDepartamentsOptions.classList.remove('container-menu-departaments-options-active')
    } 
    
    containerMenuDepartamentsOptions.onmouseover = function() {
        containerBtnMenuDepartmentsBefore.style.width = '260px'
        containerMenuDepartamentsOptions.classList.add('container-menu-departaments-options-active')
    }
    containerMenuDepartamentsOptions.onmouseout = function() {
        containerBtnMenuDepartmentsBefore.style.width = '0px'
        containerMenuDepartamentsOptions.classList.remove('container-menu-departaments-options-active')
    }

}