<template>
  <div>
    <h1>HELLO WORLD - VUE VIEW IN LARAVEL</h1>
  </div>
</template>

<script>

export default {
  methods: {

  },
  mounted(){

    console.log(document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
  }
}
</script>

<style lang="scss" scoped>

</style>
