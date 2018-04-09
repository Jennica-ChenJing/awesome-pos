<template>
    <div>
        <el-button type="primary" @click="open">即时通信</el-button>
        <modal v-if="isShow">
            <im-home></im-home>
        </modal>
    </div>
</template>
<script>
import imHome from "@/components/imHome";
export default {
  name: "hello-world",
  components: { imHome },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    open() {
      this.isShow = true;
    },
    handleClose() {}
  }
};
</script>
<style lang="less" scoped>
.im {
  z-index: 9;
}
</style>
