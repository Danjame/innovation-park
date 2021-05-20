<template>
  <div class="layout">
    <el-row class="header">
      <el-col class="header-logo">
        <g-link to="/">
          <el-image class="header-logo-img" :src="require('@/assets/logo_horizontal.png')" fit="contain"></el-image>
        </g-link>
      </el-col>
      <el-col class="header-menu">
        <el-menu mode="horizontal" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/business">业务领域</el-menu-item>
          <el-menu-item index="/park">产业园区</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </el-col>
      <div class="menu-btn" @click="drawer = true">
        <i class="el-icon-menu"></i>
      </div>
    </el-row>
    <el-drawer title="导航" :visible.sync="drawer">
      <span>
        <el-menu router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/business">业务领域</el-menu-item>
          <el-menu-item index="/park">产业园区</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </span>
    </el-drawer>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    data() {
      return {
        drawer: false
      };
    }
  };
</script>

<style scoped>
.layout {
  max-width: 100rem;
  margin: 0 auto;
}

.header {
  height: 5.75rem;
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: #fff
}

.header-logo {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-logo .el-image {
  width: 10rem;
  height: 2.5rem;
}

.header-menu {
  min-width: 29.5rem;
}

.el-menu.el-menu--horizontal {
  border-width: 0;
}

.menu-btn {
  display: none;
  font-size: 2rem;
  color: #f55c47
}

@media screen and (max-width: 767px) {
  .header {
    height: 3.75rem;
    padding: 0 1rem;
  }

  .header-logo .el-image {
    width: 8.1rem;
    height: 2rem;
  }

  .menu-btn {
    display: block;
  }

  .header-menu {
    display: none;
  }
}
</style>
