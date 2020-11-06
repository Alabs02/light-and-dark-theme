const checkbox = document.querySelector("input[name=theme]")
const html = document.querySelector("html")

checkbox.addEventListener('change', function() {
    if (checkbox.checked == true) {
        trans()
        html.setAttribute("data-theme", "dark")
    } else {
        trans()
        html.setAttribute("data-theme", "light")
    }
})

let trans  = () => {
    html.classList.add('transition');
    window.setTimeout(() => {
        html.classList.remove('transition')
    }, 2000)
}
