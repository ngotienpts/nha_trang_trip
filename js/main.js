document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

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

        // slider six item
        sliderSixItems: function () {
            sixSliders &&
                sixSliders.forEach((sixSlider) => {
                    var next = sixSlider.querySelector(".swiper-button-next");
                    var prev = sixSlider.querySelector(".swiper-button-prev");
                    new Swiper(sixSlider, {
                        slidesPerView: 2.3,
                        spaceBetween: 16,
                        slidesPerGroup: 2,
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 4.3,
                                slidesPerGroup: 4,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 16,
                                slidesPerGroup: 6,
                            },
                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 25,
                                slidesPerGroup: 6,
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

            // // slider six item
            // this.sliderSixItems();
        },
    };

    app.start();
});
