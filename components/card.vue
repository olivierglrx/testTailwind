<template>
  <div class="card" style="width: 30rem; padding: 1rem">
    <img :src="imageURL" width="100px" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <ul>
        <li v-for="author in authors">{{ author.name }}</li>
      </ul>
      <ul v-if="field">
        <li v-for="field in fields">{{ field.name }}</li>
      </ul>

      <a :href="articleURL" class="btn btn-primary">See ArXiv</a>

      <UPopover overlay>
        <UButton color="white" label="Abstract" />

        <template #panel width="100px">
          <div>
            <Placeholder width="100px" />
            <p width="10px">{{ abstract }}</p>
          </div>
        </template>
      </UPopover>
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
</script>
