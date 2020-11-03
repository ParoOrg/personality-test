<template>
  <link
    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <div :class="$i18n.locale=='ar'?'rtl':''">
    <router-view />
  </div>
</template>

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
