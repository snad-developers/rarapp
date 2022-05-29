<template>

  <router-link to="/"><button>HOME</button></router-link>
  <router-link to="/registrationPage"><button align="right">Registration</button></router-link>
  <router-link to="/loginPage"><button align="right">Login</button></router-link>
  <router-view/>
</template>
<script>


export default {

    name:'App',
components: {

  

},

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

