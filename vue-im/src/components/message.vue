<template>
  <div class="message" v-scroll-bottom="currentSession.messages">
    <ul v-if="currentSession">
      <li v-for="(item,index) in currentSession.messages" :key="index">
        <div class="main" :class="{ self: item.self }">
          <img class="avatar" width="40" height="40" :src="item.self ? user.img : currentSession.user.img" />
          <div class="name" v-if="item.self">{{ item.date | time }} {{ user.name }}</div>
          <div class="name" v-else>{{ currentSession.user.name }} {{ item.date | time }}</div>
          <!-- <el-popover ref="popover" placement="top" width="200" trigger="click" content="撤回">
          </el-popover> -->
          <div class="text" v-popover:popover>{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "message",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user", "currentSession"])
  },
  methods: {
    ...mapActions(["selectSession"])
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
      if (typeof date === "string") {
        date = new Date(date);
      }
      return (
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    }
  },
  directives: {
    // 发送消息后滚动到底部
    "scroll-bottom"() {
      //   this.vm.$nextTick(() => {
      //     this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
      //   });
    }
  }
};
</script>
<style lang="less" scoped>
.message {
  padding: 10px 0;
  // overflow-y: scroll;

  li {
    margin-bottom: 15px;
    list-style: none;
  }
  .main {
    .avatar {
      float: left;
      margin: 17px 10px 0 -10px;
      border-radius: 20px;
    }
    .name {
      font-size: 12px;
      margin-bottom: 2px;
      color: #bababa;
    }
    .text {
      display: inline-block;
      position: relative;
      padding: 0 10px;
      max-width: ~"calc(100% - 40px)";
      min-height: 30px;
      line-height: 2.5;
      font-size: 15px;
      text-align: left;
      word-break: break-all;
      background-color: #e5e5e5;
      border-radius: 5px 5px 5px 0;

      &:before {
        content: " ";
        position: absolute;
        top: 9px;
        right: 100%;
        border: 6px solid transparent;
        // border-right-color: #fafafa;
      }
    }
  }
  .self {
    text-align: right;

    .avatar {
      float: right;
      margin: 17px 20px 0 10px;
    }
    .text {
      background-color: #66cd00;
      border-radius: 5px 5px 0 5px;

      &:before {
        right: inherit;
        left: 100%;
        // border-right-color: transparent;
        // border-left-color: #66cd00;
      }
    }
  }
}
</style>
