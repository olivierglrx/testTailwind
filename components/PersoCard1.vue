<template>
  <div class="card" style="width: 30rem; padding: 1rem">
  <div class="flex justify-around">
    <img :src="imageURL" width="100px" class="card-img-top" />
  </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <ul>
        <!-- <li v-for="author in authors">{{ author.name }}</li> -->
        <UAvatar  v-for="author in authors" :alt="author.name" size="sm" style='border:1px solid black'/>
      </ul>
      <ul v-if="field">
        <li v-for="field in fields">{{ field.name }}</li>
      </ul>
      
      <Panel header="Abstract" toggleable collapsed>
        <p class="m-0">
          {{ abstract }}
        </p>
      </Panel>

      <NuxtLink :href="articleURL" class="btn btn-primary">
        <Button label="See ArXiv"
      /></NuxtLink>
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
