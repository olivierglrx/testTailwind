<template>
  
  <h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Publications</h1>

  <div class="container text-center justify-around	flex-wrap">
    <div  v-for="publi in publications" class="border-slate-200 border m-px 	">
      <PersoCard1
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
