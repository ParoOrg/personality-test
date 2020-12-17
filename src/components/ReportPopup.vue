<template>
  <div v-if="showCondition" class="fixed inset-0 z-50">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-white opacity-75"></div>
    </div>
    <div
      class="transform transition-all absolute lg-height h-screen lg:w-5/6 w-screen custom-position lg:rounded-3xl bg-gradient text-sans text-white"
    >
      <div
        class="absolute top-2 left-2 w-15 h-15 block lg:hidden"
        @click="closePopup()"
      >
        <img
          src="../assets/back_arrow.svg"
          class="transform -rotate-90 scale-125 opacity-75"
        />
      </div>
      <div
        class="absolute -top-2 -right-2 rounded-full bg-close w-7 h-7 hidden lg:block"
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
        class="logo relative mx-auto top-2 lg:-top-9 bg-white rounded-full w-20 h-20"
      >
        <img
          class="object-scale-down h-full w-full transform scale-75"
          src="../assets/new_logo.png"
        />
      </div>
      <div class="text-xl font-medium mt-14 lg:mt-0">
        Enjoy your personality test
      </div>
      <div class="mt-4 lg:mt-2 h-2/3 lg:h-3/5 px-2">
        <div class="text-justify overflow-y-auto max-h-full p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sit
          qui, inventore sint minus nemo voluptate alias soluta earum molestiae
          nihil excepturi labore maxime odio veniam. Soluta labore possimus cum!
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 text-xs border-top py-4">
        Made with ❤️ By lovester team
      </div>
    </div>
  </div>
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
@media (min-width: 1024px) {
  .custom-position {
    top: 25% !important;
    left: 8.33% !important;
  }

  .lg-height {
    height: 50% !important;
  }
}

.custom-position {
  top: 0;
  left: 0;
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
</style>
