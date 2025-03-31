<template>
    <div>
      <h2>Semua Contoh Data Binding</h2>
      
      <!-- Property Binding -->
      <p>Nama: {{ nama }}</p>
      <input v-model="nama" placeholder="Ubah Nama"/>
  
      <!-- Array Binding -->
      <h3>List Bahasa Pemrograman:</h3>
      <ul>
        <li v-for="(bahasa, index) in bahasaPemrograman" :key="index">
          {{ bahasa }}
        </li>
      </ul>
  
      <!-- Kondisional Binding -->
      <p v-if="isVisible">Ini hanya muncul jika isVisible = true</p>
      <button @click="toggleVisibility">Tampilkan / Sembunyikan</button>
  
      <!-- Class dan Style Binding -->
      <p :class="{ highlight: isHighlight }">Teks dengan class binding</p>
      <button @click="toggleHighlight">Ubah Warna</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const nama = ref('Farhan');
  const bahasaPemrograman = ref(['Python', 'JavaScript', 'TypeScript', 'C++']);
  const isVisible = ref(true);
  const isHighlight = ref(false);
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  
  const toggleHighlight = () => {
    isHighlight.value = !isHighlight.value;
  };
  </script>
  
  <style scoped>
  button {
    margin: 10px;
    padding: 8px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .highlight {
    color: red;
    font-weight: bold;
  }
  </style>
  