<!-- TODO: Fix this page -->

<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  icon?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
  isHidden?: boolean
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      showModal: false,
      showExtraExperience: false,
      repos: [] as Repository[],
      projects: [
        {
          title: "ToVueList",
          to: "/projects/tovuelist",
          description:
            "Simple, ToDo List thats made with PopperJS, React, HTML5 Webpack",
          icon: "PreMiD",
        },
        {
          title: "This Website",
          to: "/",
          description:
            "My personal website, blog, goals, daily songs and much more!",
          icon: "website",
        },
      ] as Project[],
      experiences: {
        jobs: [
          {
            title: "Free Code Camp",
            url: "https://freecodecamp.org",
            position: "Student",
            date: "2021-"
          },
        ],
        education: [
          {
            title: "EE Smith Sr High",
            url: "https://www.ccs.k12.nc.us/eeshs",
            position: "Student",
            date: "1996-2000",
          },
          {
            title: "Heartland Community College",
            url: "https://www.heartland.edu/",
            position: "Student",
            date: "2012-2014",
          },
          {
            title: "Fayetteville Tech Community College",
            url: "https://www.faytechcc.edu/?scid=3943857&kw=1585493&pub_cr_id=598104787404&device=c&network=g&targetid=kwd-95318292&loc_interest_ms&loc_physical_ms=9010003&tc=CjwKCAiAr4GgBhBFEiwAgwORrYo94fghtlIMx3b4iifpWVdXpws0JALec61Xo-4fdq7wIfVgLl830BoCoSMQAvD_BwE&rl_key=219bda86874077fd61007454ecf20751&utm_source=localiq&utm_medium=cpc&utm_campaign=semftcc",
            position: "Student",
            date: "2014-2016",
            isHidden: false,
          },
        ],
      } as ExperienceObject,
      cards: {
        me: [
          {
            title: "Repositories",
            description:
              "Want to see and/or contribute to my code and public repositories?",
            href: "/me/repos",
          },
          {
            title: "Songs",
            description:
              "Trust your taste? Compare your favourite songs and artists with mine!",
            href: "/me/songs",
          },
          {
            title: "Contact",
            description:
              "Need help with anything? Want to get in touch? Send me a message!",
            href: "/me/contact",
          },
        ],
        pages: [
          {
            title: "Blog",
            description:
              "My adventures, programming, development and more!",
            href: "/blog",
          },
          {
            title: "Daily Songs",
            description:
              "Fresh, cool and great song recommendations from me each day!",
            href: "/daily",
          },
          {
            title: "Donate",
            description:
              "Want to support me and my projects so that I can create better stuff in the future?",
            href: "/donate",
          },
        ],
      },
      skills: [
        {
          title: "Development",
          items: [
            { title: "TypeScript", color: "#3178c620" },
            { title: "Vue.js", color: "#42b88320" },
            { title: "React.js", color: "#61dafb20" },
            { title: "HTML5", color: "#e34c2610" },
            { title: "Tailwind CSS", color: "#38b2ac20" },
            { title: "Node.js", color: "#33993320" },
            { title: "Sass", color: "#CF649A10" },
          ],
        },
        {
          title: "Apps",
          items: [
            {
              title: "VS Code",
              iconPack: "IconBrand",
              color: "#0165A920",
            },
            {
              title: "Figma",
              color: "#F24E1E10",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              title: "GitHub",
              color: "#e8eaea10",
              iconPack: "IconBrand",
            },
            {
              title: "Firebase",
              color: "#FFCA2820",
            },
            {
              title: "Netlify",
              iconPack: "IconBrand",
              color: "#00C7B720",
            },
             {
              title: "Vercel",
              iconPack: "IconBrand",
              color: "#1B1B1B",
            },
          ],
        },
      ],
    }
  },
  head: {
    title: "Home",
  },
})
</script>

<template>
  <div class="space-y-14 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 mx-4 py-10 justify-between md:flex-row md:items-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-2">
          <div
            class="font-semibold text-xl text-slate-700 md:text-3xl dark:text-slate-200"
          >
            <h1>Self taught</h1>
            <h1>
              <SmartLink
                href="https://www.w3schools.com/whatis/whatis_fullstack_js.asp"
                class="cursor-help border-b-2 border-blue-700 text-blue-700 dark:border-slate-500 dark:text-slate-500"
                blank
                >Full-stack</SmartLink
              >
              web developer
            </h1>
          </div>

          <p class="text-slate-500">
            ???? Hi there, my name is Mikko, I am from Ft Liberty "aka" Ft Bragg, NC. As a self
            taught web developer, I build complex web apps & components using frameworks such
            as
            <SmartLink href="https://vuejs.org/" class="description-link" blank
              >Vue.js</SmartLink
            >,
            <SmartLink
              href="https://reactjs.org/"
              class="description-link"
              blank
              >React.js</SmartLink
            >
            {{ "" }} and
            <SmartLink
              href="https://tailwindcss.com/"
              class="description-link"
              blank
              >Tailwind CSS</SmartLink
            >.
          </p>
        </div>

        <Status class="mt-4" />
      </div>

      <div class="rounded-full mb-4 md:mb-0">
        <SmartImage
          src="/assets/images/avatar.png"
          class="rounded-full h-30 w-30 md:h-40 md:w-40"
        />
      </div>
    </header>

    <section id="pages" class="my-16">
      <Title>Pages</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.pages"
          :key="`card-p-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="me" class="my-16">
      <Title>Me</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="projects">
      <Title>Projects I've Worked On</Title>

      <div class="mt-4 grid gap-2 md:(gap-4 grid-cols-2)">
        <Card
          v-for="(project, index) in projects"
          :key="`project-${index}`"
          :href="project.to || project.href"
          :title="project.title"
          :description="project.description"
          :blank="!!project.href"
          class="h-full"
        >
          {{ project.description }}

          <template v-if="project.icon" #icon>
            <IconDev
              :brand="project.icon"
              class="rounded-full bg-gray-100 h-14 p-2 text-slate-500 w-14 dark:(bg-slate-800 text-white)"
            />
          </template>
        </Card>
      </div>
    </section>

    <section
      id="experiences"
      class="mt-4 grid gap-6 sm:mt-6 md:(md:mt-10 gap-8 grid-cols-2)"
    >
      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Experience</Title>
          <button
            class="text-gray-400 mr-4 text-sm hover:underline dark:text-slate-700"
            @click="showExtraExperience = !showExtraExperience"
          >
            {{ showExtraExperience ? "show less" : "show more" }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            v-show="experience.isHidden ? showExtraExperience : true"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Education</Title>
          <button
            class="text-gray-400 mr-4 text-sm hover:underline dark:text-slate-700"
            @click="showExtraExperience = !showExtraExperience"
          >
            {{ showExtraExperience ? "show less" : "show more" }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            v-show="experience.isHidden ? showExtraExperience : true"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies" class="mt-6">
      <Title>Technologies I use</Title>

      <div class="flex flex-col space-y-6 mt-8">
        <section v-for="category in skills" :key="category.title">
          <h5
            class="border-b border-gray-400/10 dark:border-slate-600/10 text-gray-400 dark:text-slate-600/70 text-lg mx-4 mb-4 pb-2 font-medium"
          >
            {{ category.title }}
          </h5>

          <div
            class="grid px-4 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            <CardSkill
              v-for="(skill, index) in category.items"
              :key="`skill-${index}`"
              v-bind="skill"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.description-link {
  @apply border-slate-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
