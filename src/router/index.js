import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../components/Main.vue";
import Login from "../components/Login.vue";
// import { db } from "../firebaseDB";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
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
