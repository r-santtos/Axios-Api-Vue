<template>
  <main class="container">
    <h3>Youtube channel with programming videos</h3>
    <p><a href="https://www.youtube.com/channel/UC0xtpF_1vVqC7f_VJdFvu8g" target="_blank" rel="noopener noreferrer">sign up</a></p>
    <span>
      <a href="https://rsanttos.vercel.app" target="_blank" rel="noopener noreferrer">rsanttos</a>
    </span>
  </main>  
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'MainVue',
  });
</script>

<style>
  main {
    background-color: var(--color-background-home);
    color: aliceblue;
    text-align: center;
    padding: 2rem;
  }
  main h3 {
    max-width: 800px;
    font-size: 2rem;
  }
  main p {
    margin: 32px 0px;
    text-transform: uppercase;
    font-weight: bold;
  }
  main p a {
    width: auto;
    padding: 8px 16px;
    background-color: red;
    color: aliceblue;
    border-radius: 8px;
  }
  main span a {
    width: auto;
    padding: 8px 16px;
    color: aliceblue;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>