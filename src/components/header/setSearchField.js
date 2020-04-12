export function setSearchField () {
    
    const selectElement = document.getElementById('selectSearchField')
    const selectLabelSpan = document.getElementById('selectLabelSpan') 
    const selectLabel = document.getElementById('selectLabel')
    
    selectElement.onchange = function () {
        const selectedIndex = selectElement.selectedIndex
        const selectedItem = selectElement.options[selectedIndex].text.replace(/\s{2,}/g,'')            
        
        selectLabelSpan.innerText = selectedItem
        
        const selectLabelWidth = selectLabel.offsetWidth
        selectElement.style.width = `${selectLabelWidth}px`
    }    
}