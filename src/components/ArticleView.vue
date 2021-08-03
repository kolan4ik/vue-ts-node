<template>
  <el-row
    type="flex"
    justify="center"
    :class="viewMode ? '' : 'block-el-row'"
    v-if="item.title.indexOf(search) > -1"
  >
    <el-col
      :xs="23"
      :sm="22"
      :md="20"
      :lq="viewMode ? 18 : 22"
      :xl="viewMode ? 18 : 22"
      class="post-view"
    >
      <el-row type="flex" justify="center">
        <el-col :span="viewMode ? 12 : 24">
          <h3>{{ item.title }}</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="post-subtitle">
        <el-col :span="viewMode ? 5 : 24">
          {{ $t("articles.destination-title") }}:
          <strong>{{ item.destination }}</strong>
        </el-col>
        <el-col :span="viewMode ? 5 : 24">
          {{ $t("articles.destination-author") }}:
          <strong>{{ item.autor }}</strong>
        </el-col>
        <el-col :span="viewMode ? 5 : 24">
          {{ item.postTime }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="viewMode ? 16 : 24">
          <img :src="item.image" :alt="item.title" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="post-text">
        <el-col :span="viewMode ? 12 : 24">
          <p>{{ trunctw(item.text, 200) }}</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-button @click="viewMore(item.id, item)">
            {{ $t("articles.view-btn") }}
          </el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Item } from "@/types";

@Component({})
export default class ArticleView extends Vue {
  @Prop() item?: Item;

  @Prop({ default: "" }) search?: string;

  @Prop({ required: true, default: true }) viewMode?: boolean;

  trunctw(str: string, n: number): string {
    return str.length > n ? `${str.substr(0, n - 1)} ...` : str;
  }

  viewMore(id: string, item: any) {
    this.$router.push({
      name: "Article",
      params: { id, item },
    });
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
.block-el-row {
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .post-subtitle {
    flex-direction: column;
    div {
      padding: 0.5rem;
    }
  }
}
</style>
