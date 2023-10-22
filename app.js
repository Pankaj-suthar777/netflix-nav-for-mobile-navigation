let open = document.querySelector('.open-btn');
let close = document.querySelector('.close-btn');
let navs = document.querySelectorAll('.nav');

navs.forEach((nav)=>{
    open.addEventListener('click',()=>{
        nav.classList.add('visible');
    })
    close.addEventListener('click',()=>{
        nav.classList.remove('visible');
    })
   
})

