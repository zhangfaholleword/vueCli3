<template>
  <div>
    这是Goods页面,所传参数为{{params.id}},total:{{goodsTotal}}
    <div id="mount-point"></div>
    <button @click="clickParent">点击</button>
    <child ref="child" :msg="msg" @say="parentSay"></child>
  </div>
</template>

<script>
  import GOODS_MODULE, {MODULE_NAME} from "../store/module/goods.module";
  import Goods from './components/Child';
  import Vue from 'vue';

  export default {
    name: 'Goods',
    components: {
      child: Goods
    },
    data() {
      return {
        params: this.$route.params,
        goodsList: this.$store.getters[`${MODULE_NAME}/getGoodsList`],
        goodsTotal: this.$store.getters[`${MODULE_NAME}/getGoodsTotal`],
        msg: 'hello children!'
      }
    },
    beforeCreate() {
      this.$store.registerModule(MODULE_NAME, GOODS_MODULE)
      return this.$store.dispatch(`${MODULE_NAME}/increment`)
    },
    created() {
    },
    mounted() {
      // 创建构造器
      let Profile = Vue.extend({
        template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
        data: function () {
          return {
            firstName: 'Walter',
            lastName: 'White',
            alias: 'Heisenberg'
          }
        }
      })
      new Profile().$mount('#mount-point')
    },
    methods: {
      //父组件调用子组件方法
      clickParent() {
        this.$refs.child.handleParentClick("ssss");
      },

      //父子组件相互通信
      parentSay(msg) {
        this.msg = msg;
      }
    }
  }
</script>

<style scoped>

</style>
