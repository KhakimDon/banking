<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import store from '../store/index';
</script>

<script>
export default {
  beforeCreate() {
    import.meta.env.VITE_LOGIN == 'false' ? this.$router.push("/auth") : false
  }

}
</script>

<template>
  <h1>HOME</h1>
</template>


<style></style>