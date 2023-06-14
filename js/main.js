document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");
    // body
    var body = document.body;
    // header
    var headerSecondary = document.querySelector(".js__headerSecondary");

    var fourSliders = document.querySelectorAll(".js__fourItems");

    // filters
    var filters = document.querySelectorAll(".js__filterItem");

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

            // header secondary
            if (headerSecondary) {
                var searchIcon = headerSecondary.querySelector(
                    ".js__headerSearchIcon"
                );
                var searchForm = headerSecondary.querySelector(
                    ".js__headerSearchForm"
                );

                var overlay = headerSecondary.querySelector(".js__overlay");
                var headerBar =
                    headerSecondary.querySelector(".js__headerMenuBar");
                var headerBarContainer = headerSecondary.querySelector(
                    ".js__headerMenuBarContainer"
                );
                var headerBarClose = headerSecondary.querySelector(
                    ".js__headerMenuBarClose"
                );
                var headerMobileClose = headerSecondary.querySelector(
                    ".js__headerMobileClose"
                );
                var headerMobileBar = headerSecondary.querySelector(
                    ".js__headerMobileBar"
                );
                var headerMobileContainer = headerSecondary.querySelector(
                    ".js__headerMobileContainer"
                );
                var overlayMb = headerSecondary.querySelector(
                    ".js__headerMobileOverlay"
                );

                searchIcon.addEventListener("click", function () {
                    var search = searchIcon.querySelector(".search");
                    var close = searchIcon.querySelector(".close");
                    search.classList.toggle("active");
                    close.classList.toggle("active");
                    searchForm.classList.toggle("active");
                });

                headerBar.addEventListener("click", function () {
                    headerBarContainer.classList.add("active");
                    overlay.classList.add("active");
                    body.classList.add("hide");
                });

                headerBarClose.addEventListener("click", function () {
                    headerBarContainer.classList.remove("active");
                    overlay.classList.remove("active");
                    body.classList.remove("hide");
                });

                overlay.addEventListener("click", function () {
                    this.classList.remove("active");
                    headerBarContainer.classList.remove("active");
                    body.classList.remove("hide");
                });
                //

                headerMobileBar.addEventListener("click", function () {
                    headerMobileContainer.classList.add("active");
                    overlayMb.classList.add("active");
                    body.classList.add("hide");
                });

                headerMobileClose.addEventListener("click", function () {
                    headerMobileContainer.classList.remove("active");
                    overlayMb.classList.remove("active");
                    body.classList.remove("hide");
                });

                overlayMb.addEventListener("click", function () {
                    this.classList.remove("active");
                    headerMobileContainer.classList.remove("active");
                    body.classList.remove("hide");
                });
            }

            // filter
            filters &&
                filters.forEach((filter) => {
                    var heading = filter.querySelector(".js__filterHeading");
                    var formGroup = filter.querySelector(".js__filterForm");
                    heading.addEventListener("click", function () {
                        this.classList.toggle("active");
                        if (formGroup.style.maxHeight) {
                            formGroup.style.maxHeight = null;
                        } else {
                            formGroup.style.maxHeight =
                                formGroup.scrollHeight + "px";
                        }
                    });
                });
        },

        // slider four item
        sliderFourItems: function () {
            fourSliders &&
                fourSliders.forEach((fourSlider) => {
                    var next = fourSlider.querySelector(".swiper-button-next");
                    var prev = fourSlider.querySelector(".swiper-button-prev");
                    new Swiper(fourSlider, {
                        slidesPerView: 1,
                        spaceBetween: 0,
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
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 30,
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
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }
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
