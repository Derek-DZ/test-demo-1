<template>
  <div id="app">
    <MyInput></MyInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';
import MyInput from '@/components/MyInput.vue';

@Component({
  components: {
    MyInput,
  },
})
export default class App extends Vue {
  store = store;
}
</script>

<style lang="scss">
  @import "assets/style/reset.scss";
  #app{
    margin: 20px;
  }
</style>
