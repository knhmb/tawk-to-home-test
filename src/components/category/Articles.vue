<template>
  <div class="articles">
    <template v-for="article in articles">
      <base-card v-if="article.status === 'published'" :key="article.id">
        <div class="article__content">
          <i :class="`fa fa-${article.icon}`"></i>
          <div>
            <h2 class="article__content-title">{{ article.title }}</h2>
            <p class="article__content-date">
              Updated {{ formatDate(article.updatedOn) }}
            </p>
          </div>
        </div>
        <i class="fa fa-angle-right"></i>
      </base-card>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    formatDate(date) {
      var formattedDate = new Date(date);
      var month = new Intl.DateTimeFormat("en", { month: "short" }).format(
        formattedDate
      );
      var day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
        formattedDate
      );
      // return month + ", " + day + " " + formattedDate.getFullYear();
      return `${month}, ${day} ${formattedDate.getFullYear()}`;
    },
  },
  async created() {
    const response = await axios.get(
      `http://localhost:9000/api/category/${this.$route.params.id}`
    );

    if (response.status !== 200) return;

    this.articles = response.data;
    console.log(response);
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.articles {
  width: 100%;
  max-width: 60rem;

  .card {
    width: 100%;
    // max-width: 40rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1rem;

    .article__content {
      display: flex;
      align-items: center;

      i {
        margin-right: 1rem;
      }

      .article__content-title {
        color: #373737;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0.3rem;
      }

      .article__content-date {
        color: $text-gray;
        font-size: 0.6875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem;
        margin: 0;
      }
    }

    i {
      font-size: 1.5rem;
      color: $green;
    }
  }
}

// @media (min-width: 40rem) {
//   .articles {
//     width: 65%;
//   }
// }
</style>
