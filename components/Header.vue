<template>
    <header class="clay-header">
        <Nav />
    </header>
</template>

<style scoped>
.clay-header {
  padding: 1rem 2rem;
  background-color: #f2f2f2;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2),
              -4px -4px 10px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
}

.clay-nav-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

.clay-nav-item a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.clay-nav-item a:hover {
  color: #555;
}
</style>