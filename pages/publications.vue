<template>
  <div class='h-full w-full border' :style="{ backgroundImage: `url(${backgroundUrl})` }" style=" background-size: cover;
">


    <h1
      class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Publications
    </h1>

    <div class="container justify-around flex-wrap">
      <div v-for="publi in publications">
        <PersoCard1
          class="border-slate-200 border mt-6 p-1"
          :title="publi.title.rendered"
          :authors="publi.Authors"
          :imageURL="publi.acf.image.url"
          :fields="publi.Field"
          :abstract="publi.acf.abstract"
          :articleURL="publi.acf.url"
        />
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
const { data: publications } = await useFetch(
  "http://olivierglorieux.fr/wp-json/wp/v2/publications?acf_format=standard"
);

const items=['\perco0.png','\perco1.png','\perco2.png','\perco3.png','\perco4.png', '\perco5.png'];
const backgroundUrl = items[Math.floor(Math.random()*items.length)];

</script>

<style scoped>
.container {
  display: flex;
}
</style>
