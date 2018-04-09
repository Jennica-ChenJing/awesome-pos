<template>
    <div class="userList">
        <ul>
            <li v-for="(item,index) in keySessions" :key="index" :class="{active: item.id === currentId }" @click="selectUser(item.id)">
              <el-row>
                <el-col :span="4">
                  <img class="avatar" width="40" height="40" :src="item.user.img" :alt="item.user.name">
                </el-col>
                <el-col :span="16">
                  <span class="name">{{ item.user.name }}</span>
                </el-col>
                <el-col :span="4">
                  <div class="circle" v-show="!item.isRead"><span class="number">{{ item.messages.length }}</span></div>
                </el-col>
              </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "user-list",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["keySessions", "currentId"])
  },
  methods: {
    ...mapActions(["initData", "selectSession"]),
    selectUser(id) {
      this.selectSession(id);
    }
  }
};
</script>
<style lang="less" scoped>
.userList {
  ul {
    list-style: none;
    margin-left: -35px;
    width: 238px;

    li {
      padding: 8px 7px;
      border-bottom: 1px solid #eaeaea;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.1s;
      &.active {
        background-color: #fff;
      }
    }
    .avatar {
      border-radius: 20px;
      vertical-align: middle;
    }
    .name,
    .circle,
    .number {
      display: inline-block;
    }
    .name {
      margin: 8px 0 0 15px;
      font-size: 17px;
    }
    .circle {
      width: 24px;
      height: 24px;
      background: #f08080;
      -moz-border-radius: 12px;
      -webkit-border-radius: 12px;
      border-radius: 12px;
      margin-top: 8px;

      .number {
        font-size: 16px;
        color: #fff;
        margin: 4px 8px;
      }
    }
  }
}
</style>
