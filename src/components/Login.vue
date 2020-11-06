<template>
  <div
    :class="load ? 'blur' : ''"
    class="flex justify-center flex-col h-screen items-center"
  >
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
        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("country") }}
          </label>
          <input
            @change="
              (e) => {
                checkCountry = country && true;
              }
            "
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            v-model="country"
            :class="!checkCountry ? 'border-red-500' : ''"
            :placeholder="$t('country')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkCountry ? 'hidden' : 'block'"
          >
            {{ $t("validateCountry") }}
          </p>
        </div>
        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("city") }}
          </label>
          <input
            @change="
              (e) => {
                checkCity = city && true;
              }
            "
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            v-model="city"
            :class="!checkCity ? 'border-red-500' : ''"
            :placeholder="$t('city')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkCity ? 'hidden' : 'block'"
          >
            {{ $t("validateCity") }}
          </p>
        </div>
        <div class="w-full flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("birthday") }}
          </label>
          <div class="flex justify-center w-full md:flex-no-wrap flex-wrap">
            <select
              class="w-full md:w-1/3 my-1 appearance-none overflow-visible mx-1 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="() => checkDate()"
              v-model="day"
            >
              <option value="-1" selected disabled hidden>{{
                $t("day")
              }}</option>
              <option v-for="i in 31" :value="i" :key="i">{{ i }}</option>
            </select>
            <select
              class="w-full md:w-1/3 my-1 appearance-none overflow-visible mx-1 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="() => checkDate()"
              v-model="month"
            >
              <option value="-1" selected disabled hidden>{{
                $t("month")
              }}</option>
              <option v-for="i in 12" :value="i" :key="i">{{ i }}</option>
            </select>
            <select
              class="w-full md:w-1/3 my-1 appearance-none overflow-visible mx-1 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="() => checkDate()"
              v-model="year"
            >
              <option value="-1" selected disabled hidden>{{
                $t("year")
              }}</option>
              <option v-for="i in 70" :value="i + 1949" :key="i + 1949">{{
                i + 1949
              }}</option>
            </select>
          </div>
          <p
            class="text-red-500 text-xs italic"
            :class="checkBirthday ? 'hidden' : 'block'"
          >
            {{ $t("validateBirthday") }}
          </p>
        </div>
        <div class="flex w-full justify-evenly">
          <!-- <button
            type="submit"
            @click="login"
            class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
          >
            {{ $t("login") }}
          </button> -->
          <button
            :disabled="loading || success"
            type="submit"
            @click="() => signUp()"
            class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
          >
            {{ $t("signUp") }}
          </button>
        </div>
      </div>
      <p class="text-red-500 text-xs italic">
        {{ error }}
      </p>
    </form>
    <div
      v-if="success"
      class="absolute text-green-500 border-2 z-50 bg-white rounded-lg border-gray-400 h-10/12 m-1/2 position-custom"
    >
      <div class="w-full p-5">
        {{ $t("signupSuccess") }}
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
  </div>
  <moon-loader v-if="load" class="absolute position-loader"></moon-loader>
</template>

<script>
import LangGear from "./LangGear";
import MoonLoader from "vue-spinner/src/MoonLoader";

export default {
  components: {
    LangGear,
    MoonLoader,
  },
  data() {
    return {
      checkEmail: true,
      checkPassword: true,
      checkName: true,
      checkCountry: true,
      checkCity: true,
      checkGender: true,
      loading: false,
      checkBirthday: true,
      email: "",
      day: -1,
      month: -1,
      year: -1,
      result: false,
      gender: -1,
      country: "",
      city: "",
      password: "",
      error: "",
      success: false,
      load: false,
      birthday: null,
      signup: false,
      // eslint-disable-next-line no-useless-escape
      re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  async mounted() {
    this.load = true;
    if (this.$route.query.token && this.$route.query.id) {
      await fetch(
        "https://lovester.net/backend/public/api/auth/login?token=" +
          this.$route.query.token +
          "&id=" +
          this.$route.query.id,
        {
          method: "POST",
          body: JSON.stringify({
            token: this.$route.query.token,
            id: this.$route.query.id,
          }),
        }
      )
        .then(async (res) => {
          const token = (await res.json()).token;
          localStorage.setItem("token", token);
          this.$router.push({ name: "home" });
          setTimeout(() => (this.load = false), 300);
        })
        .catch(() => setTimeout(() => (this.load = false), 300));
    } else {
      setTimeout(() => (this.load = false), 300);
    }
  },
  methods: {
    checkDate() {
      let maxDays = 31;
      switch (this.month) {
        case 2:
          maxDays =
            (this.year % 4 == 0 && this.year % 100) || this.year % 400 == 0
              ? 29
              : 28;
          break;
        case 9:
        case 4:
        case 6:
        case 11:
          maxDays = 30;
          break;
        default:
          break;
      }
      if (this.day > maxDays) return false;
      return true;
    },
    async signUp() {
      this.checkGender = this.gender !== -1;
      this.checkCountry = this.country && true;
      this.checkCity = this.city && true;
      this.checkBirthday =
        this.checkDate() &&
        this.day !== -1 &&
        this.month !== -1 &&
        this.year !== -1;
      this.loading = true;
      this.checkEmail =
        this.email && this.re.test(String(this.email).toLowerCase());
      if (
        !this.checkEmail ||
        !this.checkCountry ||
        !this.checkCity ||
        !this.checkBirthday
      ) {
        this.loading = false;
        return;
      }
      await fetch("https://lovester.net/backend/public/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          birthday: this.day + "/" + this.month + "/" + this.year,
          country: this.country,
          city: this.city,
          lang: this.$i18n.locale,
        }),
      })
        .then((res) => {
          if (res.status !== 200) this.error = this.$t("signupError");
          else {
            this.success = this.$t("signupSuccess");
            this.email = "";
            this.country = "";
            this.city = "";
            this.month = -1;
            this.year = -1;
            this.day = -1;
          }
        })
        .catch(() => {
          this.error = this.$t("signupError");
        });
    },
  },
};
</script>

<style>
.custom-position {
  top: 5px;
  right: 5px;
}

.custom {
  color: #f64740;
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
