export function menudepartmentsmobileActive() {
    const btnMenudepartmentsmobile = document.getElementById('btn-menudepartmentsmobile')
    const btnCloseMenudepartmentsmobile = document.getElementById('btn-close-menudepartmentsmobile')
    const menudepartmentsmobileContainer = document.querySelector('.menudepartmentsmobile-container')
    const menudepartmentsmobile = document.querySelector('.menudepartmentsmobile')

    btnMenudepartmentsmobile.onclick = () => {
        menudepartmentsmobileContainer.classList.add('menudepartmentsmobile-container-active')
        menudepartmentsmobile.classList.add('menudepartamentsmobile-slider')
    }
    btnCloseMenudepartmentsmobile.onclick = () => {
        menudepartmentsmobileContainer.classList.remove('menudepartmentsmobile-container-active')
        menudepartmentsmobile.classList.remove('menudepartamentsmobile-slider')
    }
}