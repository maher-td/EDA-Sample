<template>
  <div>
    <section class="generic-banner">
      <div class="container">
        <h2 class="generic-title">Gallery</h2>
        <h3 class="generic-description">Gallery Title goes here, gallery title goes here</h3>
      </div>
    </section>

    <section class="media-center">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-bind:key="index" v-for="(item, index) in 9">
                    <div class="gallery-card">
                        <div class="card-img card-img-details">
                          <img src="https://picsum.photos/id/320/350/200" />
                          <div class="card-thumbnail">
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

export default {
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {}
}
</script>
