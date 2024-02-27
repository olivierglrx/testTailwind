<template>
  <div class="card mt-6 max-w-96 min-h-80 m-6 bg-white">
  <div class="flex justify-around mt-6">
    <img :src="imageURL" width="100px" class="card-img-top hover:scale-125 transition duration-500 cursor-pointer" />
  </div>
    <div class="card-body p-2">
      <h5 class="py-8">{{ title }}</h5>
      <ul>
        <!-- <li v-for="author in authors">{{ author.name }}</li> -->
        <UAvatar  v-for="author in authors" :alt="author.name" size="sm" style='border:1px solid black'/>
      </ul>
      <ul v-if="field">
        <li v-for="field in fields">{{ field.name }}</li>
      </ul>
      
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
</script>
