<template>
  <div>
    <div id="dark-mode-toggle" title="Dark mode toggle">🌒</div>

<div class="home-page__highlights">
  <div class="container">
    <div class="row">
      <div class="col-md-4">

      </div>
      <div class="col-md-8">
        <swiper ref="awesomeSwiperHighlights" :options="swiperOptionHighlights">
          <swiper-slide v-bind:key="index" v-for="(item, index) in 5">
            <div class="generic-slider__details">
              <div class="generic-slider__img">
                <img src="https://picsum.photos/id/300/900/500" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</div>

    <div class="home-page__services">
      <div class="container">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Services</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Products</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> 
            <h2 class="generic-title">Services</h2>
            <h3 class="generic-description">Our services meet a range of business challenges</h3>
            <div class="row">
              <div class="col-md-4" v-bind:key="index" v-for="(item, index) in 3">
                <div class="services-card">
                  <i class="icon-document"></i>
                  <p class="services-card-content">Request for a register for controlled or semi controlled drugs custody</p>
                  <a href="#" class="view-details">
                    View Details
                  </a>
                </div>  
              </div>  
            </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <h2 class="generic-title">Products</h2>
            <h3 class="generic-description">Our services meet a range of business challenges</h3>
            <div class="row">
              <div class="col-md-4" v-bind:key="index" v-for="(item, index) in 3">
                <div class="services-card">
                  <i class="icon-document"></i>
                  <p class="services-card-content">Request for a register for controlled or semi controlled drugs custody</p>
                  <a href="#" class="view-details">
                    View Details
                  </a>
                </div>  
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-page__announcements">
      <div class="container">
        <h2 class="generic-title">Announcements</h2>
        <h3 class="generic-description">The Newest About Authority</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="announcements-card">
              <img class="card-img" src="https://picsum.photos/id/330/535/240"/>
              <div class="card-content">
                <h2 class="card-title">The Newest About Authority The Newest About Authority</h2>
                <span class="card-date">22 August 2020</span>
                <p class="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
              </div>
            </div>
          </div>
           <div class="col-md-6">
            <div class="row">
              <div class="col-md-6" v-bind:key="index" v-for="(item, index) in 4">
                <div class="announcements-small-card">
                  <img class="card-img" src="https://picsum.photos/id/330/260/110"/>
                  <div class="card-content">
                    <span class="card-date">22 August 2020</span>
                    <p class="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-page__media-center">
      <div class="container">
        <h2 class="generic-title">Media center</h2>
        <h3 class="generic-description">Your gate to collect what you need to know</h3>
      </div>
      <div class="row">
        <div class="col-md-3" v-bind:key="index" v-for="(item, index) in 4">
          <div class="media-center-card">
            <img src="https://picsum.photos/id/340//575"/>
            <div class="card-details">
              <h3>Video Gallery</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="show-all">
        <a href="#">See All</a>
      </div>
    </div>

    <div class="home-page__subscribe">
      <div class="container">
        <h2 class="generic-title">Subscribe</h2>
        <h3 class="generic-description">We guarantee quality and Compliance Request for what you want to know</h3>
        <h4 class="options-title">Choose you interest channels or choose all</h4>
        <div class="subscribe-options">
          <div class="radio-toolbar" v-bind:key="index" v-for="(item, index) in 5">
            <input type="radio" name="subscribe"/>
            <label>Events</label>
          </div>
          <div class="radio-toolbar">
             <input type="radio" name="subscribe"/>
            <label>Choose all</label>
          </div>
        </div>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="input-field">
                <input type="text" placeholder="Name"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-field">
                <input type="number" placeholder="Phone"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-field">
                <input type="email" placeholder="Email"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-field">
                <input type="number" placeholder="Code of country"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-field">
                <input type="number" placeholder="Code of country"/>
              </div>
            </div>
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <div class="home-page__useful-links">
      <div class="container">
        <h2 class="generic-title">useful links</h2>
        <h3 class="generic-description">Rather than individual Job we look for partners willing to make the best results for you too</h3>
      </div>
      <swiper ref="awesomeSwiperLinks" :options="swiperOptionLinks">
        <swiper-slide v-bind:key="index" v-for="(item, index) in 10">
          <div class="useful-links__content">
            <div class="useful-links__img">
              <img src="https://picsum.photos/id/300/1024/768"/>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="home-page__send-iquiry">
      <div class="container">
        <h2 class="generic-title">Send Iquiry</h2>
        <h3 class="generic-description">have some questions, we are here for you !</h3>
        <div class="row">
          <div class="col-md-3">
            <i class="icon-send-mail"></i>
          </div>
          <div class="col-md-9">
            <form class="">
              <div class="row">
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="text" placeholder="Name"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="number" placeholder="Phone"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="number" placeholder="Code of country"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <input type="text" placeholder="Name of Company"/>
                  </div>
                </div>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="row justify-content-between">
          <div class="col-md-3">
            <div class="logo-container">
              <div class="logo-item">
                <div class="logo">
                  <a href="#" class="logo-link"><img src="https://picsum.photos/id/300/345/110" /></a>
                </div>
              </div>
              <div class="footer-brief">
                <p>Brief About Authority connects medical pros around the world during COVID-19Brief About Authority connects medical pros around the world during COVID-19 Brief About Authority connects medical pros around </p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col" v-bind:key="index" v-for="(item, index) in 4">
                <div class="footer-item" >
                    <div class="toggle-item" data-toggle="collapse" data-target="#multiCollapseExample-1" aria-expanded="false" aria-controls="multiCollapseExample-1">
                        <h4 class="footer-item__title">Title</h4>
                    </div>
                    <ul class="collapse multi-collapse show items-list" id="multiCollapseExample-1">
                      <li v-bind:key="index" v-for="(item, index) in 5">
                          <a href="#">About Authority</a>
                      </li> 
                    </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="copy-right">
        <p class="copy-right-text">Crafted by Turndigital</p>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
      Swiper,
      SwiperSlide
  },
  data() {
    return {
      swiperOptionHighlights: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        centeredSlides: false,
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          500: {
            slidesPerView: 1.08,
            spaceBetween: 10,
            centeredSlides: true
          },
        },
      },
      swiperOptionLinks: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 6.5,
        spaceBetween: 30,
        allowTouchMove: true,
        centeredSlides: true,
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          500: {
            slidesPerView: 1.08,
            spaceBetween: 10,
            centeredSlides: true
          },
        },
      },
    }
  },
  mounted() {

    this.$refs.awesomeSwiperLinks.destroySwiper();
    this.$refs.awesomeSwiperLinks.initSwiper();

    const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
    let theme = localStorage.getItem('theme');

    if (theme === 'dark') enableDarkMode();

    darkModeToggleBtn.addEventListener('click', () => {
      
      theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  
    function enableDarkMode() {
      darkModeToggleBtn.innerHTML = '☀️';
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
      darkModeToggleBtn.innerHTML = '🌒';
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));
  }
}
</script>
