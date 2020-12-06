<template>
  <div
    class="flex flex-col items-center h-full w-full overflow-auto justify-center"
    :class="load ? 'opacity' : ''"
  >
    <h1 class="text-3xl custom">LOVESTER</h1>
    <h1 class="text-2xl">{{ $t("personalityTest") }}</h1>
    <form
      @submit="
        (e) => {
          e.preventDefault();
        }
      "
      v-if="!submitted"
      class="w-full relative lg:w-1/2 max-w-lg bg-gray-100 rounded-lg p-10"
    >
      <div class="flex flex-wrap justify-center -mx-3 mb-6">
        <lang-gear class="absolute custom-position"></lang-gear>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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

        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            {{ $t("gender") }}
          </label>
          <div class="relative">
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
            <div
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
            </div>
          </div>
        </div>

        <button
          type="submit"
          @click="check"
          class="md:w-32 block m-auto bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
        >
          {{ $t("submit") }}
        </button>
        <button
          type="button"
          @click="compatibility"
          class="md:w-32 block m-auto bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
        >
          {{ $t("compatibilityReport") }}
        </button>
      </div>
      <p class="text-red-500 text-xs italic">
        {{ error }}
      </p>
    </form>
    <div
      :class="result || load ? 'blur' : ''"
      class="bg-gray-100 w-custom rounded-lg p-5"
      ref="main"
      v-else-if="submitted"
    >
      <question
        v-for="(val, i) in testQuestions.slice(index, index + step)"
        :index="i + index"
        :question="testQuestions[i + index].text[$i18n.locale]"
        :answer="answers[i + index]"
        :key="i"
        :callback="(val, index) => answer(index, val)"
      ></question>
      <div class="w-full ltr flex items-center justify-between p-5">
        <button
          type="submit"
          @click="decrement"
          class="md:w-32 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
        >
          {{ $t("back") }}
        </button>
        <div v-if="!verified" class="text-red-600">
          {{ $t("incompleteError") }}
        </div>
        <button
          type="submit"
          @click="
            () => (index == testQuestions.length - step ? send() : increment())
          "
          class="md:w-32 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
        >
          {{ index == testQuestions.length - step ? $t("submit") : $t("next") }}
        </button>
      </div>
    </div>

    <div
      v-if="result.length > 0"
      class="absolute border-2 z-50 bg-white rounded-lg border-gray-400 w-10/12 h-10/12 m-1/2 position-custom"
    >
      <div class="w-full py-5 text-lg font-bold border-b-2 border-gray-400">
        {{ $t("yourResults") }}
      </div>
      <div class="w-full p-5">
        {{ result }}
      </div>
      <button
        @click="
          () => {
            result = 0;
            index = 0;
            localStorage.removeItem('token');
            $router.push('login');
          }
        "
        class="transition p-2 bg-red-500 px-4 text-white rounded-lg inline text-black lg:inline my-4"
      >
        {{ $t("close") }}
      </button>
    </div>
  </div>
  <moon-loader v-if="load" class="absolute position-loader"></moon-loader>
</template>

