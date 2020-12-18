<template>
  <transition name="fade">
    <div v-if="showCondition" class="fixed inset-0 z-50">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div
        class="absolute h-2/3 w-5/6 custom-position rounded-3xl bg-gradient text-sans text-white"
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
        <div class="text-xl font-medium">
          <slot name="popup-title"></slot>
        </div>
        <div class="text-gray-300 font-thin text-sm overflow-y-auto h-3/5 py-4 px-2">
          <div class="text-justify overflow-y-auto max-h-full p-2">
            {{ report }}
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 text-xs border-top py-4">
          <span class="flex justify-center space-x-1">
            <span>Made with</span>
            <img src="/love.svg" class="h-4 w-4" />
            <span>By lovester team</span>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "report-popup",
  props: {
    report: {
      type: String,
    },
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
</style>
