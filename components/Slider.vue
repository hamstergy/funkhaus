<template>
  <transition-group name="fade" tag="div">
    <div class="background" :key="currentImg.sourceUrl">
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
        currentIndex: 0,
        height: 0
      }
    },
    props: {
      images: {
        type: Array,
        default: []
      }
    },
    mounted() {
      this.startSlide();
    },
    methods: {
      startSlide() {
        this.timer = setInterval(this.next, 3000);
      },
      next() {
        this.currentIndex += 1;
      }
    },
    computed: {
      currentImg() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss" scoped>
.background {
  position:fixed;
  max-width: 1280px;
  @media only screen and (max-width: 1028px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    top: 50%;
    left: 30%;
    transform: translate(-20%, -50%);
  }
&__image {
  padding: 20px 15%;
  width:100%;
  @media only screen and (max-width: 768px) {
    padding: 20px 0px;
  }
 }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
