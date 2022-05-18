<template>
  <HeaderVue />
  <router-view/>
  <FooterVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderVue from './components/HeaderVue.vue';
import FooterVue from './components/FooterVue.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  }
});
</script>

<style>
  :root {
    --color-background:#F3F3F3;
    --color-background-nav:#2B3D50;
    --color-background-home:#344960;
    --color-text-light:#EDEDED;
    --color-text-title:#FF5555;
    --color-text-dark:#3D3D3D;
  }
  * {
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  a, button {transition: 0.3s;}
  a:hover, button:hover {
    opacity: 0.3; 
    cursor: pointer;
  }
  main {
    min-height: calc(100vh - 120px);
  }
</style>
