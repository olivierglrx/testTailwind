<template>
  <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Publications</h1>

  <div class="flex flex-wrap">
    <div class="col" v-for="publi in publications">

      <Card
        :title="publi.title.rendered"
        :authors="publi.Authors"
        :imageURL="publi.acf.image.url.replace(/^http:/, 'https:')"
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

</style>
