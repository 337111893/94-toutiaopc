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
      list: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2951298517,2642680472&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2554214457,1269801370&fm=11&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1600177256,2461674506&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3893150589,3164340353&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang='less'>
.second-home {
  /* calc 计算的意思 */
  height: calc(100vh - 60px);
  background-size: cover;
  background-image: url("../../assets/img/beijing.jpg");
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
