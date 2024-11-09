<template>
    <div class="">
      <!-- <YoutubeChanerimg />
      <YoutubeComment /> -->
      <YoutubeMovie />
      <Button :button-text='buttonText' :url="chanelUrl" class="youtubebutton"></Button>
    </div>
  </template>
  
  <script>
  // import chanerimg from '../youtube/Chanerimg.vue'

  import Button from './Button.vue'

  export default {
  components: {
    Button
  },
  data() {
    return {
      buttonText: 'チャンネルはこちら', 
      chanelUrl: 'https://www.youtube.com/@ameko_hirako'
    }
  }
}
  
  </script>
  
  <style scoped>

  .video-card {
    
  }
  
  iframe {
    width: 100%; /* iframeの幅をカードの幅に合わせる */
    height: 100%; /* iframeの高さもカードに合わせる */
    border: none; /* iframeのボーダーをなくす */
  }

  .youtubebutton{
    margin-top: 10px;
    text-align: center;
  }
  </style>
  