<template>
  <transition name="fade" class="w-full mt-20">
    <div v-if="showCondition" class="fixed inset-0 z-50 flex px-4 md:px-64 lg:px-96 h-4/6 sm:h-3/6">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div
        class="relative h-4/5 w-5/6 pb- custom-position rounded-3xl bg-gradient text-sans text-white"
        
      >
        <div
          class="absolute -top-2 -right-2 rounded-full bg-close w-7 h-7"
          @click="closePopup()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            width="18"
            height="18"
            overflow="visible"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="10" y1="10" x2="18" y2="18" />
            <line x1="18" y1="10" x2="10" y2="18" />
          </svg>
        </div>
        <div
          class="logo relative mx-auto -top-9 bg-white rounded-full w-20 h-20"
        >
          <slot name="popup-icon"></slot>
        </div>
        <!-- <div v-if="isLoading" class="spinner h-auto w-1/2">
          <span class="text-xl block">{{ $t("reportLoading") }}</span>
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div> -->
        <div class="flex flex-col h-main" >
          <div class="text-xl font-medium">
            <slot name="popup-title"></slot>
          </div>
          <div
            class="text-gray-300 flex-grow overflow-y-auto font-thin text-sm py-4 px-2 "
          >
            <div
              class=" text-center overflow-y-auto max-h-full p-2 text-base md:text-xl px-2  md:px-8 lg:px-16 xl:px-24"
            >
             Vous venez de terminer votre test  Vous recevrez sous peu votre rapport par mail. Passez une bonne journée

            </div>
          </div>
          <div class="text-xs border-top custom-flex">
            <span class="flex justify-center mt-4 items-center space-x-1">
              <span>Made with</span>
              <img src="/love.svg" class="h-4 w-4" />
              <span>By lovester team</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "report-popup-fr",
  props: {
   
    showCondition: {
      type: Boolean,
      required: true,
    },
   
  },
  emits: ["close-popup"],
  methods: {
    closePopup() {
      this.$emit("close-popup");
    },
  },
};
</script>
<style scoped>
.custom-position {
  top: 16.5% !important;
  left: 8.33% !important;
}

.custom-flex {
  justify-self: flex-end;
}

.logo {
  border: 2px solid #cb3579;
}

.bg-gradient {
  background-image: linear-gradient(to top right, #8e1249, #f54f9a);
}

.border-top {
  border-top: 2px solid #c65588;
}

.bg-close {
  background-color: #8d1147;
}

.h-custom-main {
  height: 80vh !important;
}

.h-custom-sub {
  height: calc(93% - 9rem - 5.5vw) !important;
}

.h-main {
  height: calc(100% - 6rem);
}

::-webkit-scrollbar {
  width: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cb588b;
  border-radius: 9999px;
  max-height: 100px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.spinner {
  position: relative;
  margin: auto auto auto auto;
  bottom: 40px;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 20px;
  height: 20px;
  background-color: #ffffff;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
