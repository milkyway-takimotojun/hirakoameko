<template>
    <nav class="clay-nav">
      <ul class="clay-nav-list">
        <li class="clay-nav-item" v-for="item in menuItems" :key="item.text">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: 'Home', href: '/' },
        // { text: 'プロフィール', href: 'profile' },
        // { text: 'SNS各種', href: 'sns' },
        // { text: 'LINEスタンプ', href:'stump'},
        // { text: '通信販売', href: 'sales'},
        // { text: 'お仕事依頼', href: 'works' },
      ]
    };
  }
};
</script>

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