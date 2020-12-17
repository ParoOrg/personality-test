<template>
  <div class="mb-10 flex flex-col">
    <div
      class="border border-primary text-primary rounded-full hidden sm:block self-start mb-3 w-48 py-2"
    >
      {{ $t("question_number", index + 1) }}
    </div>
    <div
      class="mb-3 text-primary font-museoSansRounded-100 text-2xl text-center"
    >
      {{ question }}
    </div>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4 border-b-2 pb-10">
      <div class="h-full w-full">
        <button
          @click="
            () => {
              callback(1, index);
              selection = 1;
            }
          "
          class="group bg-white rounded-full shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="
            selection == 1
              ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
              : ''
          "
        >
          <div class="h-1/2 flex sm:pt-5 md:pt-0 lg:pt-5">
            <strongly-disagree-icon
              class="flex-1 self-center w-auto max-h-16 max-w-16 2xs:max-h-20 2xs:max-w-20 h-auto mx-auto icon1 fill-current"
            />
          </div>
          <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
            <p
              class="flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto"
            >
              {{ $t("hDisagree") }}
            </p>
          </div>
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
          class="group bg-white rounded-full shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="
            selection == 2
              ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
              : ''
          "
        >
          <div class="h-1/2 flex sm:pt-5 md:pt-0 lg:pt-5">
            <disagree-icon
              class="flex-1 self-center w-auto max-h-16 max-w-16 2xs:max-h-20 2xs:max-w-20 h-auto mx-auto icon1 fill-current"
            />
          </div>
          <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
            <p class="flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto">
              {{ $t("mDisagree") }}
            </p>
          </div>
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
          class="group bg-white rounded-full shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="
            selection == 3
              ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
              : ''
          "
        >
        <div class="h-1/2 flex sm:pt-5 md:pt-0 lg:pt-5">
          <somewhat-disagree-icon
            class="flex-1 self-center w-auto max-h-16 max-w-16 2xs:max-h-20 2xs:max-w-20 h-auto mx-auto icon1 fill-current"
          />
        </div>
          <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
          <p class="flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto">
            {{ $t("sDisagree") }}
          </p>
          </div>
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
          class="group bg-white rounded-full shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="
            selection == 4
              ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
              : ''
          "
        >
        <div class="h-1/2 flex sm:pt-5 md:pt-0 lg:pt-5">
          <somewhat-agree-icon
            class="flex-1 self-center w-auto max-h-16 max-w-16 2xs:max-h-20 2xs:max-w-20 h-auto mx-auto icon1 fill-current"
          />
        </div>
          <div class="h-1/2 flex sm:pb-5 md:pb-0 lg:pb-5">
          <p class="flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto">
            {{ $t("sAgree") }}
          </p>
          </div>
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
          class="group bg-white rounded-full shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="
            selection == 5
              ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
              : ''
          "
        >
        <div class="h-1/2 flex sm:pt-5 md:pt-0 lg:pt-5">
          <agree-icon
            class="flex-1 self-center w-auto max-h-16 max-w-16 2xs:max-h-20 2xs:max-w-20 h-auto mx-auto icon1 fill-current"
          />
        </div>
        <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
          <p class="flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto">
            {{ $t("mAgree") }}
          </p>
        </div>
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
          class="group bg-white rounded-full shadow-2xl border-black w-24 h-24 2xs:w-28 2xs:h-28 sm:w-44 sm:h-44 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-r hover:from-primary-dark hover:to-primary-light text-primary hover:text-white outline-none"
          :class="
            selection == 6
              ? 'bg-gradient-to-r from-primary-dark to-primary-light text-white'
              : ''
          "
        >
        <div class="h-1/2 flex sm:pt-5 md:pt-0 lg:pt-5">
          <strongly-agree-icon
            class="flex-1 self-center w-auto max-h-16 max-w-16 2xs:max-h-20 2xs:max-w-20 h-auto mx-auto icon1 fill-current"
          />
        </div>
        <div class="h-1/2 flex px-2 sm:pb-5 md:pb-0 lg:pb-5">
          <p class="flex-1 self-center text-xs sm:text-base md:text-xs lg:text-sm p-2 h-auto">
            {{ $t("hAgree") }}
          </p>
        </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import StronglyDisagreeIcon from "@/assets/test-icons/strongly-disagree.svg";
import DisagreeIcon from "@/assets/test-icons/disagree.svg";
import SomewhatDisagreeIcon from "@/assets/test-icons/somewhat-disagree.svg";
import SomewhatAgreeIcon from "@/assets/test-icons/somewhat-agree.svg";
import AgreeIcon from "@/assets/test-icons/agree.svg";
import StronglyAgreeIcon from "@/assets/test-icons/strongly-agree.svg";
export default {
  components: {
    StronglyDisagreeIcon,
    DisagreeIcon,
    SomewhatDisagreeIcon,
    SomewhatAgreeIcon,
    AgreeIcon,
    StronglyAgreeIcon,
  },
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
    selection() {
      return this.answer;
    },
  },
  methods: {
    test() {},
  },
  mounted() {},
};
</script>

<style scoped>
.transition {
  transition: 0.5s;
}

.transition:focus {
  outline: none;
}
</style>
