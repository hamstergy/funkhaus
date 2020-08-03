<template>
  <div>
    <template v-if="name == 'makemake'">
      <svg class="logo logo-yellow">
        <use xlink:href="~/assets/sprite.svg#logo-makemake" />
      </svg>
    </template>
    <template v-else>
      <svg class="logo rps">
        <use xlink:href="~/assets/sprite.svg#logo-rps" />
      </svg>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Logo",
    props: {
      name: {
        type: String,
        default: "makemake"
      }
    }
  }
</script>

<style lang="scss" scoped>
.logo {
  animation: 1s appear;
  margin: auto;
  width: 149px;
  max-height: 50px;

  &-yellow {
    fill: #FDC760;
  }

}

.rps {
  @media only screen and (max-width: 600px) {
    display:none;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
