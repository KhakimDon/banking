<script setup></script>
<script>
import HeaderAuth from '../components/HeaderAuth.vue';
import LoginWel from '../components/LoginWel.vue';
export default {
  components: {
    HeaderAuth,
    LoginWel,

  },
}
</script>

<template>
  <HeaderAuth />
  <LoginWel />

  <div class="w-[100%] absolute bottom-[30px] flex items-center justify-center">
    <router-link to="/auth/register"><span class="text-[#2D2D2D] text-[14px] flex text-[400] ">Don't
        have an account? <h4 class="text-[#05BE71]"> Register</h4></span></router-link>

  </div>
</template>



<style></style>