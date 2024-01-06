<template>
  <div class="category__details">
    <base-card>
      <div class="header">
        <i :class="`fa fa-${selectedCategory.icon}`"></i>
        <h1 class="header__title">{{ selectedCategory.title }}</h1>
        <p class="header__updated-on">{{ selectedCategory.updatedOn }}</p>
      </div>
      <div class="footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 21.7942C16.5228 21.7942 21 17.3396 21 11.8445C21 6.34941 16.5228 1.89478 11 1.89478C5.47715 1.89478 1 6.34941 1 11.8445C1 17.3396 5.47715 21.7942 11 21.7942Z"
            stroke="#03A84E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 15.8243V11.8442"
            stroke="#03A84E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 7.86804V7.49744"
            stroke="#03A84E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="footer__description">
          {{ selectedCategory.description }}
        </p>
      </div>
    </base-card>
  </div>
</template>

<script>
import store from "../../store";

export default {
  computed: {
    selectedCategory() {
      return store.categories.find((cat) => cat.id === this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.category__details {
  width: 100%;
  max-width: 21.5rem;

  .card {
    width: 100%;
    // max-width: 100%;
    height: 21.61375rem;

    .header,
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 50%;
      padding: 1rem;
    }

    .header {
      border-bottom: 1px solid #eee;

      i {
        color: $green;
        filter: $shadow;
        font-size: 2.74306rem;
      }

      .header__title {
        color: $text-black;
        text-align: center;
        font-size: 1.4375rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 0;
      }

      .header__updated-on {
        color: $text-gray;
        text-align: center;
        font-size: 0.6875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem;
        margin: 0;
        margin-top: 0.3rem;
      }
    }

    .footer__description {
      color: $text-gray;
      text-align: center;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.125rem;
    }
  }
}

// @media (min-width: 40rem) {
//   .category__details {
//     width: 35%;

//   }
// }
</style>
