<template>
  <!-- 先在最外层放置一个大容器 因为 小容器只能放到大容器里面 -->
   <el-container>
     <el-aside style="width:200px">
        <!-- 左侧导航组件 -->
       <layout-aside></layout-aside>
     </el-aside>
     <!-- 右侧 再嵌套一个 el-container ，此时这个就等于是另外一个容器-->
     <el-container>
       <!-- 再上下布局 -->
       <el-header>
         <!-- 顶部操作栏 -->
         <layout-header></layout-header>
       </el-header>
       <!-- 主要区域 -->
       <el-main>
         <h1>主要区域</h1>
          <!-- 这里应该放置 二级路由容器 -->
         <router-view></router-view>
       </el-main>
     </el-container>
   </el-container>
</template>

<script>
// 将左侧导航左键引入全局
import LayoutAside from '@/components/home/layout-aside.vue'
import LayoutHeader from '@/components/home/layout-header.vue'
export default {
  components: {
    'layout-aside': LayoutAside,
    'layout-header': LayoutHeader
  }
}
</script>

<style>

</style>
