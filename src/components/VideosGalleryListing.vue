<template>
  <div>

    <section class="generic-banner">
        <div class="container">
            <h2 class="generic-title">Videos</h2>
            <h3 class="generic-description">Your gate to collect what you need to know</h3>
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
                          <div class="card-thumbnail">
                            <i class="icon-play-button"></i>
                          </div>
                        </div>
                        <div class="card-content">
                            <span class="card-category">Pharma products</span>
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
  mounted() {}
}
</script>
