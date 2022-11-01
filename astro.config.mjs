import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

import addClasses from "rehype-add-classes";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          a: "text-mirage underline font-bold",
          p: "text-justify hyphens-auto",
        },
      ],
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
    extendDefaultPlugins: true,
  },
});
