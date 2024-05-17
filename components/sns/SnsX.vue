<template>
  <div class="sns-container">
    <!-- ここに埋め込みコードを貼り付けます -->
    <blockquote class="twitter-tweet">
      <a class="twitter-timeline" href="https://twitter.com/ameko__ame?ref_src=twsrc%5Etfw">Tweets by ameko__ame</a>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'TwitterEmbed',
  mounted() {
    // Twitterのウィジェットスクリプトを動的に追加
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.class = 'snsx'
    this.$el.appendChild(script);
  }
}
</script>

<style scoped>
.sns-container {
  height: 430px; /* 表示したい高さに設定 */
  overflow-y: scroll; /* 縦のスクロールを有効にする */
}

.snsx{

}
</style>