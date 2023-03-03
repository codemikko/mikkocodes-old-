import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://mikko.code/icon.png"
const description =
  "I am a skilled front-end developer hailing from the United States, with a passion for all things related to front-end development. I specialize in using cutting-edge technologies and frameworks such as Nuxt, Next, Tailwind, and Windcss to create visually stunning and highly functional web applications. My love for the craft drives me to constantly improve, my JavaScript skills, staying up-to-date with the latest developments and trends in the industry. I have a deep understanding of the importance of creating intuitive and user-friendly interfaces, and my work reflects my dedication to delivering the best possible user experience!"

const Head: NuxtOptionsHead = {
  title: "mikko.code",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@eggsydev",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@eggsydev",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "mikko.code",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "mikko.code",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://mikko.code/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Mikko's Blog",
      href: "https://mikko.code/opensearch.xml",
    },
  ],
}

export default Head
