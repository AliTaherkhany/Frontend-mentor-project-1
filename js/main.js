let links = document.querySelectorAll('.header-left a');
links.forEach(addClassName);

function addClassName(item, index) {
    let w = item.offsetWidth;
    item.style.setProperty("--width", `${w}px`);
    item.addEventListener('mouseover', function () {
        this.classList.remove('mouseout')
        this.classList.add('mouseover')
    });
    item.addEventListener('mouseout', function () {
        this.classList.remove('mouseover')
        this.classList.add('mouseout')
    })
}