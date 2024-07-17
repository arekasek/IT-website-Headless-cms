import { SimpleRichText } from "../blocks/SimpleRichText";
import { PricingBlock } from "../blocks/PricingBlock";
import { BlogPost } from "../blocks/BlogPost";

export const Pages = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePage(doc.slug);
      },
    ],
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
      blocks: [PricingBlock, BlogPost, SimpleRichText],
    },
  ],
};
