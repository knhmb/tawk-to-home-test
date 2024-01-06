<template>
  <section class="category">
    <base-container>
      <div class="category__selected-category">
        <div class="breadcrumb">
          <span @click="$router.push('/')">All categories</span>
          <i class="fa fa-angle-right"></i>
          <span>Getting Started</span>
        </div>
        <div class="category__content">
          <CategoryDetails />
          <Articles />
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import CategoryDetails from "../components/category/CategoryDetails.vue";
import Articles from "../components/category/Articles.vue";

export default {
  components: {
    CategoryDetails,
    Articles,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.category__selected-category {
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
}

.breadcrumb {
  display: flex;
  align-items: center;

  span {
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 400;
  }

  span:first-of-type {
    color: $green;

    line-height: 1.375rem;
    cursor: pointer;
    position: relative;
  }

  span:first-of-type::before {
    content: "";
    width: 0;
    height: 2px;
    background: $green;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.3s;
  }

  span:first-of-type:hover::before {
    width: 100%;
  }

  span:last-of-type {
    color: $text-gray;
    line-height: 1.375rem;
  }

  i {
    color: #d3d3d3;
    font-size: 1rem;
    margin: 0 1rem;
  }
}

.category__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
  gap: 1.5rem;
}

@media (min-width: 40rem) {
  .breadcrumb span {
    font-size: 0.8125rem;
  }

  .category__content {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
