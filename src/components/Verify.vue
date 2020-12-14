<template>
  <moon-loader v-if="load" class="absolute position-loader"></moon-loader>
</template>

<script>
import MoonLoader from "vue-spinner/src/MoonLoader";
export default {
  computed: {
    MoonLoader,
  },
  async mounted() {
    await fetch(this.apiUrl + "confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.$route.query.id,
        token: this.$route.query.token,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          if (res.status == 402) this.error = this.$t("unconfirmed");
          else this.error = this.$t("loginError");
        } else {
          sessionStorage.setItem('confirmed','sdqsd')
          this.$router.push({
            path: "login",
            params: { confirmed: "confirmed" },
          });
          return res.json();
        }
      })
      .then(() => {})
      .catch(() => {
        this.error = this.$t("loginError");
      });
    this.$router.push({ name: "login" });
  },
};
</script>

<style>
.position-loader {
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
