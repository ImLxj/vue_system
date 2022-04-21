<template>
  <el-container>
    <el-aside width="200px">
      <my-aside></my-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyAside from '@/components/MyAside'
export default {
  name: 'MyHome',
  components: { MyAside },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding: 0px;
}
.el-aside {
  overflow: hidden !important;
  height: 100%;
}
.el-container {
  height: 100%;
}
</style>
