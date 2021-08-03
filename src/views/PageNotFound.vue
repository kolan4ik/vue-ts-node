<template>
  <div class="container">
    <div class="inner">
      <h1>404</h1>
      <p>Page not found back to home page</p>
      <p>
        <el-button type="primary">
          <router-link to="/">Back to home</router-link>
        </el-button>
      </p>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class PageNotFound extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: 100vh;
}
.inner {
  width: 100%;
  margin: 0 auto;
}
.el-button {
  a {
    color: inherit;
    text-decoration: none;
  }
}
h1 {
  font-size: 130px;
  letter-spacing: 20px;
  font-weight: 900;
  margin: 1.5rem;
}
p {
  font-size: 1.2rem;
}
</style>
