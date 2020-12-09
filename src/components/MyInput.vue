<template>
  <div>
    <el-form label-width="50px">
      <el-form-item label="自定义输入框">
        <el-input
          @input="onChange"
          type="text"
          placeholder="请输入内容"
          v-model="input">
        </el-input>
      </el-form-item>
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

</style>