<template>
  <div class="children" @click="say">
    我是子组件
    <div>
      父组件对我说：{{msg}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "child",
    props: {
      msg: {
        type: String,
        default: () => {
          return ''
        }
      }
    },
    data() {
      return {
        childrenSay: 'hello, parent'
      }
    },
    methods: {
      handleParentClick(e) {
        console.info(e)
      },
      say() {
        this.$emit('say', this.childrenSay);
      }
    }
  }
</script>

<style scoped>

</style>