<script>
import "@/assets/tailwind.css";
import questions from "@/assets/questions.json";
import Question from "./Question";
import LangGear from "./LangGear";
import MoonLoader from "vue-spinner/src/MoonLoader";

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      photoUrl: "",
      gender: -1,
      result: "",
      testQuestions: questions
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]),
      checkName: true,
      checkGender: true,
      submitted: false,
      verified: true,
      load: false,
      answers: new Array(questions.length).fill(0, 0, questions.length),
      o: 0,
      c: 0,
      e: 0,
      a: 0,
      error: "",
      n: 0,
      index: 0,
      transporter: null,
      step: 5,
      user: null,
    };
  },
  components: {
    Question,
    MoonLoader,
    LangGear,
  },
  methods: {
    compatibility() {
      console.log(this.user.n)
      if (this.user.n) {
        window.location.href = './#/compatibility'
      }
      this.error = this.$t("noOceanError");
    },
    async check() {
      if (this.user.n) return (this.error = this.$t("personalityTaken"));
      this.checkName = this.name && true;
      this.checkGender = this.gender >= 0;
      if (this.checkName && this.gender >= 0) {
        this.submitted = true;
      }
      localStorage.setItem("checkName", this.checkName);
      localStorage.setItem("gender", this.gender);
      localStorage.setItem("name", this.name);
      localStorage.setItem("checkName", this.checkName);
      localStorage.setItem("submitted", this.submitted);
    },
    async answer(index, val) {
      this.answers[index] = val;
      await fetch(this.apiUrl + "answer?question=" + index + "&value=" + val, {
        method: "POST",
        body: JSON.stringify({ question: index, value: val }),
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("answers", this.answers);
    },
    send() {
      this.calculateOcean();
      this.sendReport();
    },
    calculatePart(letter) {
      let count = 0;
      return (
        (this.testQuestions.reduce((s, x, i) => {
          const j = x.fields.indexOf(letter);
          if (j !== -1) {
            count++;
            return s + x.coeff[j] * this.answers[i];
          }
          return s;
        }, 0) /
          (count * 3)) *
        100
      );
    },
    calculateOcean() {
      this.o = this.calculatePart("o");
      this.c = this.calculatePart("c");
      this.e = this.calculatePart("e");
      this.a = this.calculatePart("a");
      this.n = this.calculatePart("n");
    },
    async sendReport() {
      this.load = true;
      const data = await (
        await fetch("https://report-gen-api.herokuapp.com/generate_report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            o: this.o,
            c: this.c,
            e: this.e,
            a: this.a,
            n: this.n,
            name: this.name,
            lang: this.$i18n.locale,
            gender: +this.gender,
          }),
        })
      ).json();

      await fetch(this.apiUrl + "auth/update", {
        method: "POST",
        body: JSON.stringify({
          o: this.o,
          c: this.c,
          e: this.e,
          a: this.a,
          n: this.n,
          name: this.name,
          lang: this.$i18n.locale,
          gender: +this.gender,
        }),
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      });

      await fetch(this.apiUrl + "send_report", {
        body: JSON.stringify({
          subject: this.$t("personalitySubject"),
          body: `<div><h1 style="text-align: center;">${this.$t(
            "reportTitle"
          )}</h1>
                  <div style="border: 1px solid gray; border-radius: 5px;padding: 20px">${
                    data.report
                  }</div>
                </div>`,
        }),
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      }).catch(() => {});
      window.scrollTo(0, 0);
      this.result = data.report;
      this.load = false;
    },
    decrement() {
      if (this.index == 0) this.submitted = false;
      this.index = Math.max(this.index - this.step, 0);
      localStorage.setItem("index", this.index);
      localStorage.setItem("submitted", this.submitted);
    },
    increment() {
      this.verified = false;
      if (
        !this.answers
          .slice(this.index, this.index + this.step)
          .reduce((s, x) => s && x, true)
      ) {
        this.verified = false;
        localStorage.setItem("verified", this.verified);
        return;
      }
      window.scrollTo(0, 0);
      this.verified = true;
      this.index = Math.min(
        this.index + this.step,
        this.testQuestions.length - this.step
      );
      localStorage.setItem("index", this.index);
      localStorage.setItem("verified", this.verified);
    },
  },
  async mounted() {
    this.localStorage = localStorage;
    this.name = localStorage.getItem("name") || this.name;
    this.gender = localStorage.getItem("gender") || this.gender;
    if (localStorage.getItem("checkName"))
      this.checkName = localStorage.getItem("checkName") == "true";
    if (localStorage.getItem("checkGender"))
      this.checkGender = localStorage.getItem("checkGender") == "true";
    if (localStorage.getItem("verified"))
      this.verified = localStorage.getItem("verified") == "true";
    if (localStorage.getItem("submitted"))
      this.submitted = localStorage.getItem("submitted") == "true";
    if (localStorage.getItem("answers")) {
      this.answers = localStorage
        .getItem("answers")
        .split(",")
        .map((x) => +x);
    }
    if (localStorage.getItem("questions")) {
      this.testQuestions = JSON.parse(localStorage.getItem("questions"));
    } else
      localStorage.setItem("questions", JSON.stringify(this.testQuestions));
    this.n = localStorage.getItem("n") || this.n;
    this.index = +localStorage.getItem("index") || this.index;
    this.step = localStorage.getItem("step") || this.step;
    if (localStorage.getItem("user"))
      this.user = JSON.parse(localStorage.getItem("user"));
    this.load = true;
    const token = localStorage.getItem("token");
    let user = this.user;
    if (token !== null) {
      user = await fetch(this.apiUrl + "user", {
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          if (res.status !== 200) {
            localStorage.removeItem("token");
            this.$router.push({ name: "login" });
          }
          this.token = localStorage.getItem("token");
          setTimeout(() => {
            this.load = false;
          }, 300);
          return res.json();
        })
        .catch(() => {
          setTimeout(() => {
            this.load = false;
          }, 300);
          this.$router.push({ name: "login" });
        });
    } else {
      setTimeout(() => {
        this.load = false;
      }, 300);
      this.$router.push({ name: "login" });
    }
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.blur {
  filter: blur(3px);
  transition: 0.5s;
}

a::after {
  content: "";
  opacity: 0;
}

a:hover::after {
  opacity: 1;
}

.ltr {
  direction: ltr;
}

.opacity {
  filter: opacity(0);
}
.position-custom {
  top: 2rem;
}
.custom {
  color: #701e5d;
  margin-top: 60px;
}

@media (min-width: 1024px) {
  .w-custom {
    width: 80vw;
  }
}
</style>
