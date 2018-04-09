<template>
    <div class="imHome">
        <div class="siderBar">
            <search-bar class="search"></search-bar>
            <user-list class="user"></user-list>
            <status-bar class="status"></status-bar>
        </div>
        <div class="main">
            <message></message>
            <im-input></im-input>
        </div>
    </div>
</template>
<script>
import searchBar from "@/components/searchBar";
import userList from "@/components/userList";
import message from "@/components/message";
import imInput from "@/components/imInput";
import statusBar from "@/components/statusBar";

export default {
  name: "im-home",
  components: {
    searchBar,
    userList,
    message,
    imInput,
    statusBar
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.imHome {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid #e5e5e5;

  .siderBar,
  .main {
    height: 100%;
  }

  .siderBar {
    float: left;
    width: 250px;
    // color: #f4f4f4;
    background-color: #e5e5e5;

    .search {
      padding: 7px 10px;
      width: 230px;
      height: 30px;
    }

    .user {
      height: ~"calc(100% - 92px)";
    }

    .status {
      height: 20px;
    }
  }

  .main {
    position: relative;
    overflow: hidden;
    background-color: #fff;

    .message {
      height: ~"calc(100% - 180px)";
    }

    .im-input {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
