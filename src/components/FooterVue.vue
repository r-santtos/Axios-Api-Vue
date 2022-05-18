<template>
  <footer class="container-row">
    <a
      v-for="(sociaLinks, index) in sociaLinks" :key="index"
      :href="sociaLinks.link" target="_blank" rel="noopener noreferrer"
    >
      {{sociaLinks.label}}
    </a>
  </footer>  
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import api from '@/services/api';

  export default defineComponent({
    name: 'FooterVue',
    data() {
      return {
        sociaLinks: []
      };
    },
    mounted() {
      api.get('social.json').then(response => {
        this.sociaLinks = response.data;
      });
    },
  });
</script>

<style>
  footer {
    min-height: 60px;
    background-color: var(--color-background-nav);
    padding: 8px 16px;
    flex-wrap: wrap;
  }
  footer a {
    color: #fff;
    text-transform: uppercase;
    font-size: var(--font-size-nav);
    margin: 0px 8px;
    width: auto;
  }
</style>