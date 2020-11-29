<template>
  <div id="app">
    <Navbar />
   <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    
  </div>
</template>

<script>

import Navbar from './components/Navbar'


export default {
  name: 'App',
  components : {
    Navbar
  }
  
}
</script>

<style>
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  margin-top: 0;
   


}

html{
background: #005C97;  
background: -webkit-linear-gradient(to right, #363795, #005C97);  
background: linear-gradient(to right, #363795, #005C97); 
}


</style>
