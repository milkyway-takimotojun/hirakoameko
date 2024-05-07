<template>
    <div class="video-card">
      <iframe
        :src="youtubeUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </template>
  
  <script>
  // import chanerimg from '../youtube/Chanerimg.vue'

  export default {
    data() {
      return {
        // 動画のURLにはYouTubeの共有メニューから取得した埋め込み用のURLを使用する
        youtubeUrl: 'https://www.youtube.com/embed/m8SG_a6vgrY?si=IiInqpd4rZTFIfw4'
      };
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
  }
  
  iframe {
    width: 100%; /* iframeの幅をカードの幅に合わせる */
    height: 100%; /* iframeの高さもカードに合わせる */
    border: none; /* iframeのボーダーをなくす */
  }
  </style>
  