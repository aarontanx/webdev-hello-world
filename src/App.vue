<template>
<h1 class='header-style'> Project JS </h1>
  <div>
    <Header />
    <Partner />
    <Cart />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Partner from './components/Partner.vue'
import Cart from './components/Cart.vue'

export default {
  props: {
    },
    components: {
      Header,
      Partner,
      Cart
    }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

#nav a.router-link-exact-active {
  color: #42b983;
}

  button {
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 18px;
    border: 0;
    padding: 1rem 1.5rem;
  }
  
  button:focus {
    outline: none;
  }
  
  button:hover {
    transform: scale(0.98);
  }

.header-style {
  font-family: 'Grechen Fuemen', cursive;
}

</style>
