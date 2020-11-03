<template>
  <div class="flex">
    <img
      :src="'/flag_en.svg'"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>$i18n.locale = 'en'"
      alt=""
      srcset=""
    />
    <img
      :src="'/flag_fr.svg'"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>$i18n.locale = 'fr'"
      alt=""
      srcset=""
    />
    <img
      :src="'/flag_ar.svg'"
      class="w-auto h-4 mx-1 cursor-pointer"
      @click="()=>$i18n.locale = 'ar'"
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
    changeLang(e){
      this.enable = false
      console.log(this.$i18n.availableLocales)
      const lang = e.target.value
      this.$i18n.locale = lang
    }
  }
};
</script>

<style>
.position-custom2{
  right:100%;
}
</style>
