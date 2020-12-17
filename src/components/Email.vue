<template>
  <div v-if="!load" class="flex justify-center flex-col h-screen items-center">
    <h1 class="text-3xl custom">LOVESTER</h1>
    <form
      @submit="
        (e) => {
          e.preventDefault();
        }
      "
      class="w-full relative lg:h-auto lg:w-1/2 max-w-lg bg-gray-100 rounded-lg p-10"
    >
      <lang-gear class="absolute custom-position"></lang-gear>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("email") }}
          </label>
          <input
            @change="
              (e) => {
                checkEmail = re.test(String(email).toLowerCase());
              }
            "
            @input="() => (email = email.trim())"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            v-model="email"
            :class="!checkEmail ? 'border-red-500' : ''"
            :placeholder="$t('email')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkEmail ? 'hidden' : 'block'"
          >
            {{ $t("validateEmail") }}
          </p>
        </div>
        <div class="flex w-full justify-evenly">
          <button
            :disabled="loading || success"
            type="submit"
            @click="() => check()"
            class="mr-1 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
          >
            {{ $t("submit") }}
          </button>
        </div>
      </div>
    </form>
  </div>
  <div
    v-if="success"
    class="absolute text-green-500 border-2 z-50 lg:w-1/4 w-full bg-white rounded-lg border-gray-400 h-10/12 m-1/2 position-custom-email"
  >
    <div class="w-full p-5">
      {{ $t("passwordEmailSent") }}
    </div>
    <button
      @click="
        () => {
          result = false;
          success = false;
        }
      "
      class="transition p-2 bg-red-500 px-4 text-white rounded-lg inline lg:inline my-4"
    >
      {{ $t("close") }}
    </button>
  </div>
  <img src="/loading.gif" v-if="load" class="absolute position-loader">
</template>

<script>
import LangGear from "./LangGear";

export default {
  components: {
    LangGear,
    
  },
  data() {
    return {
      checkEmail: true,
      checkPassword: true,
      emailConfirmed: false,
      loading: false,
      email: "",
      password: "",
      error: "",
      success: false,
      load: false,
      birthday: null,
      signup: false,
      showPassword: false,
      // eslint-disable-next-line no-useless-escape
      re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  methods: {
    async resendEmail() {
      this.load = true;
      this.checkEmail =
        this.email && this.re.test(String(this.email).toLowerCase());
      if (!this.checkEmail || !this.checkPassword) {
        this.loading = false;
        this.load = false;
        return;
      }
      await fetch(this.apiUrl + "resend?lang=" + this.$i18n.locale, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email.trim(),
        }),
      });
      this.load = false;
      this.emailSent = true;
    },
    async check() {
      this.checkEmail =
        this.email && this.re.test(String(this.email).toLowerCase());
      if (!this.checkEmail) {
        this.loading = false;
        this.load = false;
        return;
      }

      const res = await fetch(this.apiUrl + "check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email.trim(),
        }),
      }).then((res) => {
        return res.json();
      });

      sessionStorage.setItem('email', this.email)

      switch (res.result) {
        case 0:
          await this.resendEmail();
          this.success = true;
          break;
        case 1:
          this.$router.push({ name: "login" });
          break;
        case 2:
          this.$router.push({ name: "signup" });
      }
      this.loading = false;
      this.load = false;
    },
  },
};
</script>

<style>
.position-custom-email {
  top: 50% !important;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

.custom-position {
  top: 5px;
  right: 5px;
}

.custom {
  color: #701e5d;
  margin-top: 60px;
}

.blur {
  filter: opacity(0);
  transition: 0.5s;
}
.position-loader {
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
