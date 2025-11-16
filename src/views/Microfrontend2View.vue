<template>
  <div class="microfrontend-view">
    <Suspense>
      <template #default>
        <MicroApp2 />
      </template>
      <template #fallback>
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading Microfrontend 2...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const MicroApp2 = defineAsyncComponent(() => import('mf2/MicroApp'))
</script>

<style scoped>
.microfrontend-view {
  min-height: 100vh;
  width: 100%;
  background: #f5f7fa;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 16px;
  background: #f5f7fa;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e0e0e0;
  border-top-color: #16a085;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading p {
  color: #666;
  font-size: 16px;
}
</style>
