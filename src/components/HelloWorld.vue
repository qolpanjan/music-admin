<script setup>
import { ref } from 'vue'
import {sayHello} from '../api/hello'

const count = ref(0)
const message = ref("bymax music")
const hi = () => {
  sayHello().then((res) =>{
    console.log(res)
    message.value = res.data
  })
}
</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="count++">add : {{count}}</q-btn>
  <br/>
  <q-btn color="primary" @click="hi">请求api</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
