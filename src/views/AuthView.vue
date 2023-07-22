<script>
import HeaderAuth from '../components/HeaderAuth.vue';
import MoneyAuth from '../components/MoneyAuth.vue';
import TranAccAuth from '../components/TranAccAuth.vue';
import NededAuth from '../components/NededAuth.vue';
export default {
  components: {
    HeaderAuth,
    MoneyAuth,
    TranAccAuth,
    NededAuth
  },
  data() {
    return {
      idx: 0,
    };
  },
};
</script>

<template>
  <HeaderAuth />
  <MoneyAuth v-if="this.idx == 0"/>
  <TranAccAuth v-if="this.idx == 1"/>
  <NededAuth v-if="this.idx == 2"/>
  <!-- <h1>AUTH</h1> -->

  <div class="w-[100%] flex items-center justify-center absolute bottom-[30px] ">
    <button
      class="py-[16px] w-[343px] bg-[#05BE71] rounded-[8px] text-[#FFF] px-[10px] text-[14px] font-[500]"
      @click="this.idx++, this.idx > 2 ? this.$router.push('/auth/login') : false">Get Started</button>
  </div>
</template>

<style></style>