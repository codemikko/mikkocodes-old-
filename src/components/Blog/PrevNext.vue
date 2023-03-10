<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { FetchReturn } from "@nuxt/content/types/query-builder"

export default Vue.extend({
  props: {
    currentSlug: {
      type: String,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      prev: {} as FetchReturn,
      next: {} as FetchReturn,
    }
  },
  async fetch() {
    const [prev, next] = (await this.$content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(this.currentSlug)
      .fetch()) as FetchReturn[]

    this.prev = prev
    this.next = next
  },
})
</script>

<template>
  <div
    v-if="$fetchState.pending === false && !$fetchState.error"
    class="grid gap-6 grid-cols-1 md:grid-cols-2 dark:text-gray-200"
  >
    <div>
      <Title :padding="false" lang="tr">Previous Post</Title>

      <SmartLink v-if="prev" :href="`/blog/${prev.slug}`">
        <h5>{{ prev.title }}</h5>
      </SmartLink>

      <h5 v-else class="line-through">No Older Post</h5>
    </div>

    <div class="text-right">
      <Title :padding="false" lang="tr">Next Post</Title>

      <SmartLink v-if="next" :href="`/blog/${next.slug}`">
        <h5>{{ next.title }}</h5>
      </SmartLink>

      <h5 v-else class="line-through">No Newer Posts</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  a {
    @apply hover:underline;
  }

  h5 {
    @apply font-light text-xl text-gray-700 truncate dark:text-slate-300;
  }
}
</style>
