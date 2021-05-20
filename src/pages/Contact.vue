<template>
  <Layout>
    <el-row class="banner">
      Slogan
    </el-row>
    <el-row class="main">
      <el-col>联系我们：</el-col>
      <el-col>中科经纬智能制造产业园</el-col>
      <el-col>地址：北京市大兴区永昌中路8号</el-col>
      <el-col>邮编：100176</el-col>
      <el-col>电话：176 1099 8776 / 185 1337 1806</el-col>
      <el-col>邮箱：</el-col>
    </el-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style scoped>
.main {
  padding: 2rem;
  color: #3d84b8;
}

.el-col {
  margin-bottom: 1rem;
  text-align: center;
}

h1 {
  text-align: center;
}

@media screen and (max-width: 767px) {
  .main {
    padding: 2rem 1rem;
    font-size: 0.9rem;
  }

  .el-col {
    margin-bottom: 0.5rem;
    text-align: left;
  }
}
</style>