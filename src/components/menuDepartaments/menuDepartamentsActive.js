export function menuDepartmentsActive() {
    const btnMenuDepartments = document.getElementById('btn-menu-departments')
    const containerBtnMenuDepartmentsBefore = document.styleSheets[8].cssRules[0] 
        
    const containerMenuDepartamentsOptions = document.querySelector('.container-menu-departments-options')

    btnMenuDepartments.onmouseover = function() {
        containerBtnMenuDepartmentsBefore.style.width = '260px'
        containerMenuDepartamentsOptions.classList.add('container-menu-departaments-options-active')
    }
    btnMenuDepartments.onmouseout = function() {
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