if(localStorage.getItem('darkmode')){
    const html = document.querySelector("html")
    html.classList.toggle('dark-mode')
}

function darkMode() {
    const html = document.querySelector("html")
    const dmIcon = document.getElementById('dmIcon')
    const buttonDark = document.getElementById("darkMode")
    buttonDark.addEventListener('click', () => {

        html.classList.toggle('dark-mode')
        
        const dmPref = localStorage.getItem('darkmode')

        if(!dmPref){
            localStorage.setItem('darkmode', true)
        }
        if(dmPref){
            localStorage.removeItem('darkmode')
        }
        
    })
    return html
}
darkMode()