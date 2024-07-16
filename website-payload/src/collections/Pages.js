import { SimpleRichText } from "../blocks/SimpleRichText";
import { Hero } from "../blocks/Hero";
import { BlogPost } from "../blocks/BlogPost";
import { Sidebar } from "../globals/Sidebar";

export const Pages = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, BlogPost, SimpleRichText],
    },
  ],
};
