<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Microfrontends Demo</h1>
      <p class="lead">
        This application demonstrates Module Federation with Vue 3 and Vite.
        Each microfrontend is independently developed and deployed.
      </p>
    </div>

    <div class="content-wrapper">
      <div class="features">
        <div class="feature-card">
          <div class="feature-icon">🔘</div>
          <h3>Microfrontend 1</h3>
          <p>Interactive button components with custom styling and event handling.</p>
          <router-link to="/microfrontend-1" class="feature-link">
            View Microfrontend 1 →
          </router-link>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎴</div>
          <h3>Microfrontend 2</h3>
          <p>Dynamic card components with flexible layouts and responsive design.</p>
          <router-link to="/microfrontend-2" class="feature-link">
            View Microfrontend 2 →
          </router-link>
        </div>
      </div>

      <div class="info-section">
        <h2>About Module Federation</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🚀 Independent Deployment</h4>
            <p>Each microfrontend can be developed, tested, and deployed independently.</p>
          </div>
          <div class="info-item">
            <h4>🔄 Runtime Integration</h4>
            <p>Components are loaded at runtime, enabling true micro-architecture.</p>
          </div>
          <div class="info-item">
            <h4>📦 Shared Dependencies</h4>
            <p>Common libraries like Vue are shared to optimize bundle size.</p>
          </div>
          <div class="info-item">
            <h4>⚡ Fast Development</h4>
            <p>Vite provides instant hot module replacement for a great DX.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No setup needed
</script>

<style scoped>
.home {
  min-height: 100vh;
  width: 100%;
  background: #f5f7fa;
}

.hero {
  background: #34495e;
  color: white;
  padding: 80px 48px;
  text-align: center;
}

.hero h1 {
  margin: 0 0 16px 0;
  font-size: 48px;
  font-weight: 700;
}

.lead {
  margin: 0 auto;
  max-width: 700px;
  font-size: 20px;
  line-height: 1.6;
  opacity: 0.95;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 64px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-card h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
  color: #333;
}

.feature-card p {
  margin: 0 0 20px 0;
  color: #666;
  line-height: 1.6;
}

.feature-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.feature-link:hover {
  transform: translateX(4px);
  color: #2980b9;
}

.info-section {
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.info-section h2 {
  margin: 0 0 32px 0;
  font-size: 32px;
  color: #333;
  text-align: center;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.info-item h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #333;
}

.info-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}
</style>
