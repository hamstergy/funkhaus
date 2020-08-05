<template>
  <div>
    <header-app />
    <transition name="fade">
      <slider :images="sliderArray" v-if="hover && windowWidth > 768"/>
    </transition>
    <div class="editor">
      <p
          class="editor__item"
          v-for="editor in editors"
          @mouseover="currentEditorImage=editor.featuredImage; hover=true"
          @mouseleave="hover = false">{{editor.title}}</p>
    </div>
  </div>
</template>

<script>
import HeaderApp from '~/components/Header';
import Slider from '~/components/Slider';
import axios from 'axios'

export default {
  name: 'Editors',
  components: { HeaderApp, Slider },
  data() {
    return {
      editors: {},
      windowWidth: 1080,
      siteMeta: {
        title: '',
        description: '',
        thumbnail: ''
      },
      page: {
        title: ''
      },
      currentEditorImage: {},
      hover: false,
      images: []
    }
  },
  head () {
    return {
      title: this.siteMeta.title + ' - ' + this.page.title,
      meta: [
        {hid: 'description', name: 'description', content: this.siteMeta.description}
      ],
    }
  },
  async fetch() {
    const res = await axios.get(
      'https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json'
    )
    this.$store.commit("SET_TITLE", res.data.page.title);
    this.editors = res.data.pages;
    this.siteMeta = res.data.siteMeta;
    this.page = res.data.page;
    this.images = res.data.images
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    sliderArray: function() {
      return [this.currentEditorImage, ...this.images]
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  padding: 50px;
  column-count: 3;
  column-gap: 60px;
  font: 24px/37px 'RM Neue';
  color: #FDC760;
  position: relative;
  @media only screen and (max-width: 768px) {
    column-count: 2;
  }
  @media only screen and (max-width: 600px) {
    column-count: 1;
  }
  &__item {
    padding: 16px 0;
  }
}
.background {
  position:absolute;
  max-width: 1200px;
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
