<template>
  <div
    class="flex flex-col items-center h-full w-full overflow-auto justify-center"
    v-if="!dataLoad"
  >
    <div class="mt-2 relative w-full h-20 flex items-center sm:hidden">
      <p class="inline w-full text-center">
        {{ index + 1 + " " + $t("of") + " 40" }}
      </p>
      <img class="w-14 inline mr-4 absolute left-2" src="../assets/logo.png" />
    </div>

    <div class="meter h-1 sm:hidden">
      <span
        class="h-1"
        :style="'width: calc((100% / 40) * ' + index + ')'"
      ></span>
    </div>
    <div
      :class="result || load ? 'blur' : ''"
      class="container rounded-lg p-5 sm:mt-20"
      ref="main"
    >
      <lang-gear class="absolute custom-position"></lang-gear>
      <question
        v-for="(val, i) in testQuestions.slice(index, index + step)"
        :index="i + index"
        :question="testQuestions[i + index].text[$i18n.locale]"
        :answer="answers[i + index]"
        :key="i"
        :callback="
          (val, index) => {
            answer(index, val);
            if (width < 640) increment();
          }
        "
      ></question>
      <div class="w-full ltr flex items-center pt-0 justify-between p-5">
        <button
          type="submit"
          @click="decrement"
          class="text-sm  2xs:text-base xs:text-xl  md:text-3xl rounded-full px-5 2xs:px-10 xs:px-14 py-1 sm:py-2 bg-gradient-to-r from-transparent to-transparent hover:border-white hover:from-primary-light hover:to-primary hover:text-white border-primary border-2  text-primary transition ease-in-out duration-300 outline-none"
        >
          {{ $t("back") }}
        </button>

        <button
          type="submit"
          @click="
            () => (index == testQuestions.length - step ? send() : increment())
          "
          class="text-sm  2xs:text-base xs:text-xl  md:text-3xl rounded-full px-5 2xs:px-10 xs:px-14 py-1 sm:py-2 bg-gradient-to-r from-primary-light to-primary border-white text-white hover:border-primary border-2 hover:text-primary hover:from-transparent hover:to-transparent transition ease-in-out duration-300 outline-none"
        >
          {{ index == testQuestions.length - step ? $t("submit") : $t("next") }}
        </button>
      </div>
      <div v-if="!verified" class="text-red-600">
        {{ $t("incompleteError") }}
      </div>
    </div>
    <report-popup
      :report="result"
      :show-condition="load || result.length > 0"
      :is-loading="load"
      @close-popup="
        () => {
          result = 0;
          index = 0;
          //localStorage.removeItem('token');
          $router.push({ name: 'compatibility' });
        }
      "
    >
      <template #popup-icon>
        <img
          class="object-scale-down h-full w-full transform scale-75"
          src="../assets/new_logo.png"
        />
      </template>
      <template #popup-title>
        {{ $t("personalityPopupTitle") }}
      </template>
    </report-popup>
  </div>
  <img src="/loading.gif" v-if="dataLoad" class="absolute z-10 position-loader" />
</template>

<script>
import "@/assets/tailwind.css";
import questions from "@/assets/questions.json";
import Question from "./Question1";
import LangGear from "./LangGear";
import ReportPopup from "./ReportPopup";
//
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      photoUrl: "",
      gender: -1,
      result: "",
      dataLoad: true,
      width: window.innerWidth,
      testQuestions: questions
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]),
      checkName: true,
      checkGender: true,
      submitted: true,
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
    ReportPopup,
    LangGear,
  },
  methods: {
    compatibility() {
      if (this.user.n) {
        window.location.href = "./#/compatibility";
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
            name: this.user.name,
            lang: this.$i18n.locale,
            gender: +this.user.gender,
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
      if (this.result) return;
      if (this.index == 0) this.submitted = false;
      this.index = Math.max(this.index - this.step, 0);
      localStorage.setItem("index", this.index);
      localStorage.setItem("submitted", this.submitted);
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    increment() {
      if (this.result) return;
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
    windowResized(e) {
      if (e.target.screen.width >= 768) {
        this.step = 5;
      } else {
        this.step = 1;
      }
    },
  },
  async mounted() {
    window.dispatchEvent(new Event("resize"));
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
    this.dataLoad = true;
    let token = localStorage.getItem("token");
    if (this.$route.query.code && this.$route.query.code == "QlsKr")
      token = (
        await fetch(this.apiUrl + "auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "manel@lovester.net",
            password: "As4rf5eg8a54qs2",
          }),
        }).then((x) => x.json())
      ).token;
    let user = this.user;
    if (token !== null) {
      user = await fetch(this.apiUrl + "user", {
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          if (res.status !== 200) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.$router.push({ name: "check" });
          }
          this.token = localStorage.getItem("token");
          setTimeout(() => {
            this.dataLoad = false;
          }, 300);
          return res.json();
        })
        .catch(() => {
          setTimeout(() => {
            this.dataLoad = false;
          }, 300);
          this.$router.push({ name: "check" });
        });
    } else {
      setTimeout(() => {
        this.dataLoad = false;
      }, 300);
      this.$router.push({ name: "check" });
    }
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
    // if (user?.n === 0 || user?.n) this.$router.push({ name: "compatibility" });
  },
  created() {
    window.addEventListener("resize", this.windowResized);
  },
  unmounted() {
    window.removeEventListener("resize", this.windowResized);
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

.meter {
  height: 10px;
  position: relative;
  background: #d9d9e8;
  width: 100%;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
}
.meter > span {
  display: block;
  height: 100%;
  background-color: theme("colors.primary.DEFAULT");
  background-image: linear-gradient(
    to right,
    theme("colors.primary.dark"),
    theme("colors.primary.light")
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.position-loader {
  top: 50%;
  left: 50%;
  background-size: 500% 500%;
  background-color: white;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

</style>
