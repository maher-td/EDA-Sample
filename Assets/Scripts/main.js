Vue.config.devtools = true;
let header;
document.addEventListener("DOMContentLoaded", function () {

  let baseUrl = document.location.origin;

  new Vue({
    el: "#header",
    data: {
      isMobile: false,
      isMore: false,
      isMoreTab: false,
      isSearch: true,
      isClose: false,
      searchText: ''
    },
    methods: {
      showMoreTab: () => {
        header.isMore = !header.isMore;
      },
      redirect: (e) => {
        e.preventDefault();
        window.location.href = `${baseUrl}${searchItemUrl}?sc_lang=${languageName}&text=${header.searchText}`;
      },
      hideSearchIcon: () => {
        header.isSearch = false;
        header.isClose = true;
      },
      hideCloseIcon: () => {
        header.isClose = false;
        header.isSearch = true;
      },
      navbarResize: () => {

        if (window.innerWidth > 767) {

          let accumilatedWidth = 0;

          let bmOnlineBtnWidth = document.querySelector(".bm-online").offsetWidth;

          let menuMaxWidth = document.querySelector(".header__end").offsetWidth - bmOnlineBtnWidth;

          let navItems = [...document.getElementsByClassName("b-nav-dropdown")];

          for (let i = 0; i < navItems.length; i++) {

            if (accumilatedWidth >= menuMaxWidth) {

              header.isMoreTab = true;

              navItems.slice(i - 3, navItems.length).forEach((item) => {
                document.querySelector(".more-items").appendChild(item);
              });

              break;

            } else {
              accumilatedWidth += navItems[i].offsetWidth;
            }
          }
        }
      }
    },
    mounted() {

      header = this;

      function SetTimeToCookieLanguage() {
        let cookieArray = document.cookie.split(";");

        let cookieLang = cookieArray[cookieArray.length - 1];
        let cookieName = cookieLang.split("=")[0];
        let currentLang = cookieLang.split("=")[1];

        document.cookie = cookieName + '=' + currentLang + ';expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/';
      }

      let expires = new Date();
      expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));

      SetTimeToCookieLanguage();

      this.navbarResize();

      window.addEventListener('resize', this.navbarResize());

      function sliderOverflow() {
        sliders = document.getElementsByClassName('swiper-overflow');
        for (let i = 0; i < sliders.length; i++) {
          sliders[i].className += " swiper-overflow-inherit";
        }
      }

      sliderOverflow();

      window.addEventListener('resize', sliderOverflow());

    }
  });

  new Vue({
    el: "#footer",
    mounted() {}
  });

  document.getElementById("loader").className = "hide-loader";

});
