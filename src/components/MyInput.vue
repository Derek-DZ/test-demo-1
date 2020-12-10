<template>
  <div>
    <div class="wrapper">
      <el-form class="fromWrapper" :inline="true" label-width="100px">
        <el-form-item class="fromItem" label="自定义输入框">
          <el-input class="my-input"
                    @input="onChange"
                    type="text"
                    placeholder="请输入内容"
                    v-model="input">
          </el-input>
        </el-form-item>
        <button class="add" @click="addKeyValue">添加</button>
      </el-form>
    </div>
    <div class="button-wrapper">
      <el-button class="submit" type="primary">提交</el-button>
      <el-button class="clean">清空</el-button>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class MyInput extends Vue {
    input?: string
    onChange(){
      this.$forceUpdate()
    }
    addKeyValue(){
      console.log('fuck')
      // const input = document.querySelector('el-input') as HTMLInputElement
      // console.log(input)
      // input.style.display = 'flex'
      // const div = document.querySelector('.add') as HTMLDivElement
      // div.style.display = 'none'
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
      border: 1px solid red;
      > .fromItem{
        margin: 5px;
        border: 1px solid blue;
        > .my-input{
          display: none;
        }
      }
    }
  }
  .button-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 5px;
  }

</style>