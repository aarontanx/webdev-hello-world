<template>
    <div class="container">
        <h1> Shortlisted partner: </h1>
        <h3 :key='partner' v-for="partner in $store.state.cartList">
            {{ partner }} 
        </h3>
    </div>
</template>

<script>
export default {
    name: 'Cart'
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  /* background-color: white; */
  background: #f4f4f4;
}
.li {
  /* background: #f4f4f4; */
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
