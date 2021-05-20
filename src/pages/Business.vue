<template>
  <Layout>
    <el-row class="banner">
      Slogan
    </el-row>
    <el-row class="main">
      <div v-for="edge in $page.businesses.edges" :key="edge.node.id">
        <h1>{{edge.node.name}}</h1>
        <p>{{edge.node.description}}</p>
      </div>
    </el-row>
  </Layout>
</template>

<page-query>
query {
  businesses: allStrapiBusiness {
    edges {
      node {
        id
        name
        description
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Business'
  }
}
</script>

<style scoped>
.main {
  padding: 2rem;
  color: #3d84b8;
}

.main>div {
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
}

@media screen and (max-width: 767px) {
  .main {
    padding: 2rem 1rem;
    font-size: 0.9rem;
  }
}
</style>