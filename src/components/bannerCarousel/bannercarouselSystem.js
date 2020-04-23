export function bannercarouselSystem() {
    
    const bannercarouselSlides = document.getElementsByClassName('slide-banner')
    const bannerscarouselDots =  Array.from(document.getElementsByClassName('bannercarousel-dot'))

    const btnNext = document.getElementsByClassName('btn-next')
    const btnPrev = document.getElementsByClassName('btn-prev')

    let indexActualSlide = 0

    //Next and Previous button
    btnNext[0].onclick = () => {        
        
        clearInterval(varAutomaticDisplay)
        automaticDisplay()

        bannercarouselSlides[indexActualSlide].classList.remove('slide-banner-active')
        bannerscarouselDots[indexActualSlide].classList.remove('bannercarousel-dot-active')

        indexActualSlide += 1

        if(indexActualSlide > bannercarouselSlides.length - 1) {
            indexActualSlide = 0
            
        }
        
        bannercarouselSlides[indexActualSlide].classList.add('slide-banner-active')
        bannerscarouselDots[indexActualSlide].classList.add('bannercarousel-dot-active')

    }
    btnPrev[0].onclick = () => {

        clearInterval(varAutomaticDisplay)
        automaticDisplay()
        
        bannercarouselSlides[indexActualSlide].classList.remove('slide-banner-active')
        bannerscarouselDots[indexActualSlide].classList.remove('bannercarousel-dot-active')

        indexActualSlide -= 1
        
        if(indexActualSlide < 0) {
            indexActualSlide = bannercarouselSlides.length - 1
            
        }
        
        bannercarouselSlides[indexActualSlide].classList.add('slide-banner-active')
        bannerscarouselDots[indexActualSlide].classList.add('bannercarousel-dot-active')
    }

    //Dots button
    bannerscarouselDots.forEach((dot, dotIndex) => {
        dot.onclick = () => {

            bannercarouselSlides[indexActualSlide].classList.remove('slide-banner-active')
            bannerscarouselDots[indexActualSlide].classList.remove('bannercarousel-dot-active')
    
            indexActualSlide = dotIndex
    
            bannercarouselSlides[indexActualSlide].classList.add('slide-banner-active')
            bannerscarouselDots[indexActualSlide].classList.add('bannercarousel-dot-active')
        }
    })
    //Pause sliding on mouseover
    bannerscarouselDots.forEach((dot, dotIndex) => {
        dot.onmouseover = () => {
            clearInterval(varAutomaticDisplay)
        }
        dot.onmouseout = () => {            
            automaticDisplay()
        }
    })

    //Automatic display
    let varAutomaticDisplay

    function automaticDisplay() {

        varAutomaticDisplay = setInterval(function() {
    
            bannercarouselSlides[indexActualSlide].classList.remove('slide-banner-active')
            bannerscarouselDots[indexActualSlide].classList.remove('bannercarousel-dot-active')
    
            indexActualSlide += 1
    
            if(indexActualSlide > bannercarouselSlides.length - 1) {
                indexActualSlide = 0            
            }
            
            bannercarouselSlides[indexActualSlide].classList.add('slide-banner-active')
            bannerscarouselDots[indexActualSlide].classList.add('bannercarousel-dot-active')
    
        }, 3000)
    }
    automaticDisplay()
    
}

