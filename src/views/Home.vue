<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="12" class="search-article">
        <el-input
          :placeholder="$t('search-article')"
          prefix-icon="el-icon-search"
          v-model="searchVal"
        >
        </el-input>

        <el-tooltip
          effect="dark"
          :content="$t('btn-tooltip')"
          placement="top-start"
        >
          <el-button
            @click="handlerChangeView"
            type="primary"
            :icon="viewMode ? 'el-icon-menu' : 'el-icon-s-unfold'"
            circle
          >
          </el-button>
        </el-tooltip>
      </el-col>
    </el-row>
    <div v-if="articles" :class="viewMode ? '' : 'block-view'">
      <ArticleView
        v-for="item in articles"
        :key="item.id"
        :item="item"
        :search="searchVal"
        :viewMode="viewMode"
      />
    </div>
    <div v-else>{{ $t("empty-page") }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

import ArticleView from "@/components/ArticleView.vue";
const Articles = namespace("Articles");

@Component({
  components: { ArticleView },
})
export default class Home extends Vue {
  @Articles.State articles: any;
  @Articles.Action fetchApi: any;

  searchVal: string = "";
  viewMode: boolean = true;
  handlerChangeView() {
    this.viewMode = !this.viewMode;
  }
  created() {
    this.fetchApi();
  }
}
</script>

<style lang="scss">
.block-view {
  flex-wrap: wrap;
  display: flex;
  & > .el-row {
    width: 50%;
  }
}
.search-article {
  .el-input {
    display: inline-block;
    vertical-align: top;
    width: 350px;
    margin: 0 0.5rem;
    @media screen and (max-width: 768px) {
      display: block;
      margin: 0 0 0.5rem;
      width: 100%;
    }
  }
}
</style>
