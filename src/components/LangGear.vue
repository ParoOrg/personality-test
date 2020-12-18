<template>
  <div class="flex">
    <!-- <img
      src="/flag_en.svg"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="() => changeLang('en')"
      alt=""
      srcset=""
    />
    <img
      src="/flag_fr.svg"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="() => changeLang('ar')"
      alt=""
      srcset=""
    /> -->
  </div>
</template>

<script>
import arFlag from "@/assets/flag_ar.svg";
import frFlag from "@/assets/flag_fr.svg";
import enFlag from "@/assets/flag_en.svg";

export default {
  components: {
  },
  data() {
    return {
      lang: "",
      enable: false,
      frFlag,
      enFlag,
      arFlag
    };
  },
  methods: {
    changeLang(l) {
      localStorage.setItem("lang", l);
      this.$i18n.locale = l;
    },
  },
};
</script>

<style>
.position-custom2 {
  right: 100%;
}
</style>
