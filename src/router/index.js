import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from "../components/Welcome.vue"
import Main from "../components/Main.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import Popup from "../components/Success.vue";
import Verify from "../components/Verify.vue";
import Email from "../components/Email.vue";
import PasswordReset from "../components/PasswordReset.vue";
import Compatibility from "../components/Compatibility.vue";
// import { db } from "../firebaseDB";

const routes = [
  {
    path: "/",
    name: "landing",
    component: Welcome,
  },
  {
    path: "/home",
    name: "home",
    component: Main,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/success",
    name: "success",
    component: Popup,
  },
  {
    path: "/password-reset",
    name: "password-reset",
    component: PasswordReset,
  },
  {
    path: "/compatibility",
    name: "compatibility",
    component: Compatibility,
  },
  {
    path: "/check",
    name: "check",
    component: Email,
  },
  {
    path: "/verify",
    name: "verify",
    component: Verify,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== "login") {
//     console.log(!db.app.auth().currentUser.email);
//     if (!db.app.auth().currentUser.email) {
//       next("/login");
//       return;
//     } else next();
//   }
// });

export default router;
