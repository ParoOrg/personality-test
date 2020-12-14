<template>
  <div
    class="absolute text-green-500 border-2 z-50 lg:w-1/4 w-full bg-white rounded-lg border-gray-400 h-10/12 m-1/2 position-custom"
  >
    <div class="w-full p-5">
      <slot></slot>
    </div>
    <button
      @click="
        () => {
          if (redirect) $router.push({ name: 'success' });
          else $emit('close')
        }
      "
      class="transition p-2 bg-red-500 px-4 text-white rounded-lg inline lg:inline my-4"
    >
      {{ $t("close") }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    redirect: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
