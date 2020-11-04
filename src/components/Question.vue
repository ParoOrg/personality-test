<template>
  <div>
    <span class="font-bold">{{ `${question} (${index + 1}/40)` }}</span>
    <div class="lg:flex">
      <button
        @click="
          () => {
            callback(1, index);
            selection = 1;
          }
        "
        class="w-1/6 transition p-3 border-custom-1 border-2 rounded-lg text-black w-full lg:inline my-4"
        :class="selection == 1 ? 'selection-custom-6': ''"
      >
        {{$t('hDisagree')}}
      </button>
      <button
        @click="
          () => {
            callback(2, index);
            selection = 2;
          }
        "
        class="w-1/6 transition p-3 border-custom-2 border-2 rounded-lg text-black w-full lg:inline my-4"
        :class="selection == 2 ? 'selection-custom-6': ''"
      >
        {{$t('mDisagree')}}
      </button>
      <button
        @click="
          () => {
            callback(3, index);
            selection = 3;
          }
        "
        class="w-1/6 transition p-3 border-custom-3 border-2 rounded-lg text-black w-full lg:inline my-4"
        :class="selection == 3 ? 'selection-custom-6': ''"
      >
        {{$t('sDisagree')}}
      </button>
      <button
        @click="
          () => {
            callback(4, index);
            selection = 4;
          }
        "
        class="w-1/6 transition p-3 border-custom-4 border-2 rounded-lg text-black w-full lg:inline my-4"
        :class="selection == 4 ? 'selection-custom-6': ''"
      >
        {{$t('sAgree')}}
      </button>
      <button
        @click="
          () => {
            callback(5, index);
            selection = 5;
          }
        "
        class="w-1/6 transition p-3 border-custom-5 border-2 rounded-lg text-black w-full lg:inline my-4"
        :class="selection == 5 ? 'selection-custom-6': ''"
      >
        {{$t('mAgree')}}
      </button>
      <button
        @click="
          () => {
            callback(6, index);
            selection = 6;
          }
        "
        class="w-1/6 transition p-3 border-custom-6 border-2 rounded-lg text-black w-full lg:inline my-4"
        :class="selection == 6 ? 'selection-custom-6': ''"
      >
        {{$t('hAgree')}}
      </button>
    </div>

    <!-- <button
      type="submit"
      @click="
        () => {
          callback(checkValue);
          test();
        }
      "
      class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
    >
      {{ index == 39 ? "Submit" : "Next" }}
    </button> -->
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
      // selection: this.answer || 0,
    };
  },
  computed: {
    selection() {
      return this.answer;
    },
  },
  methods: {
    test() {
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
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
