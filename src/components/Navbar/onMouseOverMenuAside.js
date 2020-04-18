export function onMouseOvermenuAside() {
    const triggerCurrenceOptions = document.getElementById('trigger-currence-options')
    const triggerLanguageOptions = document.getElementById('trigger-language-options')

    const wrapCurrenceOptions = document.getElementById('wrap-currence-options')
    const wrapLanguageOptions = document.getElementById('wrap-language-options')

    const triggers = [triggerCurrenceOptions, triggerLanguageOptions ]
    const wraps = [wrapCurrenceOptions, wrapLanguageOptions]

    // triggers onmouseover
    triggers.forEach( (trigger) => {
        
        trigger.onmouseover = () => {
            if(trigger.id === 'trigger-currence-options') {
                wrapCurrenceOptions.classList.add('wrap-options-active')
            }
            else if (trigger.id === 'trigger-language-options') {
                wrapLanguageOptions.classList.add('wrap-options-active')
            }
        }
        trigger.onmouseout = () => {
            if(trigger.id === 'trigger-currence-options') {
                wrapCurrenceOptions.classList.remove('wrap-options-active')
            }
            else if (trigger.id === 'trigger-language-options') {
                wrapLanguageOptions.classList.remove('wrap-options-active')
            }
        }
    })

    // wraps onmouseover
    wraps.forEach( wrap => {
        wrap.onmouseover = () => {
            wrap.classList.add('wrap-options-active')
        }
        wrap.onmouseout = () => {
            wrap.classList.remove('wrap-options-active')
        }
    })


}