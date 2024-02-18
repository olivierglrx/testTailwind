<template>
  <h1>Publications</h1>
  <div class="container">
    <div class="col" v-for="publi in publications">
      <Card
        :title="publi.title.rendered"
        :authors="publi.Authors"
        :imageURL="publi.acf.image.url"
        :fields="publi.Field"
        :abstract="publi.acf.abstract"
        :articleURL="publi.acf.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: publications } = await useFetch(
  "http://olivierglorieux.fr/wp-json/wp/v2/publications?acf_format=standard"
);
</script>

<style scoped>
.container {
  display: flex;
}
</style>
