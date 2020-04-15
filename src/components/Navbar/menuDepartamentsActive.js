export function menuDepartmentsActive() {
    const btnMenuDepartments = document.getElementById('btn-menu-departments')
    const containerBtnMenuDepartmentsBefore = document.styleSheets[6].cssRules[2]   
    
    const containerMenuDepartamentsOptions = document.querySelector('.container-menu-departments-options')

    btnMenuDepartments.onmouseover = function() {
        containerBtnMenuDepartmentsBefore.style.width = '220px'
        containerMenuDepartamentsOptions.classList.add('container-menu-departaments-options-active')
    }
    btnMenuDepartments.onmouseout = function() {
        containerBtnMenuDepartmentsBefore.style.width = '0px'
        containerMenuDepartamentsOptions.classList.remove('container-menu-departaments-options-active')
    } 
    
    containerMenuDepartamentsOptions.onmouseover = function() {
        containerBtnMenuDepartmentsBefore.style.width = '220px'
        containerMenuDepartamentsOptions.classList.add('container-menu-departaments-options-active')
    }
    containerMenuDepartamentsOptions.onmouseout = function() {
        containerBtnMenuDepartmentsBefore.style.width = '0px'
        containerMenuDepartamentsOptions.classList.remove('container-menu-departaments-options-active')
    }

}