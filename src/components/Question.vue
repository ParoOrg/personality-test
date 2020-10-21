<template>
  <div>
    <span>{{ `${question} (${index+1}/40)`}}</span>
    <div class="lg:flex">
      <button
      @click="()=>callback(1, index)"
        class="w-1/6 transition p-3 border-custom-1 border-2 rounded-lg text-black w-full lg:inline my-4"
      >
        Highly disagree
      </button>
      <button
      @click="()=>callback(2, index)"
        class="w-1/6 transition p-3 border-custom-2 border-2 rounded-lg text-black w-full lg:inline my-4"
      >
        Moderately disagree
      </button>
      <button
      @click="()=>callback(3, index)"
        class="w-1/6 transition p-3 border-custom-3 border-2 rounded-lg text-black w-full lg:inline my-4"
      >
        Slightly disagree
      </button>
      <button
      @click="()=>callback(4, index)"
        class="w-1/6 transition p-3 border-custom-4 border-2 rounded-lg text-black w-full lg:inline my-4"
      >
        Slightly agree
      </button>
      <button
      @click="()=>callback(5, index)"
        class="w-1/6 transition p-3 border-custom-5 border-2 rounded-lg text-black w-full lg:inline my-4"
      >
        Moderately agree
      </button>
      <button
      @click="()=>callback(6, index)"
        class="w-1/6 transition p-3 border-custom-6 border-2 rounded-lg text-black w-full lg:inline my-4"
      >
        Highly agree
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
    callback: () => {},
    index: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      checkValue: -1,
    };
  },
  methods: {
    test() {
      console.log(this.checkValue);
    },
  },
};
</script>

<style scoped>
.border-custom-6:hover {
  border-color: #2ffe66;
  color: #2ffe66;
}

.border-custom-5:hover {
  border-color: #55d85c;
  color: #55d85c;
}

.border-custom-4:hover {
  border-color: #7cae4f;
  color: #7cae4f;
}

.border-custom-3:hover {
  border-color: #a98142;
  color: #a98142;
}

.border-custom-2:hover {
  border-color: #df4b33;
  color: #df4b33;
}

.border-custom-1:hover {
  border-color: #ff2a29;
  color: #ff2a29;
}

.transition {
  transition: 0.5s;
}

.transition:focus{
  outline: none
}
</style>
