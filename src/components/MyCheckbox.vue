<template>
  <div class="wrapper">
    <div class="left-wrapper">
      <el-input v-model="value" placeholder="请搜索" @input="onChangeUpdate"></el-input>
      <el-checkbox-group class="my-checkbox-group" v-model="checkedTests">
        <el-checkbox class="checkbox-wrapper" v-for="(item,index) in testOptions" :label="item.key" :key="item.key" v-show="visible[index] !== -1">{{item.key}} <span class="my-user">{{item.value}}</span> </el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="right-wrapper">
      <span class="selected-title">已选择数据</span>
      <el-tag
        class="selected-tags"
        v-for="tag in checkedTests"
        :key="tag"
        closable
        :disable-transitions="true"
        @close="removeTag(tag)">
        {{tag}}
      </el-tag>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import testOptionList from '@/constant/testOptionList';

  @Component
  export default class MyCheckbox extends Vue {
    visible: number[] = []
    value = ''
    testOptions = testOptionList
    checkedTests = [];
    onChangeUpdate(){
      this.$forceUpdate()
      this.filterMethod(this.value, this.testOptions)
    }
    filterMethod(keyWord: string, option: TestOption) {
      if(this.visible.length > 0){
        this.visible = []
      }
      for(let i=0; i<option.length; i++){
        this.visible.push(option[i].key.indexOf(keyWord.toUpperCase()))
      }
    }
    removeTag(tag: string){
      return this.checkedTests.splice(this.checkedTests.indexOf(tag), 1);
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/helper.scss";
  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    height: 150px;
    > .left-wrapper {
      display: flex;
      flex-direction: column;
      width: 50%;
      border: 1px solid $color-background;
      margin-right: 5px;
      > .my-checkbox-group{
        display: flex;
        flex-direction: column;
        > .checkbox-wrapper{
          margin: 5px;
          > .my-user{
            border: 1px solid red;
            align-self: flex-end;
          }
        }
      }
    }
    > .right-wrapper {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-left: 5px;
      border: 1px solid $color-background;
      > .selected-title {
        margin: 5px;
        align-self: flex-start;
      }
      > .selected-tags {
        background-color: white;
        border: none;
      }
    }
  }

</style>