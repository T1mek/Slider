
function slidePlugun(activeSlide = 1){
    const slide = document.querySelectorAll('.slider')

    slide[activeSlide].classList.add('active')
    for (const slider of slide ){
        slider.addEventListener("click",()=>{
            Remove()
            slider.classList.add("active")
            
        })
    }
    
    function Remove() {
        slide.forEach((slider)=>{
            slider.classList.remove("active")
        })
    }
}
slidePlugun()