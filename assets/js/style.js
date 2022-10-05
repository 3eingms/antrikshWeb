const mobileNav = document.querySelector('.mobile-navbar-btn')
const navList = document.querySelector('.mobile-nav')
mobileNav.addEventListener('click',()=>{
    navList.classList.toggle('nav-list')
})


  const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Blogger";
            }, 4000);
            setTimeout(() => {
                text.textContent = "YouTuber";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);


// swiper section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
});
