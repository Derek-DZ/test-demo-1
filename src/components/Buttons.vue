<template>
  <div class="wrapper">
    <el-button class="submit" type="primary">提交</el-button>
    <el-button class="clean">清空</el-button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NoName extends Vue {

  }
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>