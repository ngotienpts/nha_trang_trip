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

    // image gallary
    const imageGallery = document.querySelector(".image-gallery");

    // dropdown
    var dropdowns = document.querySelectorAll(".js__dropdown");

    // copy link
    var copyLink = document.querySelector(".js__copyLink");

    // popups
    var popups = document.querySelectorAll(".js__popup");

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

            // image gallary
            if (imageGallery) {
                const images = imageGallery.querySelectorAll(".expNoEdit");
                const totalImages = images.length;
                if (totalImages > 3 && totalImages < 9) {
                    for (i = 3; i < totalImages && i < 9; i++) {
                        images[i].style.display = "none";
                    }
                }
            }

            // dropdowns
            dropdowns &&
                dropdowns.forEach((dropdown) => {
                    var showDropdown =
                        dropdown.querySelector(".js__dropdownShow");
                    var dropdownContainer = dropdown.querySelector(
                        ".js__dropdownContainer"
                    );

                    showDropdown.onclick = function () {
                        dropdownContainer.classList.toggle("active");
                    };
                });
            // copy link
            if (copyLink) {
                copyLink.addEventListener("click", function () {
                    this.classList.add("active");
                    setTimeout(() => {
                        this.classList.remove("active");
                    }, 4000);

                    // Lấy đường dẫn hiện tại của trang
                    var currentURL = window.location.href;

                    // Tạo một phần tử <input> tạm thời
                    var tempInput = document.createElement("input");
                    tempInput.value = currentURL;
                    document.body.appendChild(tempInput);

                    // Chọn toàn bộ nội dung trong input tạm thời
                    tempInput.select();
                    tempInput.setSelectionRange(0, tempInput.value.length);

                    // Thực hiện sao chép nội dung vào clipboard
                    document.execCommand("copy");

                    // Xóa phần tử input tạm thời khỏi DOM
                    document.body.removeChild(tempInput);
                });
            }

            // popups
            if (popups) {
                popups.forEach((popup) => {
                    var showPopup = popup.querySelector(".js__popupShow");
                    var popupContainer = popup.querySelector(
                        ".js__popupContainer"
                    );
                    var closePopup = popup.querySelector(".js__popupClose");

                    showPopup.onclick = function () {
                        popupContainer.classList.add("active");
                    };
                    closePopup.onclick = function () {
                        popupContainer.classList.remove("active");
                    };
                });
            }
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
