<template>
    <nav-bar slot="center"></nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  props:{
    title:String
  },
  components:{
    NavBar
  }

}
</script>

<style>

</style>