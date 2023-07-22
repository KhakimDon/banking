<script setup></script>

<script>
import HeaderReg from '../components/HeaderReg.vue';
import EmailReg from '../components/EmailReg.vue'
import NameReg from '../components/NameReg.vue'
import PasswordReg from '../components/PasswordReg.vue'
import PhoneReg from '../components/PhoneReg.vue'
export default {
  components: {
    HeaderReg,
    EmailReg,
    NameReg,
    PasswordReg,
    PhoneReg

  },
  data() {
    return {
      regIdx: 0,
    }
  },
}
</script>

<template>
  <HeaderReg />
  <EmailReg v-if="this.regIdx == 0"/>
  <NameReg v-if="this.regIdx == 1"/>
  <PasswordReg v-if="this.regIdx == 2" />
  <PhoneReg v-if="this.regIdx == 3" />


  <div class="w-[100%] flex items-center justify-center absolute bottom-[30px] ">
    <button @click="this.regIdx++, this.regIdx > 3 ? this.$router.push('/auth/pin') : false" class="py-[16px] w-[343px] bg-[#05BE71] rounded-[8px] text-[#FFF] px-[10px] text-[14px] font-[500]">Next</button>
  </div>

</template>

<style></style>