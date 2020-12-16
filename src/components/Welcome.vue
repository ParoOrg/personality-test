<template>
  <div
    class="bg-main-mobile sm:bg-main bg-cover bg-no-repeat h-screen w-screen"
  >
    <div class="container mx-auto h-full flex">
      <div class="h-auto self-center">
        <img
          alt="logo"
          src="../assets/logo_with_shadow.png"
          class="w-1/2 h-1/2 xs:w-1/3 xs:h-1/3 sm:w-1/4 sm:h-1/4 xl:w-1/5 xl:h-1/5 mx-auto"
        />
        <div class="text-white">
          <p class="text-2xl md:text-3xl tracking-widest">
            {{$t("welcome_page.welcome_to")}}
          </p>
          <p
            class="text-5xl font-bold md:text-6xl tracking-wider"
          >
            LOVESTER
          </p>
          <p
            class="text-md font-museoSansRounded-100 md:text-lg tracking-widest text-gray-100 mt-3"
          >
            {{$t("welcome_page.this_is_made_exclusively_to")}}
          </p>
          <p
            class="text-3xl font-bold uppercase text-gradient bg-gradient-to-r from-pink-600 to-white"
          >
            Manel
          </p>

          <button
            class="uppercase rounded-full border border-white text-white px-10 py-1 mt-5 bg-gradient-to-r hover:from-pink-800 hover:to-pink-400"
          >
            <router-link to="/home">{{$t("next")}}</router-link>
          </button>
        </div>
      </div>

      <div
        class="fixed bottom-0 text-center w-4/5 h-14 -mt-16 border-t mx-auto py-3 border-gray-300 left-1/2 transform -translate-x-1/2"
      >
        <router-link
          class="text-sm font-museoSansRounded-300 underline text-gray-300"
          to=""
          >{{$t("welcome_page.read_the_terms_of_use")}}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
</style>