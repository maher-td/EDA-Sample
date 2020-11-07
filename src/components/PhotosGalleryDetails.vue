<template>
  <div>
    <section class="generic-banner">
      <div class="container">
        <h2 class="generic-title">Gallery</h2>
        <h3 class="generic-description">Gallery Title goes here, gallery title goes here</h3>
      </div>
    </section>

    <CoolLightBox :items="imgArray"
    :index="fullScreenIndex"
    :effect="'fade'"
    :slideshow = 'false'
    :enableWheelEvent = 'true'
    ref="light"
    @on-change="changeEvent"
    @on-open="openEvent"
    @close="closeEvent">
    </CoolLightBox>

    <section class="media-center">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-bind:key="index" v-for="(item, index) in receivedData">
                    <div class="gallery-card">
                        <div class="card-img card-img-details">
                          <img :src="item.thumbnailUrl" />
                          <div class="card-thumbnail" v-on:click="openFullScreen(index)">
                            <i class="icon-expand"></i>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import axios from 'axios';

let contactApiUrl;
let listingThis;

export default {
  components: {
    CoolLightBox
  },
  data() {
    return {
      fullScreenIndex: null,
      fullScreenOpen: "",
      fullScreenClose: "",
      receivedData: [],
      scrollCount: 1,
      imgArray1: [

      ],
      imgArray: [
         {
          src: "https://www.youtube.com/embed/r6zIGXun57U",
          thumb:"https://picsum.photos/id/370/1024/768",
          autoplay: true,
        },
        {
        src: "https://picsum.photos/id/360/1024/768",
        thumb:"https://picsum.photos/id/360/1024/768"
        },
         {
          src: "https://www.youtube.com/embed/r6zIGXun57U",
          thumb:"https://picsum.photos/id/370/1024/768",
          autoplay: true,
        },
         {
          src: "https://www.youtube.com/embed/r6zIGXun57U",
          thumb:"https://picsum.photos/id/370/1024/768",
          autoplay: true,
        }
      ]
    }
  },
  methods: {
    
    getData() {
      contactApiUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${listingThis.scrollCount}`

      axios.get(contactApiUrl).then(function (response) {
        if (response.data != "") {
          listingThis.receivedData = response.data; 
          listingThis.receivedData.forEach(item => {
            listingThis.imgArray1.push({
              src: item.thumbnailUrl,
              thumb: item.thumbnailUrl
            })
          });
        }
      })
    },
    openFullScreen(index) {
      listingThis.fullScreenIndex = index;
      console.log(index)
    },
    changeEvent() {
      listingThis.fullScreenClose = listingThis.$refs.light.imgIndex
    },
    openEvent() {
      listingThis.fullScreenOpen = listingThis.fullScreenIndex
    },
    closeEvent() {
      listingThis.fullScreenIndex = null
    }
  },
  mounted() {
    listingThis = this;
    listingThis.getData();
  }
}
</script>
