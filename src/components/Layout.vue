<template>
  <div class="layout">
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f5f7fa;
}

.main-content {
  margin-left: 280px;
  flex: 1;
  min-height: 100vh;
  padding: 0;
  background: #f5f7fa;
}
</style>
