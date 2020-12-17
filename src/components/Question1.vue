<template>
  <div class="mb-10 flex flex-col">
    <div
      class="border border-primary text-primary rounded-full float-left mb-3 w-48 py-2"
    >
      Question Number {{ index + 1 }}
    </div>
    <div class="mb-3 text-primary font-museoSansRounded-100 text-2xl text-center">{{ question }}</div>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
      <div class="h-full w-full">
        <button
          @click="
            () => {
              callback(1, index);
              selection = 1;
            }
          "
          class="bg-white rounded-full shadow-2xl border-black w-28 h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="selection == 1 ? 'selected bg-gradient-to-r from-primary-dark to-primary-light text-white' : ''"
        >
          <img class="w-10 h-10 mx-auto icon1" src="../assets/agree_color.png" />
          <img class="w-10 h-10 mx-auto icon2" src="../assets/agree.png" />
          <p class="text-xs p-2">{{ $t("hDisagree") }}</p>
        </button>
      </div>
      <div>
        <button
          @click="
            () => {
              callback(2, index);
              selection = 2;
            }
          "
          class="bg-white rounded-full shadow-2xl border-black w-28 h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="selection == 2 ? 'selected bg-gradient-to-r from-primary-dark to-primary-light text-white' : ''"
        >
          <img class="w-10 h-10 mx-auto icon1" src="../assets/agree_color.png" />
          <img class="w-10 h-10 mx-auto icon2" src="../assets/agree.png" />
          <p class="text-xs p-2">{{ $t("mDisagree") }}</p>
        </button>
      </div>
      <div>
        <button
          @click="
            () => {
              callback(3, index);
              selection = 3;
            }
          "
          class="bg-white rounded-full shadow-2xl border-black w-28 h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="selection == 3 ? 'selected bg-gradient-to-r from-primary-dark to-primary-light text-white' : ''"
        >
          <img class="w-10 h-10 mx-auto icon1" src="../assets/agree_color.png" />
          <img class="w-10 h-10 mx-auto icon2" src="../assets/agree.png" />
          <p class="text-xs p-2">{{ $t("sDisagree") }}</p>
        </button>
      </div>
      <div>
        <button
          @click="
            () => {
              callback(4, index);
              selection = 4;
            }
          "
          class="bg-white rounded-full shadow-2xl border-black w-28 h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="selection == 4 ? 'selected bg-gradient-to-r from-primary-dark to-primary-light text-white' : ''"
        >
          <img class="w-10 h-10 mx-auto icon1" src="../assets/agree_color.png" />
          <img class="w-10 h-10 mx-auto icon2" src="../assets/agree.png" />
          <p class="text-xs p-2">{{ $t("sAgree") }}</p>
        </button>
      </div>
      <div>
        <button
          @click="
            () => {
              callback(5, index);
              selection = 5;
            }
          "
          class="bg-white rounded-full shadow-2xl border-black w-28 h-28  sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="selection == 5 ? 'selected bg-gradient-to-r from-primary-dark to-primary-light text-white' : ''"
        >
          <img class="w-10 h-10 mx-auto icon1" src="../assets/agree_color.png" />
          <img class="w-10 h-10 mx-auto icon2" src="../assets/agree.png" />
          <p class="text-xs p-2">{{ $t("mAgree") }}</p>
        </button>
      </div>
      <div>
        <button
          @click="
            () => {
              callback(6, index);
              selection = 6;
            }
          "
          class="bg-white rounded-full shadow-2xl border-black w-28 h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="selection == 6 ? 'selected bg-gradient-to-r from-primary-dark to-primary-light text-white' : ''"
        >
          <img class="w-10 h-10 mx-auto icon1" src="../assets/agree_color.png" />
          <img class="w-10 h-10 mx-auto icon2" src="../assets/agree.png" />
          <p class="text-xs p-2">{{ $t("hAgree") }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      default: "",
    },
    callback: { type: Function },
    index: {
      type: Number,
      default: 0,
    },
    answer: {
      type: Number,
    },
  },
  data() {
    return {
      checkValue: -1,
      //selection: this.answer || 0,
    };
  },
  computed: {
    selection(){
      return this.answer
    }
  },
  methods: {
    test() {},
  },
  mounted() {},
};
</script>

<style scoped>
.icon2{
  display: none;
}
button:hover .icon1{
    display: none;
}
button.selected .icon1{
    display: none;
}
button:hover .icon2{
    display: block;
}
button.selected .icon2{
    display: block;
}
.border-custom-6:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-6 {
  border-color: #2ffe66;
  color: #2ffe66;
}

.border-custom-5:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-5 {
  border-color: #55d85c;
  color: #55d85c;
}

.border-custom-4:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-4 {
  border-color: #7cae4f;
  color: #7cae4f;
}

.border-custom-3:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-3 {
  border-color: #a98142;
  color: #a98142;
}

.border-custom-2:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-2 {
  border-color: #df4b33;
  color: #df4b33;
}

.border-custom-1:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}
.selection-custom-1 {
  border-color: #ff2a29;
  color: #ff2a29;
}

.transition {
  transition: 0.5s;
}

.transition:focus {
  outline: none;
}
</style>
