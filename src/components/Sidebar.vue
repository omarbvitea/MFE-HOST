<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h1 class="logo">Microfrontends</h1>
      <p class="subtitle">Module Federation Demo</p>
    </div>

    <nav class="sidebar-nav">
      <router-link
        to="/"
        class="nav-item"
        active-class="active"
        exact
      >
        <span class="nav-text">Home</span>
      </router-link>

      <router-link
        to="/microfrontend-1"
        class="nav-item"
        active-class="active"
      >
        <span class="nav-text">Microfrontend 1</span>
      </router-link>

      <router-link
        to="/microfrontend-2"
        class="nav-item"
        active-class="active"
      >
        <span class="nav-text">Microfrontend 2</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <p>Vue 3 + Vite</p>
      <small>Module Federation</small>
    </div>
  </aside>
</template>

<script setup>
// No setup needed
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar-header {
  padding: 32px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #ecf0f1;
}

.subtitle {
  margin: 0;
  font-size: 13px;
  opacity: 0.75;
  color: #bdc3c7;
}

.sidebar-nav {
  flex: 1;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #ecf0f1;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 15px;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.nav-item.active {
  background: #34495e;
  color: #ffffff;
}

.nav-text {
  font-size: 15px;
}

.sidebar-footer {
  padding: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.sidebar-footer p {
  margin: 0 0 4px 0;
  font-size: 13px;
  font-weight: 500;
  color: #ecf0f1;
}

.sidebar-footer small {
  font-size: 12px;
  opacity: 0.7;
  color: #bdc3c7;
}
</style>
