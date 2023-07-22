<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="h-[650px] w-[100%]">
        <div class="h-[100%] w-[90%] m-auto flex flex-col pt-[15px]">
            <h2 class="text-[32px] font-[400] text-[#2D2D2D] leading-[48px] mb-[16px]">Welcome </h2>
            <p class="text-[12px] text-[#606060] font-[400] mb-[32px]">Enjoy all the features that make it easy for you to
                manage your finances</p>
            <input
                class="h-[71px] w-[333px] px-[10px] outline-none border-[1px] border-solid border-[#ECECEC] rounded-[8px] align-center"
                type="email" placeholder="Email / Username ">
            <input
                class="h-[71px] w-[333px] px-[10px] outline-none border-[1px] border-solid border-[#ECECEC] rounded-[8px] align-center my-[16px]"
                type="password" placeholder="Password">

            <div class="flex w-[100%] items-center justify-between text-[#2D2D2D] mb-[32px]">
                <div class="flex items-center"><input class="h-[20px] w-[20px]" type="checkbox">
                    <p class="ml-[8px] text-[12px] font-[400]">Remember me</p>
                </div>
                <span class="text-[12px] text-[400]">Forgot password ?</span>
            </div>

            <router-link to="/auth/pin">
                <button
                    class="py-[16px] w-[333px] bg-[#05BE71] rounded-[8px] text-[#FFF] px-[10px] text-[14px] font-[500]">Login</button>

            </router-link>

        </div>
    </div>
</template>


<style></style>