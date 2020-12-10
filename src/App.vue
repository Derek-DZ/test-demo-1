<template>
  <div id="app">
    <MyCheckbox></MyCheckbox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyCheckbox from '@/components/MyCheckbox.vue';

@Component({
  components: {
    MyCheckbox,
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
