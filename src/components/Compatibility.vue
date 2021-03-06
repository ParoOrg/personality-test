<template>
  <div
    class="bg-main-mobile md:bg-main bg-cover bg-no-repeat h-screen w-screen"
  >
    <div class="flex flex-col h-screen items-center">
      <h1 class="text-sans text-xl text-white font-medium mt-16">
        {{ $t("compatibilityReport") }}
      </h1>
      <div class="bg-white rounded-full w-16 h-16 mt-8">
        <img class="transform scale-150 h-full w-full" src="/couples.svg" />
      </div>
      <div class="flex flex-col items-center space-y-10 mt-12">
        <p class="font-sans text-xs text-center text-white px-14">
          {{ $t("compatibilityDescription") }}
        </p>
        <div ref="segmentedInput" class="flex space-x-2">
          <input
            type="text"
            class="input-color rounded-xl outline-none text-center h-9 w-11"
            @input="segmentedInput($event.target.value, 0)"
            @keydown.delete="segmentedInputHandleBackSpace(0)"
            v-model="codeA[0]"
          />
          <input
            type="text"
            class="input-color rounded-xl text-center outline-none h-9 w-11"
            @input="segmentedInput($event.target.value, 1)"
            @keydown.delete="segmentedInputHandleBackSpace(1)"
            v-model="codeA[1]"
          />
          <input
            type="text"
            class="input-color rounded-xl text-center outline-none h-9 w-11"
            @input="segmentedInput($event.target.value, 2)"
            @keydown.delete="segmentedInputHandleBackSpace(2)"
            v-model="codeA[2]"
          />
          <input
            type="text"
            class="input-color rounded-xl text-center outline-none h-9 w-11"
            @input="segmentedInput($event.target.value, 3)"
            @keydown.delete="segmentedInputHandleBackSpace(3)"
            v-model="codeA[3]"
          />
          <input
            type="text"
            class="input-color rounded-xl text-center outline-none h-9 w-11"
            @input="segmentedInput($event.target.value, 4)"
            @keydown.delete="segmentedInputHandleBackSpace(4)"
            v-model="codeA[4]"
          />
          <input
            type="text"
            class="input-color rounded-xl text-center outline-none h-9 w-11"
            @input="segmentedInput($event.target.value, 5)"
            @keydown.delete="segmentedInputHandleBackSpace(5)"
            v-model="codeA[5]"
          />
        </div>
        <button
          :disabled="code.length !== 6"
          type="submit"
          @click="submit"
          class="font-sans text-xs text-center text-white font-normal px-4 py-1 bg-transparent rounded-full outline-solid-white"
        >
          {{ $t("viewReportButton") }}
        </button>
      </div>
      <p class="text-red-500 text-xs pt-1">
        {{ error }}
      </p>
      <div class="flex font-sans text-white mt-5">
        <p class="font-semibold mr-1">{{ $t("yourCode") }} :</p>
        <p class="font-bold">{{ user.code }}</p>
      </div>
    </div>
    <report-popup
      :report="report"
      :show-condition="load || report.length !== 0"
      :is-loading="load"
      @close-popup="report = ''"
    >
      <template #popup-icon>
        <div class="font-sans input-color font-bold text-2xl pl-1 pt-5">
          {{ percentage || "??" }}%
        </div>
      </template>
      <template #popup-title>
        {{ $t("compatibilityPopupTitle") }}
      </template>
    </report-popup>
  </div>
</template>

<script>
import ReportPopup from "@/components/ReportPopup";

export default {
  components: {
    ReportPopup,
  },
  data() {
    return {
      codeA: Array(6).fill(""),
      load: false,
      report: "",
      email: "",
      error: "",
      user: {},
    };
  },
  mounted() {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      this.user = JSON.parse(localStorage.getItem("user"));
    } else this.$router.push({ name: "login" });
  },
  computed: {
    code() {
      return this.codeA.join("");
    },
  },
  methods: {
    async submit() {
      this.showPopup = !this.showPopup;
      this.error = "";
      if (this.code == this.user.code)
        return (this.error = this.$t("sameCode"));
      this.load = true;
      const data = await fetch(
        this.apiUrl + "code?code=" + this.code + "&lang=" + this.$i18n.locale,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      ).then((x) => {
        if (x.status !== 200)
          return (this.error =
            x.status == 402
              ? this.$t("invalidCode")
              : this.$t("compatibilityError"));
        return x.json();
      });

      if (!this.error) {
        await fetch(this.apiUrl + "send_report", {
          body: JSON.stringify({
            email: this.email,
            lang: this.$i18n.locale,
            subject: this.$t("compatibilityReport"),
            body: `<div><h1 style="text-align: center;">${this.$t(
              "compatibilityReport"
            )}</h1>
                  <div style="border: 1px solid gray; border-radius: 5px;padding: 20px">${
                    data.report
                  }</div>
                </div>`,
          }),
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }).catch(() => {});
        this.report = data.report;
        this.percentage = data.compatibility | 0;
      }
      this.load = false;
    },
    async resendCode() {
      fetch(this.apiUrl + "resend", {
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      });
    },
    segmentedInput(val, idx) {
      this.codeA[idx] = val.charAt(val.length - 1);
      if (this.codeA[idx].length > 0) {
        if (idx === 5) {
          return;
        }
        const nextInput = this.$refs.segmentedInput.childNodes[idx + 1];
        nextInput.focus();
      }
    },
    segmentedInputHandleBackSpace(idx) {
      if (idx !== 0 && this.codeA[idx] === "") {
        const previousInput = this.$refs.segmentedInput.childNodes[idx - 1];
        previousInput.focus();
      }
    },
  },
};
</script>

<style scoped>
.input-color {
  color: #b7517e;
}
.outline-solid-white {
  box-shadow: 0 0 0 1px #fff;
}
.custom {
  color: #701e5d;
  margin-top: 60px;
}
.custom-position {
  top: 5px;
  right: 5px;
}
input[type="text"] {
  font-size: 16px;
}
</style>
