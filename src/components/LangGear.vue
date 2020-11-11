<template>
  <div class="flex">
    <img
      :src="enFlag"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>changeLang('en')"
      alt=""
      srcset=""
    />
    <img
      :src="frFlag"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>changeLang('fr')"
      alt=""
      srcset=""
    />
    <img
      :src="arFlag"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>changeLang('ar')"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
import arFlag from "@/assets/flag_ar.svg";
import frFlag from "@/assets/flag_fr.svg";
import enFlag from "@/assets/flag_en.svg";

export default {
  data(){
    return {
      lang: '',
      enable: false,
      arFlag,
      enFlag,
      frFlag,
    }
  },
  methods: {
    changeLang(l){
      localStorage.setItem('lang', l)
      this.$i18n.locale = l
    }
  }
};
</script>

<style>
.position-custom2{
  right:100%;
}
</style>
