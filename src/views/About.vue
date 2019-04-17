<template>
  <div>这是about页面,所传参数为{{params.id}}</div>
</template>

<script>
  export default {
    name: 'About',
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
