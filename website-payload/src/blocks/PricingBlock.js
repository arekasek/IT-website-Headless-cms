export const PricingBlock = {
  slug: "pricingBlock",
  labels: {
    singular: "Pricing Block",
    plural: "Pricing Blocks",
  },
  fields: [
    {
      name: "pricingItems",
      label: "Pricing Items",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image of service",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "text",
          label: "Name of service",
          type: "text",
        },
        {
          name: "price",
          label: "Price",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
  ],
};
