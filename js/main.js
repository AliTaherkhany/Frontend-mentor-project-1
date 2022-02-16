// header links's hover effect

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

// getting cart image size

let nav_product_info = document.querySelector('.nav-product-info');
document.querySelector('.nav-product-img').style.setProperty('--height', `${nav_product_info.offsetHeight + 10}px`);

// wrapper appearing effect

let cart = document.getElementById('cart-icon');
let wrapper = document.querySelector('.wrapper');
cart.addEventListener('mouseover', show);

function show() {
    wrapper.classList.remove('hide')
    wrapper.classList.add('show')
}
cart.addEventListener('mouseout', hide);

function hide() {
    let stat = true;
    wrapper.addEventListener('mouseover', hold)

    function hold() {
        stat = false
    }
    wrapper.addEventListener('mouseleave', leave)

    function leave() {
        wrapper.classList.remove('show')
        wrapper.classList.add('hide')
    }
    setTimeout(() => {
        if (stat === true) {
            wrapper.classList.remove('show')
            wrapper.classList.add('hide')
        }
    }, 500)
}

// profile image hover effect

let el = document.querySelector('.profile img');
let circle = document.querySelector('.profile circle');
circle.setAttribute('r', `${document.querySelector('.profile').clientHeight / 2 + 2.5 / 2}`);
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

el.addEventListener('mouseover', () => setProgress(100));
el.addEventListener('mouseleave', () => setProgress(0));