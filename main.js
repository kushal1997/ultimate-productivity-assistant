const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".navItems");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

const newsletterButton=document.querySelectorAll(".newsletter");
const modal=document.querySelector(".modal");
newsletterButton.forEach(button => {
    button.addEventListener("click",() =>{
        modal.classList.add("show");
    });
})

const close=document.querySelector(".close");
close.addEventListener("click", () => {
    modal.classList.remove("show");
});

const windboxes=document.querySelectorAll(".windboxes .title");
windboxes.forEach(windbox => {
    windbox.addEventListener("click", event =>{
        windbox.classList.toggle("active");
        event.target.nextElementSibling.classList.toggle("active");
    })
});

function updateBrowser(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: window.innerWidth<1064 ? 1:3,
        spaceBetween: 30,
        slidesPerGroup: window.innerWidth<1064 ? 1:3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
      });
}
updateBrowser();
window.onresize=()=>{
    updateBrowser();
}