<template>
  <div class="latout-aside">
      <!-- 头部图片 -->
      <div class="title">
        <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <!-- 导航菜单 -->
      <el-menu router background-color ="#353b4e" text-color="#adafb5">
          <!-- 首页 1级-->
          <el-menu-item index='/home'>
              <i class="el-icon-thumb"></i>
              <span>首页</span>
          </el-menu-item>
          <!-- 内容管理 -->
          <el-submenu index="2">
                <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>内容管理</span>
                </template>
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index='/home/publish'>发布文章</el-menu-item>
                        <el-menu-item index='/home/articles'>内容列表</el-menu-item>
                        <el-menu-item index='/home/comment'>评论列表</el-menu-item>
                        <el-menu-item index='/home/material'>素材管理</el-menu-item>
          </el-submenu>
          <!-- 粉丝管理 -->
          <el-submenu index="3">
                <template slot="title">
                        <i class="el-icon-s-grid"></i>
                        <span>粉丝管理</span>
                </template>
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index='/home/picture'>图文数据</el-menu-item>
                        <el-menu-item index='/home/fansinfo'>粉丝概况</el-menu-item>
                        <el-menu-item index='/home/fansphoto'>粉丝画像</el-menu-item>
                        <el-menu-item index='/home/fanslist'>粉丝列表</el-menu-item>
          </el-submenu>
          <!-- 账户信息 -->
          <el-menu-item index='/home/account'>
              <i class="el-icon-user-solid"></i>
              <span>账户信息</span>
          </el-menu-item>

      </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.latout-aside{
    background-color: #323745;
    width: 200px;
    height: 100vh;
    .title{
        background-color: #2e2f32;
        text-align: center;
        padding: 15px 0;
        img {
            width: 120px;
        }
    }
    // 菜单栏右侧有个小边框格格不入
    .el-menu{
        border-right: none;
    }
}
</style>
