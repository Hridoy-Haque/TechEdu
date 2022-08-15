

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

    if(show_btn){
      show_btn.addEventListener('click',showMenu)
      close_btn.addEventListener('click',hideMenu)
    }


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
      const slider_count = Object.values(document.querySelectorAll('.campus_slider > .swiper-wrapper > .swiper-slide')),
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

        // copyright year ========>
        let date = new Date();
        let year = date.getFullYear();
        let yearEl = document.getElementById('year');
        if(yearEl){
          yearEl.innerHTML = year
        }
        


        // comunity slider
        var comunity = new Swiper(".community", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
              },
            breakpoints: {  
                '575': {
                  slidesPerView: 2,
                  spaceBetween: 40,},
                '767': {
                  slidesPerView: 2,
                  spaceBetween: 50, },
                '991': {
                  slidesPerView: 3,
                  spaceBetween: 50, },
                '1080': {
                  slidesPerView: 4,
                  spaceBetween: 50, },
                '1200': {
                  slidesPerView: 5,
                  spaceBetween: 50, },
            },
          });


        // course price section
        var comunity = new Swiper(".pricing", {
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
              },
            breakpoints: {  

                '600': {
                  slidesPerView: 2,
                  spaceBetween: 30, },
                '991': {
                  slidesPerView: 3,
                  spaceBetween: 30, },
            },
          });

        const selector = document.querySelector('.glightbox');

        if(selector){
          const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
          });
        }
        

        //blog page ==============>
        

        //comment section ==========>

        //reaction ==========>

        const likes = document.querySelectorAll('.like');
        const replies = document.querySelectorAll('.reply');

        function reaction(e){
          e.preventDefault();
          this.classList.toggle('react')
        }

        //like ==========>

        likes.forEach((like)=>{
          like.addEventListener('click',reaction)
        })
        
        //reply ==========>

        replies.forEach((reply)=>{
          reply.addEventListener('click',reaction)
        })



        //animations

        function aos_init() {
          AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
          });
        }
        aos_init();

})

