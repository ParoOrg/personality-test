<template>
  <div v-if="!load" class="flex justify-center flex-col h-screen items-center">
    <h1 class="text-3xl custom mt-56">LOVESTER</h1>
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
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
        <div
          class="w-full relative flex items-start flex-col px-3 mb-6 md:mb-0"
        >
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("password") }}
          </label>
          <img
            :src="showPassword ? '/invisible.svg' : '/eye.svg'"
            :class="
              $i18n.locale == 'ar'
                ? !checkPassword
                  ? 'eye-position-rtl top-adjust'
                  : 'eye-position-rtl'
                : !checkPassword
                ? 'eye-position top-adjust'
                : 'eye-position'
            "
            @click="() => (showPassword = !showPassword)"
            class="cursor-pointer absolute w-5 h-5 z-50"
          />
          <input
            @change="
              (e) => {
                checkPassword = password && true;
              }
            "
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :class="!checkPassword ? 'border-red-500' : ''"
            :placeholder="$t('password')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkPassword ? 'hidden' : 'block'"
          >
            {{ $t("validatePassword") }}
          </p>
        </div>
        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("country") }}
          </label>
          <country-selector
            :selected="''"
            :suggestions="Object.values(countries.getNames(this.$i18n.locale))"
            :values="Object.keys(countries.getNames(this.$i18n.locale))"
            @country="changeCountry"
          ></country-selector>
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
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("fullName") }}
          </label>
          <input
            @change="
              (e) => {
                checkName = name && true;
              }
            "
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            v-model="name"
            :class="!checkName ? 'border-red-500' : ''"
            :placeholder="$t('fullName')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkName ? 'hidden' : 'block'"
          >
            {{ $t("incomplete") }}
          </p>
        </div>

        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-state"
          >
            {{ $t("gender") }}
          </label>
          <div class="relative w-full">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              :class="!checkGender ? 'border-red-500' : ''"
              id="grid-state"
              v-model="gender"
            >
              <option
                value="-1"
                selected="true"
                disabled="true"
                hidden="true"
                >{{ $t("selectGender") }}</option
              >
              <option value="0">{{ $t("male") }}</option>
              <option value="1">{{ $t("female") }}</option>
            </select>
            <p
              class="text-red-500 text-xs italic"
              :class="checkGender ? 'hidden' : 'block'"
            >
              {{ $t("incomplete") }}
            </p>
            <!-- <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div> -->
          </div>
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
          <button
            :disabled="loading || success"
            type="submit"
            @click="() => signUp()"
            class="mr-1 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
          >
            {{ $t("signUp") }}
          </button>
        </div>
      </div>
      <p class="text-red-500 text-xs italic">
        {{ error }}
      </p>
    </form>
    <popup v-if="success" @close="success = false" :redirect="true">
      <p>{{ $t("signupSuccess") }}</p>
    </popup>
  </div>
  <img src="/loading.gif" v-if="load" class="absolute position-loader">
</template>

<script>
import LangGear from "./LangGear";
import Popup from "./Popup";
import CountrySelector from "./CountrySelector";
import * as countries from "i18n-iso-countries";

export default {
  components: {
    LangGear,
    
    Popup,
    CountrySelector,
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
      showPassword: false,
      gender: -1,
      country: "",
      city: "",
      password: "",
      name: "",
      error: "",
      countries,
      success: true,
      load: false,
      birthday: null,
      signup: false,
      // eslint-disable-next-line no-useless-escape
      re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  computed: {
    countryList() {
      return countries.getNames(this.$i18n.locale);
    },
  },
  async mounted() {
    if (sessionStorage.getItem("email"))
      this.email = sessionStorage.getItem("email");
  },
  methods: {
    changeCountry(c) {
      console.log(c);
      this.country = c;
    },
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
      this.error = "";
      this.load = true;
      this.checkGender = this.gender !== -1;
      this.checkCountry =
        Object.values(countries.getNames(this.$i18n.locale)).indexOf(
          this.country
        ) !== -1;
      this.checkPassword = this.password.length >= 8;
      this.checkName = this.name && true;
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
        !this.checkPassword ||
        !this.checkCountry ||
        !this.checkCity ||
        !this.checkGender ||
        !this.checkName ||
        !this.checkBirthday
      ) {
        this.loading = false;
        this.load = false;
        return;
      }

      await fetch(this.apiUrl + "auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email.trim(),
          birthday: this.day + "/" + this.month + "/" + this.year,
          country: Object.keys(countries.getNames(this.$i18n.locale))[
            Object.values(countries.getNames(this.$i18n.locale)).indexOf(
              this.country
            )
          ],
          city: this.city,
          gender: this.gender,
          name: this.name,
          password: this.password,
          lang: this.$i18n.locale,
          // test: true,
        }),
      })
        .then((res) => {
          if (res.status > 299) this.error = this.$t("signupError");
          else {
            this.success = true;
          }
        })
        .catch(() => {
          this.error = this.$t("signupError");
        });
      this.email = "";
      this.password = "";
      this.country = "";
      this.name = "";
      this.city = "";
      this.month = -1;
      this.year = -1;
      this.gender = -1;
      this.day = -1;
      this.loading = false;
      this.load = false;
    },
  },
};
</script>

<style scoped>
.top-adjust {
  top: 48% !important;
}

.position-custom {
  top: 50% !important;
}

.custom-position {
  top: 5px;
  right: 5px;
}

.custom {
  color: #701e5d;
  margin-top: 120px;
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

.eye-position {
  right: 20px;
  top: 58%;
}

.eye-position-rtl {
  left: 20px;
  top: 58%;
}
</style>
