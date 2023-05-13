var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay:2500,
        disbledonInteraction:false,
    },
    slidesPerView:"auto",
    spaceBetween:30,
    loop:true,
    centeredSlides:true,
  });