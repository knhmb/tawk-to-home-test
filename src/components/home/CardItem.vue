<template>
  <base-card @click.native="selectFeature">
    <div class="feature__icon">
      <i :class="'fa fa-' + icon"></i>
    </div>
    <h1 class="feature__title">{{ title }}</h1>
    <p class="feature__articles">{{ totalArticle }} articles</p>
    <p class="feature__date">
      Last update {{ getDateDifference(updatedOn) }} days ago
    </p>
  </base-card>
</template>

<script>
import dateDifference from "../../mixins/dateDifference";

export default {
  mixins: [dateDifference],
  props: ["id", "icon", "title", "totalArticle", "updatedOn", "description"],
  methods: {
    selectFeature() {
      this.$router.push({ name: "category", params: { id: this.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.card {
  width: 100%;
  max-width: 19.6875rem;
  height: 13.75rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s;

  .feature__icon {
    font-size: 2.74306rem;

    i {
      color: $green;
      filter: $shadow;
    }
  }

  .feature__title {
    color: $text-black;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .feature__articles,
  .feature__date {
    margin: 0;
  }

  .feature__articles {
    color: #03a84e;
    text-align: center;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.3rem;
  }

  .feature__date {
    color: #9c9aa6;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.card:hover {
  transform: scale(1.02);
}
</style>
