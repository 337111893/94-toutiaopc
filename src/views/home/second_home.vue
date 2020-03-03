<template>
  <!-- 二级路由的默认组件 -->
  <div class="second-home">
    <!-- 幻灯片 -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
         <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://img5.imgtn.bdimg.com/it/u=3388941488,2735432575&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2554214457,1269801370&fm=11&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1784773965,1273693181&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3819462408,3448612178&fm=26&gp=0.jpg']
    }
  }
}
</script>

<style>
.second-home {
  /* calc 计算的意思 */
  height: calc(100vh - 60px);
  background-size: cover;
  background-image: url("http://img1.imgtn.bdimg.com/it/u=2294080717,3624105796&fm=26&gp=0.jpg");
}
</style>
