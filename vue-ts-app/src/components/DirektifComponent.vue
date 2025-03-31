<template>
    <div>
      <h2>Semua Contoh Direktif Vue</h2>
  
      <!-- v-if dan v-show -->
      <p v-if="isVisible">Ini hanya muncul jika isVisible = true</p>
      <button @click="toggleVisibility">Tampilkan / Sembunyikan</button>
  
      <!-- v-for -->
      <h3>List Item:</h3>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
  
      <!-- v-bind -->
      <p v-bind:style="{ color: textColor }">Teks ini berubah warna</p>
      <button @click="changeColor">Ubah Warna</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isVisible = ref(true);
  const items = ref(['Vue', 'React', 'Angular']);
  const textColor = ref('black');
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  
  const changeColor = () => {
    textColor.value = textColor.value === 'black' ? 'red' : 'black';
  };
  </script>
  
  <style scoped>
  button {
    margin: 10px;
    padding: 8px;
    background: green;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  