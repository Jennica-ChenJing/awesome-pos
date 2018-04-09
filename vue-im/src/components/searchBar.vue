<template>
  <div class="searchBar">
    <el-input
      size="small"
      class="searchInput"
      v-model="key"
      :placeholder="placeholder"
      prefix-icon="el-icon-search"
    ></el-input>
  </div>
</template>

<script>
  /**
   * 搜索框 组件
   */
  export default {
    name: "search-bar",
    props: {
      placeholder: {
        type: String,
        default: "搜索"
      }
    },
    data: function() {
      return {
        key: ""
      };
    }
  }
</script>

<style scoped lang="less">
.searchBar{
}
</style>
