(()=>{const e={openModalBtn:document.querySelector("[data-about-modal-open]"),closeModalBtn:document.querySelector("[data-about-modal-close]"),modal:document.querySelector("[data-about-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-fran-open]"),closeModalBtn:document.querySelector("[data-modal-fran-close]"),modal:document.querySelector("[data-modal-fran]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-loc-open]"),closeModalBtn:document.querySelector("[data-modal-loc-close]"),modal:document.querySelector("[data-modal-loc]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-prod1]"),closeModalBtn:document.querySelector("[data-modal-close-prod1]"),modal:document.querySelector("[data-modal-prod1]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-prod2]"),closeModalBtn:document.querySelector("[data-modal-close-prod2]"),modal:document.querySelector("[data-modal-prod2]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-prod3]"),closeModalBtn:document.querySelector("[data-modal-close-prod3]"),modal:document.querySelector("[data-modal-prod3]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-nav__content")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.toggle("is-hidden"),e.body.classList.remove("no-scroll")}))})();new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInVieport:!0},spaceBetween:30,loop:!0,autoplay:{delay:1e4,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,a11y:{enabled:!0,prevSlideMessage:"Previous review",nextSlideMessage:"Next review",firstSlideMessage:"This is the first review",lastSlideMessage:"This is the last review",paginationBulletMessage:"Go to review {{index}}",notificationClass:"swiper-notification"}});(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.12427fbd.js.map
