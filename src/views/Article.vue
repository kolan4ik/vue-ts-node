<template>
  <el-row type="flex" justify="center" class="post-view">
    <el-col :xs="23" :sm="22" :md="20" :lq="18" :xl="18">
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-button @click="back()">
            {{ $t("articles.back-btn") }}
          </el-button>

          <h3>{{ articleById.title }}</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <img :src="articleById.image" :alt="articleById.title" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <p>{{ articleById.text }}</p>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="5">
          {{ $t("articles.destination-title") }}:
          <strong>{{ articleById.destination }}</strong>
        </el-col>
        <el-col :span="5">
          {{ $t("articles.destination-author") }}:
          <strong>{{ articleById.autor }}</strong>
        </el-col>
        <el-col :span="5">
          <strong>{{ articleById.postTime }}</strong>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

const Articles = namespace("Articles");

@Component({})
export default class Article extends Vue {
  @Articles.Getter getById: any;
  @Articles.State fromApi: any;

  get articleById() {
    return this.getById(this.$route.params.id);
  }
  back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.post-view {
  margin: 0 0 3rem;
  text-align: center;
  &:first-child {
    margin-top: 1.5rem;
  }
  h3 {
    font-size: 2.5rem;
    margin: 0 0 1rem;
    line-height: 1.25;
    color: #000;
    padding: 0 90px;
  }
  img {
    width: 100%;
    height: auto;
  }
}
.post-subtitle {
  margin: 1.5rem 0;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #9b9b9b;
  strong {
    color: #000;
  }
}
.post-text {
  text-align: left;
  font-size: 1rem;
  line-height: 1.25;
}
.el-button {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
