<template>
  <div
    class="flex justify-center flex-col h-screen items-center"
  >
    <h1 class="text-3xl custom flex items-center"> LOVESTER <img src="/logo1.png" class="h-10 w-10" alt=""></h1>
    <div
      v-if="success"
      class="absolute text-green-500 border-2 z-50  bg-white rounded-lg border-gray-400 h-10/12 m-1/2 position-loader"
    >
      <div class="w-full p-5">
        {{ $t("signupSuccess") }}
      </div>
      <button
        @click="
          () => {
            result = false;
            success = false;
          }
        "
        class="transition p-2 bg-red-500 px-4 text-white rounded-lg inline lg:inline my-4"
      >
        {{ $t("close") }}
      </button>
    </div>
  </div>
  <moon-loader v-if="load" class="absolute position-loader"></moon-loader>
</template>

<script>
import MoonLoader from "vue-spinner/src/MoonLoader";

export default {
  components: {
    MoonLoader,
  },
  data() {
    return {
      success: false,
    };
  },
};
</script>

<style>
.custom-position {
  top: 5px;
  right: 5px;
}

.custom {
  color: #701e5d;
  margin-top: 60px;
}

.blur {
  filter: opacity(0);
  transition: 0.5s;
}
.position-loader {
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
