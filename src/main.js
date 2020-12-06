import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import * as countries from "i18n-iso-countries";
import vueCountryRegionSelect from "vue-country-region-select";

let locale = localStorage.getItem("lang");
if (locale === null) {
  locale = "en";
  localStorage.setItem("lang", "en");
}

const i18n = createI18n({
  legacy: false,
  locale,
  messages: {
    en: {
      email: "E-Mail",
      name: "Name",
      birthday: "Date of birth",
      country: "Country",
      city: "City",
      gender: "Gender",
      day: "Day",
      month: "Month",
      year: "Year",
      reportTitle:
        "Thank you for taking the time to finish our personality test. Here's your final report.",
      finishTest: "Veuillez d'abord finir votre test",
      compatibilityReport: "Compatibility report",
      noOceanError: "Please take the personality test first",
      resendLink: "Resend login link",
      invalidCode: "Invalid code",
      personalitySubject: "Your personality test results",
      resendCode: "Resend code",
      validateEmail: "Please enter a valid email",
      enterCode: "Enter Code",
      validateName: "Please enter a valid name",
      validateCountry: "Please enter a valid country",
      validateCity: "Please enter a valid city",
      validateBirthday: "Please enter a valid birthday",
      password: "Password",
      validatePassword: "Please enter a valid password (at least 8 characters)",
      fullName: "Full Name",
      enterName: "Please enter a name",
      login: "Login",
      loginError: "Error logging in",
      signupError: "Email already exists",
      emailVerify: "Please verify your e-mail",
      signupSuccess: "Sign up successful. Check your e-mail",
      signUp: "Sign Up",
      personalityTaken: "Personality test already taken",
      close: "Close",
      yourResults: "Your test result",
      incompleteError: "You need to finish answering all the questions first!",
      submit: "Submit",
      incomplete: "Please fill out this field.",
      male: "Male",
      female: "Female",
      back: "Back",
      next: "Next",
      other: "Other",
      selectGender: "Select gender",
      resendEmail: "Resend login e-mail",
      personalityTest: "Personality Test",
      hAgree: "Strongly Agree",
      mAgree: "Agree",
      sAgree: "Somewhat Agree",
      hDisagree: "Strongly Disagree",
      mDisagree: "Disagree",
      sDisagree: "Somewhat Disagree",
    },
    fr: {
      email: "E-Mail",
      name: "Nom complet",
      birthday: "Date de naissance",
      country: "Pays",
      city: "Ville",
      gender: "Genre",
      day: "Jour",
      month: "Mois",
      year: "Année",
      reportTitle:
        "Merci d'avoir pris le temps de terminer notre test de personnalité. Voici votre rapport final.",
      finishTest: "Veuillez d'abord finir votre test",
      compatibilityReport: "Rapport de compatibilité",
      noOceanError: "Veuillez d'abord passer le test de personnalité",
      resendLink: "Renvoyer le lien de connexion",
      invalidCode: "Code invalide",
      personalitySubject: "Les résultats de votre test de personnalité",
      resendCode: "Renvoyer le code",
      validateEmail: "Veuillez saisir un e-mail valide",
      enterCode: "Entrez le code",
      validateName: "Veuillez saisir un nom valide",
      validateCountry: "Veuillez saisir un pays valide",
      validateCity: "Veuillez saisir une ville valide",
      validateBirthday: "Veuillez saisir une date d'anniversaire valide",
      password: "Mot de passe",
      validatePassword:
        "Veuillez saisir un mot de passe valide (au moins 8 caractères)",
      fullName: "Nom complet",
      enterName: "Veuillez saisir un nom",
      login: "S'identifier",
      loginError: "Erreur de connexion",
      signupError: "L'email existe déjà",
      emailVerify: "Please verify your e-mail",
      signupSuccess: "Inscription réussie. Vérifiez votre e-mail",
      signUp: "S'inscrire",
      personalityTaken: "Test de personnalité déjà passé",
      close: "Fermer",
      yourResults: "Votre résultat de test",
      incompleteError:
        "Vous devez d'abord finir de répondre à toutes les questions!",
      submit: "Soumettre",
      incomplete: "Veuillez remplir ce champ.",
      male: "Mâle",
      female: "Femelle",
      back: "Retour",
      next: "Suivant",
      other: "Autre",
      selectGender: "Votre genre",
      resendEmail: "Renvoyer l'e-mail de connexion",
      personalityTest: "Test de personnalité",
      hAgree: "Tout à fait d'accord",
      mAgree: "D'accord",
      sAgree: "Un peu d'accord",
      hDisagree: "Pas du tout d'accord",
      mDisagree: "Pas d'accord",
      sDisagree: "Un peu pas d'accord",
    },
    ar: {
      email: "البريد الإلكتروني",
      name: "الاسم الكامل",
      birthday: "تاريخ الولادة",
      country: "البلد",
      city: "المدينة",
      gender: "الجنس",
      day: "يوم",
      month: "شهر",
      year: "سنة",
      reportTitle:
        "شكرًا لك على الوقت الذي قضيته في إنهاء اختبار الشخصية. هذا هو تقريرك النهائي.",
      finishTest: "الرجاء اجتياز اختبارك أولا",
      compatibilityReport: "تقرير التوافق",
      noOceanError: "يرجى إجراء اختبار الشخصية أولاً",
      resendLink: "إعادة إرسال رابط تسجيل الدخول",
      invalidCode: "الرمز غير صحيح",
      personalitySubject: "نتائج اختبار شخصيتك",
      resendCode: "أعد إرسال الرمز",
      validateEmail: "يرجى إدخال البريد الإلكتروني الصحيح",
      enterCode: "ادخل الرمز",
      validateName: "يرجى إدخال البريد الإلكتروني الصحيح",
      validateCountry: "يرجى إدخال البريد الإلكتروني الصحيح",
      validateCity: "يرجى إدخال البريد الإلكتروني الصحيح",
      validateBirthday: "يرجى إدخال البريد الإلكتروني الصحيح",
      password: "كلمه السر",
      validatePassword: "الرجاء إدخال كلمة مرور صالحة (8 أحرف على الأقل)",
      fullName: "الاسم الكامل",
      enterName: "الرجاء إدخال اسم",
      login: "تسجيل الدخول",
      loginError: "خطأ في تسجيل الدخول",
      signupError: "البريد الالكتروني موجود",
      emailVerify: "يرجى التحقق من البريد الإلكتروني الخاص بك",
      signupSuccess: "الاشتراك بنجاح. تحقق من بريدك الالكتروني",
      signUp: "سجل",
      personalityTaken: "تم إجراء اختبار الشخصية بالفعل",
      close: "أغلق",
      yourResults: "نتيجة الاختبار الخاصة بك",
      incompleteError: "أنت بحاجة إلى إنهاء الإجابة على جميع الأسئلة أولاً!",
      submit: "إرسال",
      incomplete: "الرجاء ملء هذه الخانة.",
      male: "ذكر",
      female: "أنثى",
      back: "عودة",
      next: "التالى",
      other: "آخر",
      selectGender: "حدد الجنس",
      resendEmail: "إعادة إرسال البريد الإلكتروني",
      personalityTest: "اختبار الشخصية",
      hAgree: "موافق تماما",
      mAgree: "موافق",
      sAgree: "موافق قليلا",
      hDisagree: "غير موافق قطعا",
      mDisagree: "غير موافق",
      sDisagree: "غير موافق قليلا",
    },
  },
});

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/fr.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ar.json"));

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(vueCountryRegionSelect)
  .mixin({
    data() {
      return {
        get apiUrl() {
          return "https://lovester.net/backend/public/api/";
        },
      };
    },
  });

app.mount("#app");
