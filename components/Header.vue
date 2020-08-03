<template>
  <div class="header">
    <logo name="makemake"/>
    <h1 class="title" v-html='$store.state.title'></h1>
    <div class="right">
      <logo name="rps"/>
      <burger />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Burger from '~/components/Burger'

export default {
  name: "HeaderApp",
  components: {Logo, Burger}
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 30px 50px 80px;
}
.title {
  margin: auto;
  font: 18px/22px 'RM Neue';
  color: #FDC760;
}
.right {
  display: flex;
}
</style>
