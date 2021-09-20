<template>
    <div class="container" :style="{backgroundColor: $store.state.partnerList.gender === 'male' ? 'lightblue' : 'pink'}" >
    <button @click="$store.dispatch('newPartner')">Next in queue</button>
    <button @click="$store.commit('addToCart')">Add to Cart</button>
    <br>
    <br>
    <img :src="$store.state.partnerList.picture.large" :alt="`${$store.state.partnerList.name.first} ${$store.state.partnerList.name.last}`" />
    <h3> Name: {{ $store.state.partnerList.name.first }} {{ $store.state.partnerList.name.last }} </h3>
    <h3> Email: {{$store.state.partnerList.email}} </h3>
    <h3> Gender: {{$store.state.partnerList.gender}} </h3>
    <!-- <button @click="$store.commit('addToCart')"> Add to Cart </button> -->
    </div>
</template>

<script>
export default {
 name: 'Partner',
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
}
img {
    border-radius: 50%;
    border: 5px #333 solid;
    margin-bottom: 1rem;
  }
  button {
      margin: 10px;
  }
</style>