<template>
  <el-container>
    <el-aside width="200px">
      <my-aside></my-aside>
    </el-aside>
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyAside from '@/components/MyAside'
import MyHeader from '@/components/MyHeader'
export default {
  name: 'MyHome',
  components: { MyAside, MyHeader },
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
