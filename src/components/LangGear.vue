<template>
  <div class="">
    <img
      src="/gear.svg"
      class="h-5 w-5 cursor-pointer"
      @click="() => (enable = !enable)"
      alt=""
      srcset=""
    />
    <select v-if="enable" v-model="$i18n.locale" class="bg-gray-100 absolute position-custom2 rounded-lg p-3 border-2 text-lg border-gray-600" @change="changeLang" name="" id="">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="ar">العربية</option>
    </select>
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
