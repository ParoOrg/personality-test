import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

let locale = localStorage.getItem("lang");
if (locale === null) {
  locale = "en";
  localStorage.setItem("lang", "en");
}
console.log(locale);

const i18n = createI18n({
  legacy: false,
  locale,
  messages: {
    en: {
      email: "E-Mail",
      validateEmail: "Please enter a valid email",
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
      personalityTest: "Personality Test",
      hAgree: "Highly agree",
      mAgree: "Moderately agree",
      sAgree:"Slightly agree",
      hDisagree: "Highly disagree",
      mDisagree:"Moderately disagree",
      sDisagree: "Slightly disagree",
    },
    fr: {
      email: "E-Mail",
      validateEmail: "Veuillez saisir un e-mail valide",
      password: "Mot de passe",
      validatePassword:"Veuillez saisir un mot de passe valide (au moins 8 caractères)",
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
      incompleteError:"Vous devez d'abord finir de répondre à toutes les questions!",
      submit: "Soumettre",
      incomplete: "Veuillez remplir ce champ.",
      male: "Mâle",
      female: "Femelle",
      back: "Retour",
      next: "Suivant",
      other: "Autre",
      selectGender: "Sélectionnez le sexe",
      personalityTest: "Test de personnalité",
      hAgree: "Tout à fait d'accord",
      mAgree: "Modérément d'accord",
      sAgree:"Plutôt d'accord",
      hDisagree: "Pas du tout d'accord",
      mDisagree:"Modérément en désaccord",
      sDisagree: "Légèrement en désaccord",
    },
    ar: {
      email: "البريد الإلكتروني",
      validateEmail: "يرجى إدخال البريد الإلكتروني الصحيح",
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
      personalityTest: "اختبار الشخصية",
      hAgree: "أوافق بشدة",
      mAgree: "أوافق باعتدال",
      sAgree:"أوافق قليلا",
      hDisagree: "أعارض بشدة",
      mDisagree:"أعارض باعتدال",
      sDisagree: "أعارض قليلا",
    },
  },
});

const app = createApp(App)
  .use(router)
  .use(i18n);

app.mount("#app");
