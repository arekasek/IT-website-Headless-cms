export const Footer = {
  slug: "footer",
  labels: {
    singular: "Footer",
    plural: "Footers",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "bottomNavLinks",
      label: "Bottom Nav Links",
      type: "array",
      fields: [
        {
          name: "category",
          label: "Category",
          type: "text",
        },
        {
          name: "links",
          label: "Links",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
            },
            {
              name: "link",
              label: "Link",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
