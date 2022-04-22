<template>
  <header>
    <div class="l-center">
      <el-button
        @click="callCollapse()"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <span class="bread-title">首页</span>
    </div>
    <div class="r-center">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="userImg" :src="userImg" />
        </span>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MyHeader',
  data() {
    return {
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    ...mapMutations(['callCollapse'])
  }
}
</script>

<style lang="less" scoped>
header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.l-center {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-center {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
