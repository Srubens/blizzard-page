let slider_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView:3,
    direction:'vertical',
    watchSlidesProgress: true,
    breakpoints:{
        320:{
            direction:'horizontal'
        },
        1150:{
            direction:'vertical' 
        }
    }
})

let progressSlide = document.querySelector(".js_progress")

let slider_hero = new Swiper(".slide-principal", {
    effect: "fade",
    autoplay:{
        delay:5000
    },
    thumbs:{
        swiper:slider_thumbnail,
    },
    on:{
        init:function(){
            progressSlide.classList.remove('animate')
            progressSlide.classList.remove('active')
            progressSlide.classList.add('animate')
            progressSlide.classList.add('active')
        },
        slideChangeTransitionStart:function(){
            progressSlide.classList.remove('animate')
            progressSlide.classList.remove('active')
            progressSlide.classList.add('active')
        },
        slideChangeTransitionEnd:function(){
            progressSlide.classList.add('animate')
        },
    }
})

const allFilters = document.querySelectorAll('.js-nav-games li a')
const tabPane = document.querySelectorAll('.tab-pane-games')
// console.log(tabPane)
allFilters.forEach((filter, index) =>{
    filter.addEventListener('click', (e) =>{
        e.preventDefault()

        allFilters.forEach((item) =>{
            item.classList.remove('active')
        })
        
        tabPane.forEach((item) =>{
            item.classList.remove('active')
        })

        tabPane[index].classList.add('active')
        filter.classList.add('active')
    })
})

const btnOpenModal = document.querySelector(".js_open_modal")
const btnCloseModal = document.querySelector(".js_close")
let tagHTML = document.documentElement;

let js_btn_modal = document.querySelector('.js_btn_modal')
js_btn_modal.addEventListener('click', (e) =>{
    e.preventDefault()
    tagHTML.classList.add('show-modal')
})

btnOpenModal.addEventListener('click', (e) =>{
    e.preventDefault()
    tagHTML.classList.add('show-modal')
})

btnCloseModal.addEventListener('click', () =>{
    tagHTML.classList.remove('show-modal')
})

const btnMenu = document.querySelectorAll(".js-btn-menu")
const menuSite = document.querySelectorAll(".js_menu")

btnMenu.forEach((btn, index) =>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        
        menuSite.forEach((item) =>{
            item.classList.remove('active')
            item.addEventListener('mouseleave', ()=>{
                item.classList.remove('active')
                btn.classList.remove('active')
            })
        })


        btnMenu.forEach((item) =>{
            item.classList.remove('active')
        })

        btn.classList.add('active')
        menuSite[index].classList.add('active')
    })
})

let btnMenuMobile = document.querySelectorAll('[data-js]')
function toggleSubMenu(clickMenu){
    let subMenu = document.querySelectorAll('[data-submenu]')
    subMenu.forEach((sub, index) =>{
        if( sub.dataset.submenu === clickMenu ){
            sub.classList.toggle('active')
            btnMenuMobile.forEach((active, index) =>{
                if(active.dataset.js === sub.dataset.submenu){
                    active.classList.toggle('active')
                }else{
                    active.classList.remove('active')
                }
            })
        }else{
            sub.classList.remove('active')
        }
    })
}


btnMenuMobile.forEach((menu, index)=>{
    menu.addEventListener('click', (e) =>{
        e.preventDefault()
        toggleSubMenu(menu.dataset.js)
    })
})

let btnMobile = document.querySelector('.btn_js_mobile')
let btnClose = document.querySelector('.js_btn_close')
let jsOverlay = document.querySelector('.js_overlay')

btnMobile.addEventListener('click',menuDropdown)
jsOverlay.addEventListener('click',menuDropdown)
btnClose.addEventListener('click', (e)=>{
    e.preventDefault()
    document.documentElement.classList.remove('menu-opened')
})

function menuDropdown(){
    document.documentElement.classList.toggle('menu-opened')
}
