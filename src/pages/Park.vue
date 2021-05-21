<template>
  <Layout>
    <el-row class="banner">
      Slogan
    </el-row>
    <el-row class="main">
      <el-image :src="require('@/assets/layout.jpg')" fit="cover"></el-image>
    </el-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '产业园区'
  }
}
</script>

<style scoped>
.el-image {
  margin-top: 2rem;
}

@media screen and (max-width: 767px) {
  .el-image {
    margin-top: 0;
  }
}
</style>