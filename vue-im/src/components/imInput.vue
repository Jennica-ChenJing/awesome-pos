<template>
  <div class="imInput">
    <div class="tool">
      <i class="icon iconfont icon-emoji"></i>
      <i class="icon iconfont icon-picture_fill"></i>
      <i class="icon iconfont icon-text"></i>
      <i class="icon iconfont icon-cut"></i>
    </div>
    <textarea v-model="content" placeholder="输入聊天内容"></textarea>
    <div class="btn">
      <el-button size="small" type="info">关闭</el-button>
      <el-button size="small" type="success" @click="submit">发送</el-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "im-input",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    ...mapActions(["sendMessage"]),
    submit() {
      if (this.content.length) {
        this.sendMessage(this.content);
        this.content = "";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.imInput {
  height: 180px;
  border-top: solid 1px #ddd;

  .tool {
    height: 30px;
    padding: 5px 0 1px 15px;

    i {
      font-size: 25px;
      color: #A3A3A3;
      margin: 2px;
    }
  }

  textarea {
    padding: 10px 0 0 10px;
    height: 120px;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    font-size: 16px;
    resize: none;
  }

  .btn {
    position: absolute;
    height: 40px;
    bottom: 0;
    right: 20px;
  }
}
</style>
