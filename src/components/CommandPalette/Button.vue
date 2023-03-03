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
  <div class="relative">
    <Button v-tippy="{
      content: 'MacOS - ⌘+K | WindowsOS - Ctrl + K',
    }" icon="Menu" class="focus:outline-none" rounded elevated @click.native="visible = !visible" />

    <div v-if="visible" class="absolute top-0 right-0 mt-12 w-48 bg-white rounded-md shadow-lg z-10">
      <Item v-for="option in options" :key="option.id" :option="option"
        @option-selected="$emit('option-selected', option.label)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Item from "@/components/Item.vue"

export default Vue.extend({
  components: {
    Item,
  },

  data() {
    return {
      visible: false,
      options: [
        { id: 1, label: "Option 1" },
        { id: 2, label: "Option 2" },
        { id: 3, label: "Option 3" },
      ],
    }
  },
})
</script>

