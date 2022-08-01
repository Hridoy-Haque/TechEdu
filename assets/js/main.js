

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

    const dropdownBtns = document.querySelectorAll('.dropdown>a')

    dropdownBtns.forEach((dropdownBtn) => {
        dropdownBtn.addEventListener('click',function(e){
            e.preventDefault();
            this.nextElementSibling.classList.toggle('show_menu')
            if(this.nextElementSibling.classList.contains('show_menu')){
                this.children[1].classList.add('rotate')
            }else{
                this.children[1].classList.remove('rotate')
            }
        })
    })
})