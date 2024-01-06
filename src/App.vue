<template>
  <div>
    <tawk-header></tawk-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    "tawk-header": Header,
  },
};
</script>

<style lang="scss">
@import "scss/main.scss";
@import "scss/_variables.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: $font-family;
  margin: 0;
}

main {
  background: #fafafa;
  min-height: calc(100vh - 14.8rem);
}
</style>
