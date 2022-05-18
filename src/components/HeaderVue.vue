<template>
  <header class="container">
    <nav class="container-row">
      <router-link to="/"><h1>VueJs Api</h1></router-link>

      <button class="container" v-on:click="toggleDrawer()">
        <span>&#9776;</span>
      </button>

      <div id="overlay" class="container" v-if="isOpenDrawer" v-on:click="toggleDrawer()"></div>

      <div id="menu-itens" :class="{active:isOpenDrawer}">
        <h2>Menu</h2>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li>
            <a
              target="_blank" rel="noopener noreferrer"
              href="/https://www.youtube.com/channel/UC0xtpF_1vVqC7f_VJdFvu8g"
            >Youtube</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderVue',
  data() {
    return {
      isOpenDrawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isOpenDrawer = !this.isOpenDrawer;
    },
  },
});
</script>

<style scoped>
  a, ul, li {width: auto;}
  header {
    height: 60px;
    background-color: var(--color-background-nav);
    padding: 0px 16px;
  }
  header a {
    width: auto;
    color: #fff;
  }
  header button {
    width: 40px;
    height: 40px;
    background-color: var(--color-background-nav);
    color: aliceblue;
  }

  #overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  #menu-itens {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    background-color: var(--color-background-nav);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #menu-itens h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 16px;
    text-align: center;
  }
  #menu-itens ul li {
    margin-bottom: 16px;
    text-align: center;
  }
  #menu-itens.active {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    header button, #overlay,  #menu-itens h2 {
      display: none;
    }
    #menu-itens {
      display: flex;
      position: static;
      height: 60px;
      width: auto;
    }
    #menu-itens ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    #menu-itens ul li {
      margin-bottom: 0;
      margin-left: 16px;
    }
  }
</style>
