<template>
    <div>
        <button class="clay clay-button" @click="goToUrl" >{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    url:{
      type:String,
    }
  },
  methods: {
    goToUrl() {
      window.location.href = this.url; // ボタンクリックでURLに遷移する
    }
  }
}
</script>


<style scoped>

.clay-button {
  padding: 10px 20px;
  border: none;
  background-color: #e98bc2; /* ライトグレーの背景 */
  color: #333; /* テキストの色 */
  transition: all 0.3s ease; /* スムーズな状態変化 */
}

.clay-button:hover {
  background-color: #f039a4; /* ホバー時の背景色を暗くする */
}

.clay-button:active {
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2), /* クリック時に影を内側に */
              inset -4px -4px 10px rgba(255, 255, 255, 0.5);
}

</style>