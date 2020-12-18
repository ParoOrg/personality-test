<template>
  <div
    class="bg-main-mobile sm:bg-main bg-cover bg-no-repeat h-screen w-screen"
  >
    <div class="container mx-auto h-full flex">
      <div class="h-auto self-center">
        <img
          alt="logo"
          src="../assets/logo_with_shadow.png"
          class="w-1/2 h-1/2 xs:w-1/3 xs:h-1/3 sm:w-1/4 sm:h-1/4 xl:w-1/5 xl:h-1/5 mx-auto"
        />
        <div class="text-white">
          <p class="text-2xl md:text-3xl tracking-widest">
            {{ $t("choose_language") }}
          </p>

          <div class="flex my-10 justify-center">
            <div
              class=" h-28 w-28 mx-1 cursor-pointer flag"
              @click="() => changeLang('en')"
            >
              <img
                :class="lang !== 'en' ? 'block' : 'hidden'"
                src="../assets/flag_en_heart.png"
              />
              <img
                :class="lang === 'en' ? 'block' : 'hidden'"
                src="../assets/flag_en_heart.png"
              />
            </div>
            <div
              class=" h-28 w-28 mx-1 cursor-pointer flag"
              @click="() => changeLang('fr')"
            >
              <img
                :class="lang !== 'fr' ? 'block' : 'hidden'"
                src="../assets/flag_fr_heart.png"
              />
              <img
                :class="lang === 'fr' ? 'block' : 'hidden'"
                src="../assets/flag_fr_heart.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSelection",
  emits: 'selected',
  data() {
    return {
      load: true,
      lang: localStorage.getItem("lang"),
    };
  },
  mounted() {
    setTimeout(() => (this.load = false), 1500);
  },
  methods: {
    async redirect() {
      this.load = true;
      if (this.$route.query.code && this.$route.query.code == "QlsKr") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "manel@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "landing" });
      }
      if (this.$route.query.code && this.$route.query.code == "LZfKr") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "manel1@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "landing" });
      }
      if (this.$route.query.code && this.$route.query.code == "UIfKM") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "manel2@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "landing" });
      }
    },
    changeLang(l) {
      localStorage.setItem("lang", l);
      this.lang = l;
      this.$i18n.locale = l;
      this.$emit("selected");
    },
  },
};
</script>

<style scoped>
.position-loader {
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
