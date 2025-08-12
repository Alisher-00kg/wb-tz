<template>
  <div id="app">
    <nav>
      <router-link to="/incomes">Incomes</router-link>
      <router-link to="/orders">Orders</router-link>
      <router-link to="/sales">Sales</router-link>
      <router-link to="/stocks">Stocks</router-link>
    </nav>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script setup></script>

<style scoped>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  background: #1861f3;
}
nav a {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  transition: border-color 0.3s;
}
nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #fff;
}
</style>
