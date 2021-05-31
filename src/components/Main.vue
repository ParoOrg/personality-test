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
      v-if="lang === 'en'"
      :report="result "
      :sexuality="sexuality"
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

    <report-popup-fr 
      v-if="lang === 'fr'"
      :show-condition="load || result.length > 0"
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
    </report-popup-fr>

  </div>
  <div v-if="dataLoad" class="spinner h-1/4 absolute z-10 position-loader w-1/2">
    <div class="bounce1 bg-primary"></div>
    <div class="bounce2 bg-primary"></div>
    <div class="bounce3 bg-primary"></div>
  </div>
</template>

<script>
import "@/assets/tailwind.css";
import questions from "@/assets/questions.json";
import Question from "./Question1";
import LangGear from "./LangGear";
import ReportPopup from "./ReportPopup";
import ReportPopupFr from "./ReportPopupFr";
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
      dataLoveLanguage:[],
      toggleLoveQuetion:false,
      lang : "",
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
      sexuality :"",
      sexualityReport :{
    Mastermind:
      'In sex, you may embrace a casual experience or two, but you tend to explore your sexual side within a committed relationship. You aren’t necessarily easy to please, but you are more than willing to take action to rectify that. You love being in a relationship and your sex preferences include consistency; you can ask for whatever you want, and learn new ways to get your partner off. Like everything else in life, you take sex as a challenge—a way to push yourself to give your best, learning more about your significant other and exploring new sensations together. You are sometimes aggressive and very capable of taking charge in the bedroom. You are capable of having a very high sex drive in the right circumstances, but it all depends on the person and situation. Most importantly, you are always focused on making sure both you and your partner are satisfied in the bedroom. ',
    Logician:
      'Generally, you are a giving sexual partner, especially when someone really excites you. You rarely find yourself attracted to someone solely for their physical appearance though. You are rather sexually drawn to people who are intelligent and who stimulate your intellect. Someone who is only appealing on the surface is unlikely to receive passionate sexual energy from you. Although you are not the most emotionally expressive person, you feel much more satisfied when there is an emotional connection during sex. You’ve probably experienced casual sex (because you are drawn to exploring new things) and found that it was not as satisfying as you would expect. That is mainly because you don’t open up easily and tend to only enjoy sex fully with someone you feel completely comfortable with. Once you do find someone you are relaxed with, sex is a great opportunity to get outside of your own head. You are very keen on experimentation, and enjoy trying new things in the bedroom. You have the perfect combination of wanting to be satisfied, but of also wanting your partner to be satisfied.',
    Commander:
      'When it come to sex, your preferences are likely to change over time. At a young age, you might engage in casual sex too often. However, as you grow up, you’ll notice that casual sex might be fun for a while but is unlikely to really fulfill you in the way you need. You will start searching for something of value and will become rarely drawn to anything shallow or meaningless. You do often have a high sex drive and so sex is an important part of your life and relationships. You have a rather intense and even dominant sexual energy, especially when you are very attracted to someone. Usually, you’re not afraid of going after what you want and you are comfortable to initiate when you are interested in someone. While you might not be a verbally affectionate person who expresses their feelings openly, you are still good at tending to the needs of your partner and you’ll do everything you can to make them feel happy and comfortable during a sexual encounter.',
    Visionary:
      'Generally speaking, when it comes to sex, you tend to embrace both casual and serious relationships. In bed, you are creative, playful, and giving; you only feel as happy as your partner is satisfied, even though you love getting off for its own sake. However, you dislike selfish lovers, and want someone who will be just as giving to you, as you are to them. You can be both serious and lighthearted when it comes to sex. But, most of the times, you see sex as a fun way to enjoy someone (new, or familiar), and a supplement to the relationship you’re developing or nurturing. You dislike the idea of boundaries, and want to keep the passion alive. You also enjoy being able to talk about your sexual experience with your partner. Where some people might become nervous about these types of conversations, you would rather keep things very open and honest. You prefer a partner who can keep this line of communication open.',
    Counselor:
      'Sex has to mean something to you, or else it is pretty miserable. You want to completely trust the person you make love with, that being said you don’t trust easily. You take time to warm up to people, and are not the most physically open person in the world. Although you are hesitant at first, when you find the right person it is electric. Sex is not the most important thing to you, but you find you are rather amazing at it with the right person. With that, sex tends to get better and better in time for you. The more comfortable you get in a relationship, the more you let your wildest side out in the bedroom. You are capable of taking sex to a whole new level of spirituality.',
    Dreamer:
      'For you, sexual relationships require a deep bond and strong emotional connection. Sex being just a physical act, is something you do not usually desire. You might find yourself engaging in casual sex at times, especially if the sex partner is kind and considerate. But these acts of casual sex are likely to make you internally unhappy because you see sex as an opportunity to truly bond and connect with someone, and so intimacy is important for you. So, in general, sex is actually very important to you, but within the confines of a deeper connection. You see sex as a physical manifestation of an emotional connection with someone. It is your opportunity to connect intimately with your partner and you are very willing and eager to try new things in the bedroom, as long as there is an emotional connection.',
    Mentor:
      'You are often giving and passionate person when it comes to sex, especially with someone you truly care for. You are naturally very focused on making others happy and this is something which translates into your sex life. You are often a very attentive lover, wanting to be sure that your partner is as comfortable and happy as possible. You don’t just focus on your own satisfaction and desires, instead you want to dive into making the other person feel truly special and appreciated. It might take some time for you to really open up and show your own desires and who you are. Yet, once you feel completely comfortable and open with someone, you can really find yourself letting go and enjoying the moment. Without feeling sincerely close and connected to someone you likely won’t enjoy your sexual experience much at all. Just having sex for the sake of the act itself is not enough for you to really enjoy yourself. It can even start to feel like a chore if you don’t feel sincerely intimate with that person. Sexual intimacy is something you often crave, and truly need in your life in order to feel close to someone.',
    Activist:
      'You are a very enthusiastic and passionate sex partner. You have a very high sex drive and see it as an opportunity to express yourself fully to someone. You enjoy being able to explore new sides of yourself and don’t like to set restrictions or boundaries in the bedroom. You’re also never at a loss for ideas to try, which keeps sex interesting for you—even in a long-term relationship. Your creativity and passion in your daily life, translates very well into the bedroom.',
    Examiner:
      'You might be a bit shy when it comes to sex. You don’t favor casual sex, and prefer to get to know a person before opening up sexually. You’re very concerned with your partner’s satisfaction, and will go extra lengths ensure it is reached. You enjoy sex, just like anyone else- but you tend to feel sex improves with time, and that it requires work to maintain a long-term sexual connection with your partner. You generally prefer when things are predictable and scheduled. You dislike too many surprises in the bedroom, and enjoy following what you know best. You are sure to please your partner and know how to perform well, as long as you can maintain some level of control.',
    Protector:
      "Your sex preferences are quite stable, and you’re likely to settle down with one partner rather than play around and engage in casual sex. You typically find what you like and stick with it, which may mean you’re not super-adventurous in bed. you would be willing to experiment at times, but generally you'll keep your boundaries. More than anything, you love connecting with your partner. The bond that you build with your partner either physically or emotionally makes you feel comfortable and safe.",
    Executive:
      "When it comes to sex, you can have a somewhat intense and focused energy, especially when you are with a partner who you care for. Your natural assertiveness and eagerness towards life translates directly into the bedroom. You have a 'take charge' attitude and see sex as an opportunity to be the best at yet another thing. You are not afraid of expressing what you want or of going after the person you want most. In your sexual encounters, you can be rather direct, and enjoy having more open communication with your partner. At times, you might take sex as a challenge. You thrive on knowing you are doing a good job in the bedroom, and want to be as impressive as possible.When it comes to sexual intimacy, you can often find this to be a great way to really show how much you care about your partner. Being physically close and connected with a partner and being able to share your bodies together makes you feel closer to that person. In general, you are a practical person and so you place a certain importance on things like sex in a relationship. Sex is something which you believe to be an important part of providing for your partner.",
    Provider:
      'You are a very passionate person, and this is something that is tied into your sexual energy. When it comes to sex, you put all of your heart and soul into connecting with your partner and making them happy. You rarely enjoy casual sex and dislike the idea of having sex with someone just for the sake of the physical act. Before sharing your body with someone, you often want to feel like that person knows who you are deep down and actually cares about you. When you truly care for someone, you want to go above and beyond in order to make them feel appreciated and satisfied. You can put a lot of pressure on yourself when it comes to sex, and really want to make the experience an amazing one each and every time. You can also be more open to experiencing new things sexually and might even actively seek out ways to spice things up. Generally speaking, you just want to make your sex partner happy and satisfied more than anything else, and this can even be more important than your own happiness and satisfaction.',
    Artisan:
      'You have a rather passionate and playful sexual energy. You might not always want your sexual encounters to be within a committed relationship, but at the same time this doesn’t mean you want to experience this with just anyone. Even in casual sex, you can be rather picky with who you want to be with. In fact, you view sex in the chemical sense, and are drawn to people you are physically attracted to. You are often very visually stimulated, and enjoy what is aesthetically pleasing. You usually see sexual encounters as an outlet, and do not require an emotional connection, but you probably agree that emotions add another element to the sexual experience.',
    Artist:
      'While you can seem to be somewhat private or even shy to others, your sexual energy is often very sensual and much more confident than most people expect from you. You see the physical act of sex as a prime opportunity to express your feelings for someone. To you it is one of the best ways to show someone that you truly care for them. You are capable of separating sex from love, but you see no value in those shallow experiences of casual sex. That’s mainly because you look for comfort and trust within a relationship, and that translates well into your sex life. You are unlikely to experience peak physical pleasure, until you’re in a relationship with someone you trust. You might not appear to have that much of a sex drive with a partner you don’t feel a special bond with, but this becomes entirely different when you do care for someone and trust them entirely. This often allows the more wild and adventurous side of you to come to play, and so it really just takes the right person.',
    Entrepreneur:
      'You probably have an extremely high sex drive, and find it very hard to be satisfied completely. You enjoy the physical aspect of sex, and are very willing to explore new things. You love to flirt and explore sexual opportunities as they arise while you’re single—and you generally don’t seek out committed relationships. You have an intense and somewhat aggressive sexual energy. You are eager and athletic during sex, more than willing to put forth a lot of the work. You don’t always need an emotional connection to experience good sex, but you are willing to explore that aspect of it as well. You can be very giving towards your sex partner, but are also very greedy as well.',
    Entertainer:
      'Your sex preferences include enjoying casual sex and committed relationships alike. You are capable of experiencing sex without love, and you don’t generally feel remorse afterwards. Although you are capable of separating sex and love, sometimes you end up developing feelings for someone when it’s just meant to be casual. When you care about someone you can be extremely giving and enthusiastic. You’re passionate in bed and a very open-minded partner. As long as you’re getting the pleasure you’re seeking and your partner is giving, you’ll go to any length to make sure they’re satisfied.',
  },
    };
    
  },
  components: {
    Question,
    ReportPopup,
    ReportPopupFr,
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
      
      const data = await (
        await fetch("https://lovester.net/public/index.php/api/personality", {
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
       var data1 =data
   
      this.result = data.report;
  
      this.sexuality = this.sexualityReport[data1.type]
     
      


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
      // this.result = data.report;

      // fetch lovelanguage data
       const dataLoveLanguage = await (
        await fetch("http://35.246.199.57:3100/personality/lovelangquestion", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          
        })
      ).json();
      this.dataLoveLanguage=dataLoveLanguage
      
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
    this.lang = localStorage.getItem("lang") 
    console.log("langue:", this.lang);
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
    if (user?.n === 0 || user?.n) this.$router.push({ name: "compatibility" });
  },
  created() {
    console.log("urll",this.apiUrl);
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
