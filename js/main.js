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

let nav_product_info = document.querySelector('.nav-product-info');
document.querySelector('.nav-product-img').style.setProperty('--height', `${nav_product_info.offsetHeight + 10}px`);

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

let prof = document.querySelector('.profile');
prof.addEventListener('mouseover', spin);
function spin() {
    prof.classList.remove('spinOut')
    prof.classList.add('spin')
}
prof.addEventListener('mouseout', spinOut);
function spinOut() {
    prof.classList.remove('spin')
    prof.classList.add('spinOut')
}