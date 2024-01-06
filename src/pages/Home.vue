<template>
  <base-container>
    <section class="features" v-if="categories.length > 0">
      <template v-for="category in categories">
        <CardItem
          v-if="category.enabled"
          :key="category.id"
          :id="category.id"
          :icon="category.icon"
          :title="category.title"
          :totalArticle="category.totalArticle"
          :updatedOn="category.updatedOn"
          :description="category.descripton"
        />
      </template>
    </section>
  </base-container>
</template>

<script>
import axios from "axios";
import CardItem from "../components/home/CardItem.vue";
import store from "../store";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      categories: store.categories,
    };
  },
  async created() {
    var response = await axios.get("http://localhost:9000/api/categories");
    if (response.status !== 200) return;
    store.categories = response.data.sort((a, b) => a.order - b.order);
    this.categories = store.categories;
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.features {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  max-width: 80rem;
  margin: 1.5rem auto;
}

@media (min-width: 40rem) {
  .features {
    flex-direction: row;
  }
}
</style>
