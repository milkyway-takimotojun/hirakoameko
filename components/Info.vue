<template>
    <div class="">
    <a class="" v-for='notice in notices' :key="notice.id" :href="notice.url">
        <p class="notification-date">{{ notice.date }} {{ notice.content }}</p>
    </a>
    </div>
  </template>

  <script>
  export default {
  data() {
    return {
      notices: [
        { id: 1, date: '2024/03/06', content: 'YouTubeをアップロードしました。', url: 'https://www.youtube.com/watch?v=m8SG_a6vgrY' },
        { id: 2, date: '2024/01/02', content: '新サービスを開始しました。'},
        // 他のお知らせ内容...
      ]
    };
  }
};
  </script>
  
  <style scoped>
  .clay-box {
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:
      7px 7px 14px #C9C9C9,
      -7px -7px 14px #FFFFFF;
    text-align: left;
  }

  .notifications {
  display: flex;
  flex-direction: column;
}

.notification {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow:
    7px 7px 14px #C9C9C9,
    -7px -7px 14px #FFFFFF;
  text-align: center;
}

.notification-date {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.notification-content {
  margin-bottom: 0;
}
  
  /* もしお知らせに特定のスタイルを加えたい場合はここに追記します */
  </style>
  