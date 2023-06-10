document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    var fourSliders = document.querySelectorAll(".js__fourItems");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            backTop &&
                (backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                });
        },

        // slider four item
        sliderFourItems: function () {
            fourSliders &&
                fourSliders.forEach((fourSlider) => {
                    var next = fourSlider.querySelector(".swiper-button-next");
                    var prev = fourSlider.querySelector(".swiper-button-prev");
                    new Swiper(fourSlider, {
                        slidesPerView: 2,
                        spaceBetween: 16,
                        slidesPerGroup: 1,
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false,
                        },
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 3.3,
                                slidesPerGroup: 1,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                slidesPerGroup: 1,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                slidesPerGroup: 1,
                            },
                        },
                    });
                });
        },

        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 600 ||
                    document.documentElement.scrollTop > 600
                ) {
                    backTop.style.top = "2.25rem";
                } else {
                    backTop.style.top = "-2.25rem";
                }
            }
            backTop &&
                (backTop.style.top =
                    600 < document.body.scrollTop ||
                    600 < document.documentElement.scrollTop
                        ? "2.25rem"
                        : "-2.25rem");
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },
        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // window scroll
            this.windowScroll();

            // // slider four item
            this.sliderFourItems();
        },
    };

    app.start();
});
