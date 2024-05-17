<template>
    <div class="video-container">
      <div class="video-card" v-for="(url, index) in youbuteUrls" :key="index">
        <iframe
          :src="url"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  // import chanerimg from '../youtube/Chanerimg.vue'

  export default {
    data() {
      return {
        // 動画のURLにはYouTubeの共有メニューから取得した埋め込み用のURLを使用する
        youbuteUrls: ['https://www.youtube.com/embed/b1BMh9U2F3I?si=QV8WwHkJTIsHWfkc',
                      'https://www.youtube.com/embed/7v2PwhWMf8A?si=4j0E9CoQtpCrcOcw',
                      'https://www.youtube.com/embed/Lg5HMmMH9-Y?si=YxMaV8cJBVOxJhI8', 
                      'https://www.youtube.com/embed/5RGgo771bLI?si=BNHcz-WViKk_URbu',
                      
        ]
        
      };
    },
    computed: {
    visibleUrls() {
      if (window.innerWidth <= 768) { // 768px以下の場合、2つの動画のみを表示
        return this.youtubeUrls.slice(0, 2);
      }
      return this.youtubeUrls;
    }
    },
    mounted() {
      window.addEventListener('resize', this.updateVisibleUrls);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateVisibleUrls);
    },
    methods: {
      updateVisibleUrls() {
        this.$forceUpdate(); // リサイズ時にコンポーネントを再描画
      }
    }
};
  </script>
  
  <style scoped>
  .video-card {
    max-width: 300px; /* カードの最大幅を300pxに設定 */
    aspect-ratio: 16 / 9; /* アスペクト比を16:9に保持 */
    /* margin: auto; カードを中央に配置 */
    overflow: hidden; /* 内部がはみ出した場合は隠す */
    border-radius: 10px; /* 角を丸くする */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 影をつける */
    text-align: center;
  }
  
  iframe {
    width: 100%; /* iframeの幅をカードの幅に合わせる */
    height: 100%; /* iframeの高さもカードに合わせる */
    border: none; /* iframeのボーダーをなくす */
  }

  .video-container {
  display: flex;
  flex-wrap: wrap; /* レスポンシブ対応のために追加 */
  gap: 20px; /* カード間のスペース */
  }

  @media (max-width: 768px) {
  .video-card {
    flex: 1 1 calc(50% - 10px); /* スマホの場合、2つ並べる */
  }
}
  </style>
  