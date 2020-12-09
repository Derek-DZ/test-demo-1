<template>
  <div class="wrapper">
    <el-form class="fromWrapper" :inline="true" label-width="100px">
      <el-form-item class="fromItem" label="自定义输入框">
        <el-input
          @input="onChange"
          type="text"
          placeholder="请输入内容"
          v-model="input">
        </el-input>
      </el-form-item>
      <button class="add">添加</button>
    </el-form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Input extends Vue {
    input?: string
    onChange(){
      this.$forceUpdate()
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/helper.scss";
  .wrapper{
    border: 1px solid $color-background;
    background-color: $color-background;
    border-radius: 10px;
    >.fromWrapper{
      > .fromItem{
        margin: 5px;
      }
    }
  }

</style>