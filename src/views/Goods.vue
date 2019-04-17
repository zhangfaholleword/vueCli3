<template>
  <div>这是Goods页面,所传参数为{{params.id}},total:{{goodsTotal}}</div>
</template>

<script>
  import GOODS_MODULE, {MODULE_NAME} from "../store/module/goods.module";

  export default {
    name: 'Goods',
    data() {
      return {
        params: this.$route.params,
        // goodsList: this.$store.getters[`${MODULE_NAME}/getGoodsList`],
        goodsTotal: this.$store.getters[`${MODULE_NAME}/getGoodsTotal`]
      }
    },
    beforeCreate() {
      this.$store.registerModule(MODULE_NAME, GOODS_MODULE)
      return this.$store.dispatch(`${MODULE_NAME}/increment`)
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
