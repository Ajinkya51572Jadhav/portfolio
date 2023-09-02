
//   cursor 
       
       let body = document.querySelector("body");
       console.log(body);
       let cursor = document.querySelector(".cursor");

        body.addEventListener("mousemove",(move)=>{
            console.log(move);
                cursor.style.top=`${move.y}px`;   
                cursor.style.left=`${move.x}px`; 
             });




/*--------------- navigation menu ----------------- */
(() => {


    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.toggle("open");
        fadeOutEffect();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        bodyScrollingToggle();
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300);
    }

    /*----------- attach an event handler to document  ---------- */
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            // make sure event.target.hash has a value before overridding default behavior
            if(event.target.hash !== ""){
                // prevemnt defaul anchor click behavior 
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add(".hide");
                document.querySelector(".section.active").classList.remove("active");
                // active new 'section';
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item' is contained within the navigation menu 
                if(navMenu.classList.contains("open")){
                    // activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    // hide navigation manu 
                    hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash === item.hash){
                            // activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("inner-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url 
                window.location.hash = hash;
            }
        }
    })
})();

// about tab 
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow")
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
    
})();

function bodyScrollingToggle() {
    // document.body.classList.toggle("stop-scrolling");
}




/* --------------- portfolio filter and popup ----------------- */
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItems = document.querySelectorAll(".portfolio-item");

    /* filter portfolio items */
    filterContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            // deactivate existing active 'filter-item' 
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // active new `filter item'
            event.target.classList.add("active", 'outer-shadow');

            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>{
                if(target === item.getAttribute("data-category") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    
    })

    /* --------------- hide all section expect active ----------------- */
    
})();

window.addEventListener("load", () =>{
    // preload
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display = "none";
    }, 600)
})