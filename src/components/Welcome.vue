<template>
  <div
    :class="load ? 'hidden' : 'block'"
    class="bg-main-mobile sm:bg-main bg-cover bg-no-repeat h-screen w-screen"
  >
    <language-selection
      @selected="()=>languageSelected = true"
      v-if="!languageSelected"
    ></language-selection>
    <div v-else class="container flex-custom">
      <div class="h-auto self-center">
        <img
          alt="logo"
          src="../assets/logo_with_shadow.png"
          class="w-1/2 h-1/2 xs:w-1/3 xs:h-1/3 sm:w-1/4 sm:h-1/4 xl:w-1/5 xl:h-1/5 mx-auto"
        />
        <div class="text-white">
          <p class="text-2xl md:text-3xl tracking-widest">
            {{ $t("welcome_page.welcome_to") }}
          </p>
          <p class="text-5xl font-bold md:text-6xl tracking-wider">
            LOVESTER
          </p>
          <p
            class="text-md font-museoSansRounded-100 md:text-lg tracking-widest text-gray-100 mt-3"
          >
            {{ $t("welcome_page.this_is_made_exclusively_to") }}
          </p>
          <p
            class="text-3xl font-bold uppercase text-gradient bg-gradient-to-r from-pink-600 to-white"
          >
            Manel Amara
          </p>

          <button
            class="uppercase rounded-full border border-white text-white px-10 py-1 mt-5 bg-gradient-to-r hover:from-pink-800 hover:to-pink-400 outline-none"
          >
            <p @click="redirect">{{ $t("next") }}</p>
          </button>
        </div>
      </div>
      <!--
      <div
        class="fixed bottom-0 text-center w-4/5 h-14 -mt-16 border-t mx-auto py-3 border-gray-300 left-1/2 transform -translate-x-1/2"
      >
        <router-link
          class="text-sm font-museoSansRounded-300 underline text-gray-300"
          to=""
          >{{$t("welcome_page.read_the_terms_of_use")}}</router-link
        >
      </div>-->
    </div>
  </div>
  <img src="/loading.gif" v-if="load" class="absolute position-loader" />
</template>

<script>
import LanguageSelection from "./LanguageSelection";

export default {
  name: "Welcome",
  components: {
    LanguageSelection,
  },
  data() {
    return {
      load: true,
      languageSelected: false,
      imagesToPreload: [
        "https://manel.lovester.net/background_web.png",
        "https://manel.lovester.net/background_mobile.png",
      ],
    };
  },
  created() {
    let imageLoaded = 0;
    for (const imageSrc of this.imagesToPreload) {
      const img = new Image();
      img.src = imageSrc;

      img.onload = () => {
        imageLoaded++;
        if (imageLoaded === this.imagesToPreload.length) {
          setTimeout(() => (this.load = false), 2000);
        }
      };
    }
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
        this.$router.push({ name: "home" });
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
        this.$router.push({ name: "home" });
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
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped>
.position-loader {
  top: 50%;
  left: 50%;
  background-size: 500% 500%;
  background-color: white;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

.flex-custom {
  display: flex;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
}
</style>
