const slide = document.querySelectorAll('.slider')

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