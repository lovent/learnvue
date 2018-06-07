<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ welcome }}</h1>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/vuongthai95"
          target="_blank"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          href="https://viblo.asia/u/vuongthai95"
          target="_blank"
        >
          Viblo
        </a>
      </li>
      <li>
        <a
          href="https://github.com/lovent"
          target="_blank"
        >
          Github
        </a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      welcome: "Welcome to my first VueApp"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
