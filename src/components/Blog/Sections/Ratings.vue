<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      ratings: [
        {
          name: "Nicky Jam: El Gandor",
          rating: 10,
          platform: "Netflix",
          anchor: "#nickyjam",
        },
        {
          name: "Narcos",
          rating: 10,
          platform: "Netflix",
          anchor: "#narcos",
        },
        {
          name: "Arcane",
          rating: 10,
          platform: "Netflix",
          isNew: true,
          anchor: "#arcane",
        },
        {
          name: "Love, Death & Robots",
          rating: 10,
          platform: "Netflix",
          anchor: "#love-death--robots",
        },
        {
          name: "Queen of the South",
          rating: 9.5,
          platform: "Netflix",
          anchor: "#queenofthesouth",
        },
        {
          name: "The Witcher",
          rating: 9.5,
          platform: "Netflix",
          anchor: "#the-witcher",
        },
        {
          name: "The Boys",
          rating: 9.5,
          platform: "Amazon Prime",
          anchor: "#the-boys",
        },
        {
          name: "Rise of Empires: Ottoman",
          rating: 9.5,
          platform: "Netflix",
          anchor: "#rise-of-empires-ottoman",
        },
        {
          name: "The Mandalorian",
          rating: 9.5,
          platform: "Disney+",
          anchor: "#the-mandalorian",
        },
        {
          name: "The Woman King",
          rating: 9.5,
          platform: "Netflix",
          anchor: "#thewomanking",
        },
        {
          name: "Naro: Saints",
          rating: 10,
          platform: "Netflix",
          anchor: "#narcosaints",
        },
        {
          name: "Ottoman: Mehmed vs Vlad",
          rating: 9,
          platform: "Netflix",
          anchor: "#ottoman",
        },
        {
          name: "Blacklist",
          rating: 9.5,
          platform: "Netflix",
          anchor: "#blacklist",
        },
        {
          name: "Barbarians",
          rating: 9,
          platform: "Netflix",
          anchor: "#barbarians",
        },
        {
          name: "Barbarians II",
          rating: 10,
          platform: "Netflix",
          anchor: "#barbarians2",
        },
        {
          name: "Loki",
          rating: 9,
          platform: "Disney+",
          isNew: true,
          anchor: "#loki",
        },
        {
          name: "Lupin",
          rating: 9,
          platform: "Netflix",
          anchor: "#lupin",
        },
        {
          name: "Snowpiercer",
          rating: 9,
          platform: "TNT",
          anchor: "#snowpiercer",
        },
        {
          name: "The Haunting of Bly Manor",
          rating: 9,
          platform: "Netflix",
          anchor: "#the-haunting-of-bly-manor",
        },
        {
          name: "What If...?",
          rating: 9,
          platform: "Disney+",
          isNew: true,
          anchor: "#what-if",
        },
        {
          name: "When They See Us",
          rating: 9,
          platform: "Netflix",
          anchor: "#when-they-see-us",
        },
        {
          name: "Sense8",
          rating: 9,
          platform: "Netflix",
          anchor: "#sense8",
        },
        {
          name: "Chilling Adventures of Sabrina",
          rating: 9,
          platform: "Netflix",
          anchor: "#chilling-adventures-of-sabrina",
        },
        {
          name: "Altered Carbon",
          rating: 9,
          platform: "Netflix",
          anchor: "#altered-carbon",
        },
        {
          name: "The Queen's Gambit",
          rating: 9,
          platform: "Netflix",
          anchor: "#the-queens-gambit",
        },
        {
          name: "Aşk 101",
          rating: 8.5,
          platform: "Netflix",
          anchor: "#aşk-101",
        },
        {
          name: "The Order",
          rating: 8.5,
          platform: "Netflix",
          anchor: "#the-order",
        },
        {
          name: "BoJack Horseman",
          rating: 8.5,
          platform: "Netflix",
          anchor: "#bojack-horseman",
        },
        {
          name: "Rick and Morty",
          rating: 8.5,
          platform: "Adult Swim",
          anchor: "#rick-and-morty",
        },
        {
          name: "Lost in Space",
          rating: 8.5,
          platform: "Netflix",
          anchor: "#lost-in-space",
        },
        {
          name: "The Haunting of Hill House",
          rating: 8,
          platform: "Netflix",
          anchor: "#the-haunting-of-hill-house",
        },
        {
          name: "You",
          rating: 8,
          platform: "Netflix",
          anchor: "#you",
        },
        {
          name: "Lucifer",
          rating: 8,
          platform: "Netflix",
          anchor: "#lucifer",
        },
        {
          name: "The Umbrella Academy",
          rating: 8,
          platform: "Netflix",
          anchor: "#the-umbrella-academy",
        },
      ].sort((a, b) => b.rating - a.rating),
    }
  },
})
</script>

<template>
  <div class="mb-6 grid gap-2 lg:grid-cols-2">
    <BlogRating
      v-for="item in ratings"
      :key="item.name"
      :rating="item.rating"
      :platform="item.platform"
      :isnew="item.isNew"
    >
      <a :href="item.anchor">{{ item.name }}</a>
    </BlogRating>
  </div>
</template>
