<script setup>
</script>

<script>
export default {
  
}
</script>

<template>
    <div class="h-[750px] w-[100%]">
        <div class="h-[100%] w-[100%] flex items-center flex-col pt-[88px]">

            <div class="h-[172px] w-[80%] flex flex-col items-center">
                <img src="../assets/icon/lock.svg" alt="">
                <p class="mt-[32px] text-[#2D2D2D] mb-[16px]">Enter Security Code</p>
                <div class="flex">
                    <div class="h-[40px] w-[40px] border-[1px] border-solid border-[#ECECEC] rounded-[8px] mx-[10px]"></div>
                    <div class="h-[40px] w-[40px] border-[1px] border-solid border-[#ECECEC] rounded-[8px] mx-[10px]"></div>
                    <div class="h-[40px] w-[40px] border-[1px] border-solid border-[#ECECEC] rounded-[8px] mx-[10px]"></div>
                    <div class="h-[40px] w-[40px] border-[1px] border-solid border-[#ECECEC] rounded-[8px] mx-[10px]"></div>
                </div>

            </div>

            <div class="mt-[100px] h-[264px] w-[100%] flex flex-col text-[#2D2D2D]">

                <div class="h-[66px] w-[100%] flex items-center justify-center">
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">1</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">2</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">3</button>
                </div>
                <div class="h-[66px] w-[100%] flex items-center justify-center">
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">4</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">5</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">6</button>
                </div>
                <div class="h-[66px] w-[100%] flex items-center justify-center">
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">7</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">8</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px]">9</button>
                </div>
                <div class="h-[66px] w-[100%] flex items-center justify-center">
                    <button class="text-[28px] font-[500] h-[34px] w-[114px] flex items-center justify-center">

                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="akar-icons:backspace">
                                <g id="Group">
                                    <path id="Vector" d="M23.5 20L15.5 12M23.5 12L15.5 20" stroke="#2D2D2D" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path id="Vector_2"
                                        d="M10.7 6.40001C10.9484 6.06882 11.2704 5.80001 11.6407 5.61487C12.011 5.42973 12.4193 5.33334 12.8333 5.33334H27.5C28.2072 5.33334 28.8855 5.61429 29.3856 6.11439C29.8857 6.61449 30.1666 7.29277 30.1666 8.00001V24C30.1666 24.7073 29.8857 25.3855 29.3856 25.8856C28.8855 26.3857 28.2072 26.6667 27.5 26.6667H12.8333C12.4193 26.6667 12.011 26.5703 11.6407 26.3852C11.2704 26.2 10.9484 25.9312 10.7 25.6L4.69996 17.6C4.35377 17.1384 4.16663 16.577 4.16663 16C4.16663 15.423 4.35377 14.8616 4.69996 14.4L10.7 6.40001Z"
                                        stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                        </svg>


                    </button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px] ">0</button>
                    <button class="text-[28px] font-[500] h-[34px] w-[114px] flex items-center justify-center">

                        <svg class="feather feather-check" fill="none" height="35"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" width="35">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>