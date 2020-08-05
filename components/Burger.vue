<template>

    <svg class="menu menu-yellow" @click="toggleMenu" viewBox="0 0 30 12">
      <g>
        <rect class="top" :class="{ 'top--active': isActive}" width="30" height="2"/>
        <rect class="bottom" :class="{ 'bottom--active': isActive}" width="30" height="2" transform="translate(0 10)"/>
      </g>
    </svg>

</template>

<script>
  export default {
    name: 'Burger',
    data() {
      return {
        isActive: false
      }
    },
    store: '',
    methods: {
      toggleMenu() {
        if (this.$store.state.menuOpened) {
          this.$store.commit("SET_MENU", false)
          this.isActive = false
        } else {
          this.$store.commit("SET_MENU", true)
          this.isActive = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    width: 30px;
    margin: 0 28px;
    max-height: 50px;
    &:hover {
      cursor: pointer;
    }
    &-yellow {
      fill: #FDC760;
    }

  }
  .top {
    -moz-transition: all .3s linear;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;

    &--active {
      -moz-transform:rotate(45deg);
      -webkit-transform:rotate(45deg);
      transform:rotate(45deg);
      transform-origin: 40% 0%;
    }
  }
  .bottom {
    -moz-transition: all .3s linear;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    -webkit-transform: translate(0, 10);
    transform: translate(0, 10px);

    &--active {
      -moz-transform:rotate(-45deg);
      -webkit-transform:rotate(-45deg);
      transform:rotate(-45deg);
      transform-origin: 50% 40%;
    }
  }
</style>
