<template>
    <div class="statusBar">
        <el-row>
            <el-col :span="2">
                <div class="circle"></div>
            </el-col>
            <el-col :span="18">
                <div>在线</div>
            </el-col>
            <el-col :span="4">
                <el-popover
                    ref="popover"
                    placement="top"
                    width="150"
                    trigger="click"
                    content="修改自动回复内容">
                </el-popover>
                <i class="icon iconfont icon-setup_fill" v-popover:popover></i>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: "status-bar"
};
</script>
<style lang="less" scoped>
.statusBar {
  border-top: 1px solid rgb(212, 211, 211);
  padding: 7px 10px;
  font-size: 14px;

  .circle {
    width: 10px;
    height: 10px;
    background: #66cd00;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin-top: 5px;
  }

  i {
    font-size: 20px;
    color: #5c5c5c;
  }
}
</style>
