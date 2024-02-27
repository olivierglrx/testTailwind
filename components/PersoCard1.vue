<template>
  <div class="card mt-6 max-w-96 min-h-80 m-2 bg-white">
  <div class="flex justify-around mt-6">
    <img :src="imageURL" width="100px" class="card-img-top hover:scale-110 transition duration-500 cursor-pointer" />
  </div>

    <div class="card-body p-2">
      <div v-if="fields">
        <UBadge  color="white" class="m-1  hover:scale-110 transition duration-500 cursor-pointer" v-for="field in fields" @click='printBadge(field.name)'>{{ field.name }}</UBadge>
      </div>
      <h5 class="py-6">{{ title }}</h5>
      
        <!-- <li v-for="author in authors">{{ author.name }}</li> -->
        <!-- <UAvatar   v-for="author in authors" :alt="author.name" size="sm" style='border:1px solid black'/> -->
      

      
      <Panel header="Abstract" toggleable collapsed>
        <p>
          {{ abstract }}
        </p>
      </Panel>
      
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <NuxtLink :href="articleURL" class="btn btn-primary">
        <Button label="See ArXiv"
      /></NuxtLink>  
      
      </button>


<!-- 
      <UPopover overlay>
        <UButton color="white" label="Abstract" />

        <template #panel width="100px">
          <div>
            <Placeholder width="100px" />
            <p width="10px">{{ abstract }}</p>
          </div>
        </template>
      </UPopover> -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  authors: [Boolean, Array],
  imageURL: String,
  fields: [Boolean, Array],
  abstract: String,
  articleURL: String,
});

import Button from 'primevue/button';
import Panel from "primevue/panel";


function printBadge(item){
  console.log(item)
}
</script>
