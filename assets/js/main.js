

window.addEventListener('load',()=>{
    const show_btn = document.querySelector('.show_button'),
          close_btn = document.querySelector('.close_button'),
          nav_menu = document.querySelector('.navbar-collapse');
    
          
    function showMenu(){
        nav_menu.classList.add('show_collapse')
    }
    function hideMenu(){
        nav_menu.classList.remove('show_collapse')
    }

    show_btn.addEventListener('click',showMenu)
    close_btn.addEventListener('click',hideMenu)

    // working on dropdown menu

    const dropdownBtns = document.querySelectorAll('.dropdown > a');


    dropdownBtns.forEach((dropBtn) =>{
        dropBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            const menu = dropBtn.nextElementSibling;
            
            if(menu.classList.contains('show_menu')){
                menu.removeAttribute('style')
                menu.classList.remove('show_menu')
            }else{
                menu.style.height = menu.scrollHeight + 'px'
                menu.classList.add('show_menu')
            }
        })
    })

    // campus overview slider ==================>


    const swiper = new Swiper(".mySwiper", {
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      });
//swiper-slide-active
      const slider_count = Object.values(document.querySelectorAll('.swiper-slide')),
            slider_components = Object.values(document.querySelectorAll('.single_component'));


        setInterval(()=>{
            slider_count.forEach((slider,index) =>{
                if(slider.classList.contains('swiper-slide-active')){
                    slider_components.forEach((component) =>{
                        component.classList.remove('active')
                        slider_components[index].classList.add('active')
                    })
                }
                })
        },[])

})

