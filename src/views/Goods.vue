<template>
  <div>这是Goods页面,所传参数为{{params.id}}</div>
</template>

<script>
  export default {
    name: 'Goods',
    data() {
      return {
        params: this.$route.params
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
