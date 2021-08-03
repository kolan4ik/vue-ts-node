<template>
  <div class="about">
    <h1>{{ namePage }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Info extends Vue {
  namePage: string = "This is info page";
}
</script>

<style lang="scss" scoped>
.container {
}
.el-row {
  width: 100%;
}
</style>
