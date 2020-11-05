<template>
  <div>

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

  </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.min.css";
import axios from 'axios';

let listingThis;
let contactApiUrl;

export default {
  components: {
    Multiselect 
  },
  data() {
    return {
      isAjaxLoading: false,
      scrollCount: 1,
      showNoDataMessage: false,
      isthierMoreData: false,
      value: null,
      options: ['Oldest First', 'Most Recent', 'Latest First', 'Ministery']
    }
  },
  methods: {
     getData: function () {
       
      listingThis.isAjaxLoading = true;

      // concatApiUrl = `${apiUrl}/api/EventsListAPI?nodePath=${this.nodePath}&culture=${this.currentLanguage}&eventType=${this.dropdownValue}&dateFrom=${dateFromVal}&dateTo=${dateToVal}&pageNumber=${this.scrollCount}`

      contactApiUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${listingThis.scrollCount}`

      axios.get(contactApiUrl)
          .then(function (response) {
              if (response.data != "") {
                listingThis.showNoDataMessage = false;
                  if (listingThis.scrollCount == 1) {
                    listingThis.genericData = response.data;
                  } else {
                    listingThis.genericData = listingThis.genericData.concat(response.data);
                  }
              } else {
                listingThis.isthierMoreData = false;

                  //check if scroll count == 1 so i can show empty message

                  if (listingThis.scrollCount == 1) {
                    listingThis.genericData = [];
                    listingThis.showNoDataMessage = true;
                  }
              }
              listingThis.isAjaxLoading = false;

          })
      //TODO Probably will need to make our dates disabled till load
    },
    changeUrlParams: function (paramValue) {
      let queryParams = new URLSearchParams(window.location.search);      
      queryParams.delete("category");
      queryParams.set("category", paramValue);
      history.replaceState(null, null, "?" + queryParams.toString());
    },
    getUrlParams: function () {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const category = urlParams.get('category');
      listingThis.value = category;
    },
  },
  mounted() {
    listingThis = this;

    listingThis.getUrlParams(); 
    
    listingThis.getData();

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !listingThis.isAjaxLoading && listingThis.isthierMoreData) {
          listingThis.scrollCount++;
          listingThis.getData();
        }
      });
    });

    //this is make cause footer content is loaded late so it's positions changed
    setTimeout(function () {
        const container = document.querySelector(".footer");
        observer.observe(container);
    }, 100);
  },
  watch: {
    value: function () {
      listingThis.changeUrlParams(listingThis.value);
      console.log(listingThis.value);
    }
  }
}
</script>
