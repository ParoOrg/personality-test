<template>
  <div v-if="!load" class="flex justify-center flex-col h-screen items-center">
    <h1 class="text-3xl custom">LOVESTER</h1>
    <div
      class="w-full relative lg:h-auto lg:w-1/2 max-w-lg bg-gray-100 rounded-lg p-10"
    >
      <lang-gear class="absolute custom-position"></lang-gear>
      <p class="font-bold">{{ $t("compatibilityDescription") }}</p>
      <p>{{ $t("yourCode") }}: {{ user.code }}</p>
      <input
        type="text"
        class="block m-auto px-5 mt-5"
        id="input-code"
        :placeholder="$t('enterCode')"
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
    LangGear,
  },
  data() {
    return {
      code: "",
      load: false,
      report: "",
      email: "",
      error: "",
      user: {},
    };
  },
  mounted() {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      this.user = JSON.parse(localStorage.getItem("user"));
    } else this.$router.push({ name: "login" });
  },
  methods: {
    async submit() {
      this.error = "";
      if (this.code == this.user.code)
        return (this.error = this.$t("sameCode"));
      this.load = true;
      const data = await fetch(this.apiUrl + "code?code=" + this.code, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }).then((x) => {
        if (x.status !== 200)
          return (this.error =
            x.status == 402
              ? this.$t("invalidCode")
              : this.$t("compatibilityError"));
        return x.json();
      });

      if (!this.error) {
        await fetch(this.apiUrl + "send_report", {
          body: JSON.stringify({
            email: this.email,
            subject: this.$t("compatibilityReport"),
            body: `<div><h1 style="text-align: center;">${this.$t(
              "compatibilityReport"
            )}</h1>
                  <div style="border: 1px solid gray; border-radius: 5px;padding: 20px">${
                    data.report
                  }</div>
                </div>`,
          }),
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }).catch(() => {});
        this.report = data.report;
      }
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
  top: 2rem !important;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
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
