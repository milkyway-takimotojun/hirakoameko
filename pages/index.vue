<template>
    <div class="container">
        <div class="gazou">
            <img src="\assets\image\トップ.png" alt="トップ画像">
        </div>
        <div class="info">
            <h2>お知らせ</h2>
            <Info />
        </div>
        <div class="">
            <h1>Youtube</h1>
            <Youtube />
        </div>
        <div class="sns">
            <h1>sns各種</h1>
            <Sns />
            <!-- <Sns /> -->
        </div>
        <div class="line">
            <h1>LINEスタンプ</h1>
            <LineStamp />
        </div>
        <div class="sales">
            <h1>通信販売</h1>
        </div>
        <div class="works">
            <h1>お仕事依頼</h1>
        </div>
    </div>
</template>

<style scoped>

img{
    height: auto;
    width: 800px;
}

.gazou {
    text-align: center;
    margin-top: 50px;
}

.info {
    /* margin-top: 100px; */
}

.youtube {
    background-color: rgb(255, 0, 200);
    height: 500px;
    /* margin-top: 50px; */
}

.sns {
    /* background-color: rgb(255, 0, 0); */
    height: 500px;
}

.line {
    background-color: rgb(24, 221, 90);
    height: 500px;
}

.sales{
    background-color: rgb(208, 255, 0);
    height: 500px;
}

.works{
    background-color: rgb(162, 0, 255);
    height: 500px;
}

@media (max-width: 768px) { /* 768px 以下の画面幅の場合 */
  img {
    width: 100%;
  }
}

</style>

