<template>
    <el-aside :width="$store.state.isCollapse ? '180px' : '64px'">
      <!-- 一级菜单，submenu 为二级菜单 -->
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :collapse="!$store.state.isCollapse"
        :collapse-transition="false"
      >
        <h3 v-show="$store.state.isCollapse">网点后台管理</h3>
        <h3 v-show="!$store.state.isCollapse">后台</h3>
        <el-menu-item
          :index="item.path"
          v-for="item in noChildren()"
          :key="item.path"
          @click="clickMenu(item)"
        >
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu
          index="item.label"
          v-for="item in hasChildren()"
          :key="item.path"
        >
          <template #title>
            <component class="icons" :is="item.icon"></component>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="subItem.path"
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              @click="clickMenu(subItem)"
            >
              <component class="icons" :is="subItem.icon"></component>
              <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
  </template>
  <script>
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const list = [
        // 数据处理一般在setup中
        {
          path: "/Deliver", //快递员信息
          name: "Deliver",
          label: "个人信息",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          path: "/Deliver_order",
          name: "Deliver_order",
          label: "我的订单",
          icon: "location",
          url: "Deliver_order/Deliver_order",
        },
      ];
      const router = useRouter();
      const noChildren = () => {
        return list.filter((item) => !item.children);
      };
  
      const hasChildren = () => {
        return list.filter((item) => item.children);
      };
  
      const clickMenu = (item) => {
        router.push({
          name: item.name,
        });
      };
  
      return {
        noChildren,
        hasChildren,
        clickMenu,
      };
    },
  };
  </script>
  <style lang="less" scoped>
  .icons {
    width: 18px;
    height: 18px;
  }
  .el-menu {
    border-right: none;
    h3 {
      line-height: 48px;
      color: #fff;
      text-align: center;
    }
  }
  </style>
  