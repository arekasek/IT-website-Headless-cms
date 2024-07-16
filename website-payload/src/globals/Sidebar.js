export const Sidebar = {
  slug: "sidebar",
  labels: {
    singular: "Sidebar Block",
    plural: "Sidebar Blocks",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "menuItems",
      label: "Menu Items",
      type: "array",
      fields: [
        {
          name: "icon",
          label: "Icon (square image)",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
        },
        {
          name: "text",
          label: "Text",
          type: "text",
        },
      ],
    },
  ],
};
