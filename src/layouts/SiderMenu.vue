<template>
  <div style="width: 256px">
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
      :theme="theme"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
export default {
  components: {
    "sub-menu": SubMenu
  },
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path]
    };
  },
  watch: {
    "$route.path": function(val) {
      console.log(this.selectedKeysMap[val]);
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    // getMenuData(routes = [], parentkeys = [], selectedKey) {
    //   const menuData = [];
    //   routes.forEach(item => {
    //     if (item.name && !item.hideInMenu) {
    //       this.openKeysMap[item.path] = parentkeys;
    //       this.selectedKeysMap[item.path] = [selectedKey || item.path];
    //       const newItem = { ...item };
    //       delete newItem.children;
    //       if (item.children && !item.hideChildrenInMenu) {
    //         newItem.children = this.getMenuData(item.children, [
    //           ...parentkeys,
    //           item.path
    //         ]);
    //       } else {
    //         // 这是记录form表单三级子路由。虽然没有在侧边栏显示，在访问三级路由，会激活对应的二级路由
    //         this.getMenuData(
    //           item.children,
    //           selectedKey ? parentkeys : [...parentkeys, item.path],
    //           selectedKey || item.path
    //         );
    //       }
    //       menuData.push(newItem);
    //     } else if (
    //       !item.hideInMenu &&
    //       !item.hideChildrenInMenu &&
    //       item.children
    //     ) {
    //       menuData.push(
    //         ...this.getMenuData(item.children, [...parentkeys, item.path])
    //       );
    //     }
    //   });
    //   return menuData;
    // }
    getMenuData(routes = [], parentsKeys = [], selectedKey) {
      const menuData = [];
      routes.forEach(item => {
        // 过滤登录页面和404
        if (item.name && !item.hideInMenu) {
          // 记录所有的可选项
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          // 记录可选项所有的当前层级和父级
          this.openKeysMap[item.path] = parentsKeys;
          // copy一个item，不修改原来的children
          const newItem = { ...item };
          delete newItem.children;
          // 针对非form的下面的子路由，递归数据
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...parentsKeys,
              item.path
            ]);
          } else {
            // 针对form的路由以及下面的子路由，递归数据，仅仅可以修改selecedKeysMap和openKeysMap
            this.getMenuData(
              item.children,
              selectedKey ? parentsKeys : [...parentsKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          // 针对 ‘/’目录
          menuData.push(
            ...this.getMenuData(item.children, [...parentsKeys, item.path])
          );
        }
      });
      return menuData;
    }
  }
};
</script>
