<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
      <SearchInput />
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#header-text {
  text-align: center;
  font-family: $font-family;
  color: $text-black;
  padding: 1.3rem;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 41px;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 24px;
  }

  @media (min-width: 40rem) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
}
</style>
