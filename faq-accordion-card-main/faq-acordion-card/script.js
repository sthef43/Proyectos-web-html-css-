const desplegable = document.querySelectorAll('.slider-text')

desplegable.forEach(Desplegable =>{
    Desplegable.addEventListener('click', () => {
        Desplegable.classList.toggle("Active")
    })
})