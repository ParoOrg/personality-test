<template>
  <div class="relative">
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
      type="text"
      :placeholder="$t('country')"
      v-on:input="change"
      v-on:change="change"
      :value="selected"
      @focus="show = true"
      @blur="blur"
      autocomplete="off"
    />
    <div
      v-if="show"
      class="py-1 absolute h-40 overflow-y-scroll w-full"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <p
        v-for="s in currentSuggestions"
        :key="s"
        @click="change({ target: { value: s } })"
        class="relative cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white hover:text-gray-900"
        role="menuitem"
      >
        {{ s }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      current: 0,
      show: false,
      selected: "",
      currentValues: [],
      currentSuggestions: [],
    };
  },
  methods: {
    change(e) {
      this.selected = e.target.value;
      this.currentValues = this.values;
      this.currentSuggestions = this.suggestions.filter((x, i) => {
        if (new RegExp(this.selected, "i").test(x)) {
          this.currentValues.splice(i, 1);
          return true;
        }
        return false;
      });
      this.$emit("country", this.selected);
    },
    blur() {
      setTimeout(() => {
        this.show = false;
      }, 200);
    },
  },
  mounted() {
    this.currentValues = this.values;
    this.currentSuggestions = this.suggestions;
  },
};
</script>

<style>
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
</style>
