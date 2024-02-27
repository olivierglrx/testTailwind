import { createDirectus } from '@directus/sdk';
const directus = createDirectus('http://localhost:8055/');
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('directus', directus);
});