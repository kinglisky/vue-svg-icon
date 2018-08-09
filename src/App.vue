<template>
  <div id="app">
    <div class="group-1">
      <svg-icon class="icon" name="vue"></svg-icon>
      <svg-icon class="icon" name="flower-0"></svg-icon>
      <svg-icon class="icon" name="flower-1"></svg-icon>
      <svg-icon class="icon" name="flower-2"></svg-icon>
    </div>
    <div class="group-2">
      <icon-font class="icon"
        v-for="i in 6" :key="i"
        :name="'f' + i">
      </icon-font>
    </div>
  </div>
</template>

<script>
import SvgIcon from './icon';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: { SvgIcon }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.group-1 {
  color: aqua;
  display: flex;
  justify-content: center;
  margin: 16px 0;
  .icon {
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid #eee;
  }
}

.group-2 {
  color: #19d4ae;
  display: flex;
  justify-content: center;
  margin: 16px 0;
  .icon {
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid #eee;
  }
}
</style>
