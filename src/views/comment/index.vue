<template>
  <!-- 用一个el-card组件做主页面 -->
 <el-card>
    <!-- 放置一个面包屑组件  slot='header' 表示面包屑会作为具名插槽给card的header部分-->
    <bread-crumb slot='header'>
    <!-- slot='title' 表示 评论管理给面包些的插槽 -->
       <template slot="title">
           评论管理
       </template>
    </bread-crumb>
    <!-- 表格组件 -->
    <el-table :data="list">
       <!-- 使用el-table-column作为列 -->
       <!-- prop 表示显示的字段 label表示表头 -->
       <el-table-column prop="title" width="600"  label="标题"></el-table-column>
       <!-- 给el-table-column 一个formatter属性 用来格式化内容 因为table中不显示布尔值-->
       <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
       <el-table-column  prop="total_comment_count" label="总评论数"></el-table-column>
       <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
       <el-table-column  label="操作">
           <!-- el-table-column组件 在插槽中传出了 row $index store column -->
          <!-- 插槽 -> 作用域插槽 ->子组件中的数据 通过插槽传出 slot-scope接收  row(行数据) $index(索引)  -->
          <!-- 可以放组件 -->
          <template slot-scope="obj">
            <el-button size="small" type='text'>修改</el-button>
             <!-- 文本内容要根据 当前行里面的评论状态决定显示还是隐藏 -->
            <el-button  size="small" type='text'>{{ obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
            </template>
       </el-table-column>
    </el-table>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [
        // { id: 1, name: '北京', date: '123456' },
        // { id: 1, name: '北京', date: '123456' },
        // { id: 1, name: '北京', date: '123456' }
      ]
    }
  },
  methods: {
    //   获取评论数据
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        params: {
          response_type: 'comment' // 此参数用来控制获取数据类型
        }
        // query参数应该在哪个位置传 axios
        // params 传get参数也就是query参数
        // data   传body参数也就是请求体参数
      }).then(result => {
        // console.log(result)

        //  将返回结果的中 数组 给list
        this.list = result.data.results
      })
    },
    //  定义一个格式化的函数
    formatterBool (row, column, cellValue, index) {
      //  row 代表当前的一行数据
      // column 代表当前的列信息
      // cellValue 代表当前单元格的值
      // index 代表当前的索引
      // 该函数需要返回一个值 用来显示
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    //   在钩子函数中 直接获取数据
    this.getComment()
  }
}
</script>

<style>

</style>
