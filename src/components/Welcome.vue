<template>
  <div
    :class="load || dataLoad ? 'hidden' : 'block'"
    class="bg-main-mobile sm:bg-main bg-cover bg-no-repeat h-screen w-screen"
  >
    <language-selection
      @selected="() => (languageSelected = true)"
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
            class="text-3xl font-bold text-gradient bg-gradient-to-r from-pink-600 to-white"
          >
            {{ $t("vip") }}
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
  <div v-if="load" class="absolute position-loader-empty">
    <div v-if="extraLoad" class="spinner h-1/4 absolute position-loader w-1/2">
      <div class="bounce1 bg-primary"></div>
      <div class="bounce2 bg-primary"></div>
      <div class="bounce3 bg-primary"></div>
    </div>
  </div>
  <div v-if="dataLoad" class="spinner h-1/4 absolute position-loader w-1/2">
    <div class="bounce1 bg-primary"></div>
    <div class="bounce2 bg-primary"></div>
    <div class="bounce3 bg-primary"></div>
  </div>
  <!-- <img src="/loading.gif" v-if="dataLoad" class="absolute z-10 position-loader" /> -->
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
      extraLoad: false,
      dataLoad: false,
      languageSelected: false,
      imagesToPreload: [
       "https://lovester.net/background_web.png",
        "https://lovester.net/background_mobile.png",
   
      ],
    };
  },
  created() {
    setTimeout(() => (this.extraLoad = true), 3000);
    let imageLoaded = 0;
    for (const imageSrc of this.imagesToPreload) {
      const img = new Image();
      img.src = imageSrc;

      img.onload = () => {
        imageLoaded++;
        if (imageLoaded === this.imagesToPreload.length) {
          setTimeout(() => (this.load = false), 6000);
        }
      };
    }
  },
  methods: {
    async redirect() {
      this.dataLoad = true;
      if (this.$route.query.code && this.$route.query.code == "QlsKr") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip1@lovester.net",
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
              email: "vip2@lovester.net",
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
              email: "vip3@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "XdcjU") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip4@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "Acqqa") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip5@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "OkDnc") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip6@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "PLmfs") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip7@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "CaClq") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip8@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "Fhdkf") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip9@lovester.net",
              password: "As4rf5eg8a54qs2",
            }),
          }).then((x) => x.json())
        ).token;
        localStorage.setItem("token", token);
        this.$router.push({ name: "home" });
      }
      if (this.$route.query.code && this.$route.query.code == "LUyDf") {
        const token = (
          await fetch(this.apiUrl + "auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: "vip10@lovester.net",
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
.position-loader-empty {
  top: 50%;
  left: 50%;
  background-size: 500% 500%;
  background-color: white;
  height: 100vh;
  width: 100vw;
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

.logo {
  border: 2px solid #cb3579;
}

.bg-gradient {
  background-image: linear-gradient(to top right, #8e1249, #f54f9a);
}

.border-top {
  border-top: 2px solid #c65588;
}

.bg-close {
  background-color: #8d1147;
}

.h-custom-main {
  height: 80vh !important;
}

.h-custom-sub {
  height: calc(100% - 11rem) !important;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cb588b;
  border-radius: 9999px;
  max-height: 100px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.spinner {
  position: relative;
  margin: auto auto auto auto;
  bottom: 40px;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 20px;
  height: 20px;
  background-color: #ffffff;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
