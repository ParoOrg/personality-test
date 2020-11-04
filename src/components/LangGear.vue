<template>
  <div class="flex">
    <img
      :src="'/flag_en.svg'"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>changeLang('en')"
      alt=""
      srcset=""
    />
    <img
      :src="'/flag_fr.svg'"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>changeLang('fr')"
      alt=""
      srcset=""
    />
    <img
      :src="'/flag_ar.svg'"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>changeLang('ar')"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
export default {
  data(){
    return {
      lang: '',
      enable: false,
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
