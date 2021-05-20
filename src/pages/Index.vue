<template>
  <Layout>
    <el-carousel :autoplay="!isMobile">
      <el-carousel-item v-for="edge in $page.banners.edges" :key="edge.node.id">
        <el-image :src="`${baseUrl}${edge.node.url.url}`" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row class="main">
      <el-col class="main-left" :xs="24" :sm="12">
        <el-tabs v-model="activeName">
          <el-tab-pane label="企业动态" name="first">企业动态</el-tab-pane>
          <el-tab-pane label="媒体聚焦" name="second">媒体聚焦</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col class="main-right" :xs="24" :sm="12">
        <el-image :src="require('@/assets/layout.jpg')" fit="cover"></el-image>
        <div>
          <p>业务板块</p>
          <ul style="margin-top: 20px; display: flex; flex-direction: column">
            <li>园区运营</li>
            <li style="margin-top: 10px;">孵化投资&政策申报</li>
            <li style="margin-top: 10px;">园区服务</li>
          </ul>
        </div>
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
      baseUrl: 'http://localhost:1337',
      isMobile: document.documentElement.clientWidth >= 768 ? false : true,
      activeName: 'first'
    }
  },
  created () {
    const _this = this;
    window.onresize = () => {
      _this.isMobile = document.documentElement.clientWidth >= 768 ? false : true
    }
  }
}
</script>

<style scoped>
::v-deep .el-carousel__container {
  height: 50rem;
}

::v-deep .el-carousel__container .el-image {
  width: 100%;
  height: 50rem;
}

.main {
  padding: 3rem;
}

.main-left, .main-right {
  padding: 1rem;
}

.main-right {
  display: flex;
  justify-content: space-around;
}

.main-right .el-image {
  width: 50%;
  height: 20rem;
}

@media screen and (max-width: 991px) {
  ::v-deep .el-carousel__container {
    height: 30rem;
  }

  ::v-deep .el-carousel__container .el-image {
    height: 30rem;
  }
}

@media screen and (max-width: 767px) {
  ::v-deep .el-carousel__container {
    height: 20rem;
  }

  ::v-deep .el-carousel__container .el-image {
    height: 20rem;
  }

  .main {
    padding: 1rem;
  }

  .main-right {
    display: block;
  }

  .main-right .el-image {
    width: 100%;
    height: 20rem;
  }
}

</style>
