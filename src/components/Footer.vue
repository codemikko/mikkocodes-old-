<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    /**
     * Returns localized GitHub notice string in English according to current route.
     * @returns {string}
     */
    getLocalizedNotice(): string {
      if (this.$route.name?.includes("blog"))
        return "This site is shared as open source on GitHub."
      else return "This website is open-source on GitHub"
    },
  },
})
</script>

<template>
  <div
    class="bg-gray-200/50 w-full py-4 text-gray-900 dark:(bg-slate-800 text-gray-200)"
  >
    <div class="mx-auto px-4 w-11/12 sm:w-9/12 md:w-7/12">
      <div class="space-y-4 text-center sm:(space-y-0 space-x-6 text-left)">
        <SmartLink
          href="https://github.com/codemikko/mikkocodes"
          class="text-center sm:truncate hover:underline"
          blank
          >{{ getLocalizedNotice }}</SmartLink
        >
      </div>
    </div>
  </div>
</template>
