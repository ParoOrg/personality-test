<template>
  <div class="flex justify-center h-screen items-center">
    <form
      @submit="
        (e) => {
          e.preventDefault();
        }
      "
      class="w-full h-full relative lg:h-auto lg:w-1/2 max-w-lg bg-gray-100 rounded-lg p-10"
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
        <div class="w-full flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("name") }}
          </label>
          <input
            @change="
              (e) => {
                checkName = name && true;
              }
            "
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            v-model="name"
            :class="!checkName ? 'border-red-500' : ''"
            :placeholder="$t('name')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkName ? 'hidden' : 'block'"
          >
            {{ $t("validateName") }}
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
        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("birthday") }}
          </label>
          <input
            @change="
              (e) => {
                checkBirthday = birthday && true;
              }
            "
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="date"
            v-model="birthday"
            :class="!checkBirthday ? 'border-red-500' : ''"
            :placeholder="$t('birthday')"
          />
          <p
            class="text-red-500 text-xs italic"
            :class="checkBirthday ? 'hidden' : 'block'"
          >
            {{ $t("validateBirthday") }}
          </p>
        </div>
        <div class="w-1/2 flex items-start flex-col px-3 mb-6 md:mb-0 relative">
          <label
            class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
            for="grid-first-name"
          >
            {{ $t("gender") }}
          </label>
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="!checkGender ? 'border-red-500' : ''"
            id="grid-state"
            v-model="gender"
          >
            <option value="-1" selected="true" disabled="true" hidden="true">{{
              $t("selectGender")
            }}</option>
            <option value="0">{{ $t("male") }}</option>
            <option value="1">{{ $t("female") }}</option>
            <option value="2">{{ $t("other") }}</option>
          </select>
          <p
            class="text-red-500 text-xs italic"
            :class="checkGender ? 'hidden' : 'block'"
          >
            {{ $t("incomplete") }}
          </p>
          <div
            class="pointer-events-none absolute mt-5 mr-5 form-select inset-y-0 right-0 flex items-center px-2 text-gray-700"
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
          </div>
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
            type="submit"
            @click="signUp"
            class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
          >
            {{ $t("signUp") }}
          </button>
        </div>
      </div>
      <p class="text-red-500 text-xs italic">
        {{ error }}
      </p>
      <p class="text-green-500 text-xs italic">
        {{ success }}
      </p>
    </form>
  </div>
</template>

<script>
import { db } from "../firebaseDB";
import LangGear from "./LangGear";

export default {
  components: {
    LangGear,
  },
  data() {
    return {
      checkEmail: true,
      checkPassword: true,
      checkName: true,
      checkCountry: true,
      checkCity: true,
      checkGender: true,
      checkBirthday: true,
      email: "",
      gender: -1,
      country: "",
      city: "",
      password: "",
      error: "",
      success: "",
      birthday: null,
      name: "",
      signup: false,
      // eslint-disable-next-line no-useless-escape
      re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  mounted() {
    console.log(db.app.auth().currentUser);
    if (db.app.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) return;
      db.app
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          console.log(result);
          window.localStorage.removeItem("emailForSignIn");
          console.log(db.app.auth().currentUser);
          this.$router.push({ name: "home" });
        })
        .catch(function() {});
    }
  },
  methods: {
    async signUp() {
      this.checkName = this.name && true;
      this.checkGender = this.gender !== -1;
      this.checkCountry = this.country && true;
      this.checkCity = this.city && true;
      this.checkBirthday = this.birthday;
      this.checkEmail =
        this.email && this.re.test(String(this.email).toLowerCase());
      if (
        !this.checkEmail ||
        !this.checkGender ||
        !this.checkCountry ||
        !this.checkCity ||
        !this.checkBirthday ||
        !this.checkGender
      )
        return;
      const auth = db.app.auth();
      await auth
        .sendSignInLinkToEmail(this.email, {
          url: "https://lovesterorg.github.io/personality-test/#/login",
          handleCodeInApp: true,
        })
        .then(async () => {
          window.localStorage.setItem("emailForSignIn", this.email);
          let x = null;
          await db.app
            .database()
            .ref("userData")
            .orderByChild("email")
            .equalTo(this.email)
            .on("value", (v) => (x = v.toJSON()));
          console.log(x);
          if (x != null) {
            this.error = this.$t("signupError");
            return;
          }
          await db.app
            .database()
            .ref("userData")
            .push({
              email: this.email,
              name: this.name,
              gender: this.gender,
              country: this.country,
              city: this.city,
              birthday: this.birthday,
            });
          this.success = this.$t("signupSuccess");
        })
        .catch((e) => {
          console.log(e);
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
</style>
