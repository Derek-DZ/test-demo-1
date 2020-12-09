<template>
  <div id="app">
    <MyInput></MyInput>
    <Buttons></Buttons>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Buttons from '@/components/Buttons.vue';
import MyInput from '@/components/MyInput.vue'

@Component({
  components: {
    Buttons,
    MyInput
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
  @import "assets/style/reset.scss";
  #app{
    margin: 20px;
  }
</style>
