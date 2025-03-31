<template>
  <div class="container">
    <h1>Selamat Datang di Vue TypeScript</h1>
    <p>Pilih menu untuk melihat contoh:</p>
    <router-link :to="{ name: 'direktif' }" class="btn">Direktif</router-link>
    <router-link :to="{ name: 'data-binding' }" class="btn">Data Binding</router-link>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
.btn {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background: blue;
  color: white;
  text-decoration: none;
  width: 200px;
  text-align: center;
  border-radius: 5px;
}
</style>
