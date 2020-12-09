<template>
  <div id="app">
    <el-input
      @input="onChange"
      type="text"
      placeholder="请输入内容"
      v-model="input">
    </el-input>
    <Buttons></Buttons>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Buttons from '@/components/Buttons.vue';


@Component({
  components: {
    Buttons
  },
})
export default class App extends Vue {
  input?: string
  onChange(){
    this.$forceUpdate()
  }
}
</script>

<style lang="scss">
  @import "assets/style/reset.scss";
  #app{
    margin: 20px;
  }
</style>
