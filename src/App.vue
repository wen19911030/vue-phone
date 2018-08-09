<template>
  <div id="app">
    <img class="border-1px" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
	name: "App"
};
</script>

<style lang="scss">
@import "./assets/css/base.scss";

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
