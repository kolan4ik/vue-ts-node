<template>
  <el-header height="auto">
    <el-row type="flex" justify="space-between">
      <el-col class="header_logo" :span="12">
        <a href="/">
          <img height="50px" src="@/assets/img/logo.svg" alt="logo" />
        </a>
      </el-col>
      <el-col class="header-menu" :span="12">
        <el-button size="mini" plain class="mobile-menu" @click="menuNav">
          <i v-if="menuIsActive" class="el-icon-close"></i>
          <i v-else class="el-icon-menu"></i>
        </el-button>
        <el-menu
          :default-active="activeIndex"
          v-bind:class="{ '': !menuIsActive, isOpen: menuIsActive }"
          mode="horizontal"
        >
          <el-menu-item index="1">
            <router-link class="nav-link" to="/">
              {{ $t("menu.home") }}
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link class="nav-link" to="/info">
              {{ $t("menu.info") }}
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link class="nav-link" to="/about">
              {{ $t("menu.about") }}
            </router-link>
          </el-menu-item>
        </el-menu>
        <el-radio-group
          :change="switchLanguage()"
          v-model="language"
          size="mini"
        >
          <el-radio-button label="ru">Ru</el-radio-button>
          <el-radio-button label="en">En</el-radio-button>
        </el-radio-group>
        <el-button class="logout-btn" type="info" size="mini" plain>
          <i class="el-icon-toilet-paper"></i>
          <span class="text-block">
            {{ $t("buttons.buttons-logout") }}
          </span>
        </el-button>
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class HeaderComponent extends Vue {
  menuIsActive: boolean = false;
  language: string = "ru";
  activeIndex: string = "1";
  menuNav() {
    this.menuIsActive = !this.menuIsActive;
  }

  switchLanguage() {
    this.$i18n.locale = this.language;
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  position: relative;
}
.el-menu--horizontal.el-menu {
  border: none;
  .el-menu-item {
    padding: 0;
    background: transparent;
    a {
      padding: 0 1rem;
      text-decoration: none;
      font-size: 1rem;
    }
    &.is-active {
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
    opacity: 0;
  }
  &.isOpen {
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    opacity: 1;
    display: block;
  }
}
.mobile-menu {
  display: none;
  margin: 1rem 1rem 0 0;
  font-size: 14px;
  height: 29px;
  padding: 0 0.5rem;
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.header-menu {
  width: 100%;
  justify-content: flex-end;
  display: flex;
}

.header_logo {
  padding: 0.5rem 1rem;
  display: flex;
}

.el-radio-group {
  margin: 1rem 1rem 1rem 0;
}
.logout-btn {
  height: 29px;
  margin: 1rem 1rem 0 0;
  font-size: 14px;
  @media screen and (max-width: 480px) {
    .text-block {
      display: none;
    }
  }
}
</style>
