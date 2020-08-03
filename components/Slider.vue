<template>
  <transition-group name="fade" tag="div">
    <div class="background" v-for="i in [currentIndex]" :key="i">
      <img class="background__image" :src="currentImg.sourceUrl" :srcset="currentImg.srcSet" alt="">
    </div>
  </transition-group>
</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        timer: null,
        currentIndex: 0
      }
    },
    props: {
      images: {
        type: Array,
        default: []
      }
    },
    mounted: function() {
      this.startSlide();
    },
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 3000);
      },
      next: function() {
        this.currentIndex += 1;
      }
    },
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  }
</script>

<style lang="scss" scoped>
.background {
  position:absolute;
  max-width: 1280px;
&__image {
   padding: 20px 15%;
   width:100%;
 }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
