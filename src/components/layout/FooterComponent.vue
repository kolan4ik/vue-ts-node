<template>
  <el-footer height="auto">
    <el-row>
      <el-col :span="24">
        <router-link class="footer-logo" to="/">
          <img height="50px" src="@/assets/img/logo.svg" alt="" />
        </router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="footer-text">
          {{ $t("footer-text") }}
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class FooterComponent extends Vue {}
</script>

<style lang="scss" scoped>
.el-footer {
  background: #9b9b9b;
  text-align: center;
  padding: 8rem 0;
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
}
.footer-logo {
  display: inline-block;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
}
.footer-text {
  font-size: 1.5rem;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
}
</style>
