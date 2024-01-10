<template>
  <base-container>
    <h1>Showing Search Result for "{{ $route.query.search }}"</h1>
    <template v-if="filteredArticles.length > 0">
      <base-card v-for="article in filteredArticles" :key="article.id">
        <i :class="`fa fa-${article.icon}`"></i>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </base-card>
    </template>
    <h2 v-else>No Articles found</h2>
  </base-container>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      articles: store.articles,
    };
  },
  computed: {
    filteredArticles() {
      return this.articles.filter((o) =>
        Object.keys(o).some((k) =>
          o[k].toLowerCase().includes(this.$route.query.search.toLowerCase())
        )
      );
    },
  },
};
</script>
