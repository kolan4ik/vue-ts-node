<template>
  <div id="app">
    <HeaderComponent v-if="$route.name != 'Login' && $route.name != '404'" />
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
    <FooterComponent v-if="$route.name != 'Login' && $route.name != '404'" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
import "@/assets/style/global.scss";

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
.el-main {
  overflow: hidden;
  min-height: 100vh;
}
.fade-enter-active {
  animation: slidePageIn 1s forwards;
  animation-timing-function: cubic-bezier(0.8, -0.49, 0.36, 1);
}
.fade-leave-active {
  animation: slidePageDown 1s forwards;
  animation-timing-function: cubic-bezier(0.8, -0.49, 0.36, 1);
}
@keyframes slidePageIn {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes slidePageDown {
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
