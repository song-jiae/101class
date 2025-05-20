var swiper = new Swiper(".mySwiper", {});
      var swiper = new Swiper(".mySwiper02", {
        slidesPerView:4, //한번에 보여줄 슬라이드 수
        spaceBetween:15, //간격
        autoplay:{
          delay:3000, 
          disableOnInteraction	:true, 
          pauseOnMouseEnter: true,
        },
        breakpoints:{
          768:{
            slidesPerView:3,
          },
          480:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:4,
          },
        },
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });