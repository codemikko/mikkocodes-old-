<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    /**
     * Return target url.
     */
    getTargetLink(): string {
      const path = this.$route.path

      if (path !== "/projects/Retrieve-Github-Commits" && path.startsWith("/projects/Retrieve-Github-Commits"))
        return "/projects/Retrieve-Github-Commits"
      else return "/"
    },
  },
})
</script>

<template>
  <nav class="w-full">
    <div class="container mx-auto px-4 w-11/12 relative sm:w-9/12 md:w-7/12">
      <div class="flex items-center justify-between">
        <SmartLink :href="getTargetLink" class="flex-shrink-0 h-10 w-10">
          <SmartImage
            src="/assets/icons/icon.svg"
            class="rounded-md bg-gray-100 ring-black transition-transform ring-2 ring-opacity-5 sm:transform hover:-rotate-6"
            width="100"
            height="100"
            title="<MikkoCodes />"
          />
        </SmartLink>

        <div class="flex space-x-2 items-center">
          <CommandPaletteButton />
          <ColorSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>
