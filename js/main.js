document.addEventListener("DOMContentLoaded", function () {
    const backTop = document.querySelector("#back-top");
    const body = document.body;
    const headerSecondary = document.querySelector(".js__headerSecondary");
    const fourSliders = document.querySelectorAll(".js__fourItems");
    const filters = document.querySelectorAll(".js__filterItem");
    const imageGallery = document.querySelector(".image-gallery");
    const dropdowns = document.querySelectorAll(".js__dropdown");
    const copyLink = document.querySelector(".js__copyLink");
    const popups = document.querySelectorAll(".js__popup");

    const app = {
        handleEvent: function () {
            // When click back top
            if (backTop) {
                backTop.addEventListener("click", function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                });
            }

            // Header secondary
            if (headerSecondary) {
                const searchIcon = headerSecondary.querySelector(
                    ".js__headerSearchIcon"
                );
                const searchForm = headerSecondary.querySelector(
                    ".js__headerSearchForm"
                );
                const overlay = headerSecondary.querySelector(".js__overlay");
                const headerBar =
                    headerSecondary.querySelector(".js__headerMenuBar");
                const headerBarContainer = headerSecondary.querySelector(
                    ".js__headerMenuBarContainer"
                );
                const headerBarClose = headerSecondary.querySelector(
                    ".js__headerMenuBarClose"
                );
                const headerMobileClose = headerSecondary.querySelector(
                    ".js__headerMobileClose"
                );
                const headerMobileBar = headerSecondary.querySelector(
                    ".js__headerMobileBar"
                );
                const headerMobileContainer = headerSecondary.querySelector(
                    ".js__headerMobileContainer"
                );
                const overlayMb = headerSecondary.querySelector(
                    ".js__headerMobileOverlay"
                );

                const toggleOverlay = function () {
                    overlay.classList.remove("active");
                    headerBarContainer.classList.remove("active");
                    body.classList.remove("hide");
                };

                searchIcon.addEventListener("click", function () {
                    const search = searchIcon.querySelector(".search");
                    const close = searchIcon.querySelector(".close");
                    search.classList.toggle("active");
                    close.classList.toggle("active");
                    searchForm.classList.toggle("active");
                });

                headerBar.addEventListener("click", function () {
                    headerBarContainer.classList.add("active");
                    overlay.classList.add("active");
                    body.classList.add("hide");
                });

                headerBarClose.addEventListener("click", toggleOverlay);
                overlay.addEventListener("click", toggleOverlay);

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

                overlayMb.addEventListener("click", toggleOverlay);
            }

            // Filter
            if (filters) {
                filters.forEach((filter) => {
                    const heading = filter.querySelector(".js__filterHeading");
                    const formGroup = filter.querySelector(".js__filterForm");
                    heading.addEventListener("click", function () {
                        this.classList.toggle("active");
                        formGroup.style.maxHeight = formGroup.style.maxHeight
                            ? null
                            : formGroup.scrollHeight + "px";
                    });
                });
            }

            // Image gallery
            if (imageGallery) {
                const images = imageGallery.querySelectorAll(".expNoEdit");
                const totalImages = images.length;
                if (totalImages > 3 && totalImages < 9) {
                    for (let i = 3; i < totalImages && i < 9; i++) {
                        images[i].style.display = "none";
                    }
                }
            }

            // Dropdowns
            if (dropdowns) {
                dropdowns.forEach((dropdown) => {
                    const showDropdown =
                        dropdown.querySelector(".js__dropdownShow");
                    const dropdownContainer = dropdown.querySelector(
                        ".js__dropdownContainer"
                    );

                    showDropdown.addEventListener("click", function () {
                        dropdownContainer.classList.toggle("active");
                    });
                });
            }

            // Copy link
            if (copyLink) {
                copyLink.addEventListener("click", function () {
                    this.classList.add("active");
                    setTimeout(() => {
                        this.classList.remove("active");
                    }, 4000);

                    const currentURL = window.location.href;
                    const tempInput = document.createElement("input");
                    tempInput.value = currentURL;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    tempInput.setSelectionRange(0, tempInput.value.length);
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                });
            }

            // Popups
            if (popups) {
                popups.forEach((popup) => {
                    const showPopup = popup.querySelector(".js__popupShow");
                    const popupContainer = popup.querySelector(
                        ".js__popupContainer"
                    );
                    const closePopup = popup.querySelector(".js__popupClose");

                    showPopup.addEventListener("click", function () {
                        popupContainer.classList.add("active");
                    });

                    closePopup.addEventListener("click", function () {
                        popupContainer.classList.remove("active");
                    });
                });
            }
        },

        sliderFourItems: function () {
            if (fourSliders) {
                fourSliders.forEach((fourSlider) => {
                    const next = fourSlider.querySelector(
                        ".swiper-button-next"
                    );
                    const prev = fourSlider.querySelector(
                        ".swiper-button-prev"
                    );

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
            }
        },

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

        windowScroll: function () {
            window.addEventListener("scroll", () => {
                this.scrollFunc();
            });
        },

        start: function () {
            this.handleEvent();
            this.windowScroll();
            this.sliderFourItems();
        },
    };

    app.start();
});
