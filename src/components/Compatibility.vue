<template>
  <div v-if="!load" class="flex justify-center flex-col h-screen items-center">
    <h1 class="text-3xl custom">LOVESTER</h1>
    <div
      class="w-full relative lg:h-auto lg:w-1/2 max-w-lg bg-gray-100 rounded-lg p-10"
    >
      <lang-gear class="absolute custom-position"></lang-gear>
      <label for="input-code" class="font-bold block m-auto mb-5"
        >{{ $t("enterCode") }}:</label
      >
      <p>({{ user.code }})</p>
      <input
        type="text"
        class="block m-auto px-5 mt-5"
        id="input-code"
        v-model="code"
      />
      <button
        type="submit"
        @click="submit"
        class="md:w-32 block m-auto bg-indigo-600 hover:bg-blue-dark text-white font-bold py-1 px-4 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
      >
        {{ $t("submit") }}
      </button>
      <p class="text-red-500 mt-4 text-xs italic">
        {{ error }}
      </p>
    </div>
  </div>
  <div
    v-if="report && !load"
    class="absolute text-green-500 border-2 z-50 bg-white rounded-lg border-gray-400 h-10/12 w-full lg:w-1/2 m-1/2 position-custom"
  >
    <div class="w-full p-5">
      {{ report }}
    </div>
    <button
      @click="() => (report = '')"
      class="transition p-2 bg-red-500 px-4 text-white rounded-lg inline lg:inline my-4"
    >
      {{ $t("close") }}
    </button>
  </div>
  <moon-loader v-if="load" class="absolute position-loader"></moon-loader>
</template>

<script>
import MoonLoader from "vue-spinner/src/MoonLoader";
import LangGear from "./LangGear";
export default {
  components: {
    MoonLoader,
    LangGear
  },
  data() {
    return {
      code: "",
      load: false,
      report: "",
      error: "",
      user: {}
    };
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user);
    } else this.$router.push({ name: "login" });
  },
  methods: {
    async submit() {
      this.error = "";
      this.load = true;
      const data = await fetch(this.apiUrl + "code?code=" + this.code, {
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      }).then((x) => {
        if (x.status !== 200) return (this.error = this.$t("invalidCode"));
        return x.json();
      });
      if (!this.error) this.report = data.report;
      this.load = false;
    },
    async resendCode() {
      fetch(this.apiUrl + "resend", {
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      });
    },
  },
};
</script>

<style>
.position-custom {
  top: 2rem;
}
.custom {
  color: #701e5d;
  margin-top: 60px;
}
.custom-position {
  top: 5px;
  right: 5px;
}
</style>
