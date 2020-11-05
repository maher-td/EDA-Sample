<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-links">
          <!-- <div id="dark-mode-toggle" title="Dark mode toggle">🌒</div> -->
          <div class="dark-theme-toggle">
            <label class="switch">
              <input type="checkbox">
              <span id="dark-mode-toggle" class="slider round"></span>
            </label>
            <span>Click Here</span>
          </div>
          <ul class="nav navbar-links-container">
              <li class="nav-item font-options">
                <ul class="nav">            
                  <li class="nav-item font-up">
                    <a class="nav-link" href="javascript:void(0)">A+</a>
                  </li>
                  <li class="nav-item font-down">
                    <a class="nav-link" href="javascript:void(0)">A-</a>
                  </li>
                  <li class="nav-item reset-font">
                    <a class="nav-link" href="javascript:void(0)"><i class="icon-refresh"></i>A</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item social-options">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://www.facebook.com/">
                      <i class="icon-facebook"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://twitter.com/?lang=en">
                      <i class="icon-twitter"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://www.youtube.com/">
                      <i class="icon-youtube"></i>
                    </a>
                  </li>
                    <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://www.instagram.com/?hl=en">
                      <i class="icon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item hotline">
                <span><i class="icon-phone"></i>19181</span>
              </li>

              <li class="nav-item search">
                <i class="icon-search"></i>
              </li>
          </ul>
        </div>
        <div class="navbar-nav-items">
          <ul class="navbar-nav">
            <li class="nav-item" v-bind:key="index" v-for="(item,index) in 8">
              <a class="nav-link" href="#">Home</a>
            </li>
          </ul>
          <div class="login">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </nav>

    <section class="generic-banner">
      <div class="container">
        <h2 class="generic-title">Photo Gallery</h2>
        <h3 class="generic-description">Brief introduction about the photo gallery goes here</h3>
      </div>
    </section>

    <section class="media-center">
        <div class="container">
            <div class="filter-data">
              <span class="filter">Filter By</span>
              <multiselect v-model="value" :options="options" :show-labels="false" :searchable="false"></multiselect>
            </div>
            <div class="row">
                <div class="col-md-4" v-bind:key="index" v-for="(item, index) in 9">
                    <div class="gallery-card">
                        <div class="card-img">
                          <img src="https://picsum.photos/id/320/350/200" />
                          <span class="imgs-number">12</span>
                        </div>
                        <div class="card-content">
                            <span class="card-category">Products</span>
                            <p class="card-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="footer">
      <div class="row justify-content-between">
          <div class="col-md-3">
            <div class="logo-container">
              <div class="logo-item">
                <div class="logo">
                  <a href="#" class="logo-link"><img src="../assets/logo.png" /></a>
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

import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  components: {
    Multiselect 
  },
  data() {
    return {
      value: null,
      options: ['Oldest First', 'Most Recent', 'Latest First', 'Ministery']
    }
  },
  mounted() {
      
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
      // darkModeToggleBtn.innerHTML = '☀️';
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
      // darkModeToggleBtn.innerHTML = '🌒';
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));

    }
}
</script>
