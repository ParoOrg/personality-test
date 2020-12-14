<template>
  <link
    href="./tailwind.css"
    rel="stylesheet"
  />
  <div :class="$i18n.locale=='ar'?'rtl':''">
    <router-view v-if="loadedData" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadedData: false,
    };
  },
  mounted() {
    this.loadedData = true;
  },
  methods: {
    onWindowLoad() {
      this.loadedData = true;
    },
  },
};
</script>

<style>
@font-face {
    font-family: "Museo Sans Rounded";
    src: url("/font.otf") format("opentype");
}

#app {
  font-family: Museo Sans Rounded, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.rtl {
  direction: rtl;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
