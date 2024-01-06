<template>
  <div class="search">
    <input type="text" placeholder="Search for answers" v-model="search" />
    <div class="search__icon">
      <i class="fa fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.search {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  input {
    padding: 0 1rem;
    border: 1px solid #eeeeee;
    width: 100%;
    height: 3.75rem;
    outline: none;
    border-radius: 4px;
  }

  input::placeholder {
    color: $text-gray;
    font-family: $font-family;
  }

  input:active {
    color: red;
  }

  .search__icon {
    background: $green;
    width: 5rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: 0.3s;

    i {
      font-size: 1.125rem;
      color: #fff;
    }
  }

  .search__icon:hover,
  .search__icon:active {
    background: rgba(3, 168, 78, 0.8);
  }
}
</style>
