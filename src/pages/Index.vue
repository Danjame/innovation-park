<template>
  <Layout>
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="edge in $page.banners.edges" :key="edge.node.id">
        <el-image :src="`${baseUrl}${edge.node.url.url}`" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row class="main">
      <el-col :span="12">
        <el-tabs @tab-click="handleClick">
          <el-tab-pane label="企业动态" name="first">企业动态</el-tab-pane>
          <el-tab-pane label="媒体聚焦" name="second">媒体聚焦</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="12">
        业务板块
      </el-col>
    </el-row>
  </Layout>
</template>

<page-query>
query {
  banners: allStrapiBanner {
    edges {
      node {
        id
        title
        url {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data () {
    return {
      baseUrl: 'http://localhost:1337'
    }
  }
}
</script>

<style scoped>
::v-deep .el-image {
  width: 100%;
  height: 50rem;
}

::v-deep .el-carousel__container {
  height: 50rem;
}

@media screen and (max-width: 991px) {
  ::v-deep .el-carousel__container {
    height: 30rem;
  }

  ::v-deep .el-image {
    height: 30rem;
  }
}

@media screen and (max-width: 767px) {
  ::v-deep .el-carousel__container {
    height: 20rem;
  }

  ::v-deep .el-image {
    height: 20rem;
  }
}

.main {
  padding: 3rem;
}

</style>
