<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  methods: {
    togglePalette() {
      this.$store.commit("palette/toggleVisibility")
    },
  },
})
</script>

<template>
  <Button
    v-tippy="{
      content: 'MacOS - ⌘+K | WindowsOS - Ctrl + K',
    }"
    icon="Menu"
    class="focus:outline-none"
    rounded
    elevated
    @click.native="togglePalette"
  />
</template>
