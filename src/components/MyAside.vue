<template>
  <el-menu
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    style="height: 100%"
    :collapse-transition="false"
  >
    <div class="aside-title">后台管理系统</div>
    <el-menu-item
      v-for="(item, index) in noChildren"
      :key="index"
      :index="item.path + ''"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="(item, index) in hasChildren"
      :key="index"
      :index="index + ''"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          :index="subItem.path + ''"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'MyAside',
  data() {
    return {
      // 控制侧边栏是否展开
      isCollapse: false,
      // 导航栏列表
      menuList: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  },
  // 对列表进行过滤
  computed: {
    // 没有children属性的时候
    noChildren() {
      return this.menuList.filter((item) => !item.children)
    },
    hasChildren() {
      return this.menuList.filter((item) => item.children)
    }
  }
}
</script>

<style lang="less" scoped>
.aside-title {
  width: 100%;
  height: 60px;
  background-color: #545c64;
  text-align: center;
  line-height: 60px;
  font-size: 15px;
  color: white;
  border-bottom: 0.3px solid #efefef;
}
</style>
