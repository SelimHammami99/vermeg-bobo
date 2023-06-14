import { IconDashboard } from "@tabler/icons-react";

export const getMenu = () => {
  const menu = [
    {
      id: "productDashboard",
      defaultLabel: "Product Dashboard",
      icon: IconDashboard,
      links: [
        { id: "client", label: "Client", link: "client", icon: IconDashboard },
        {
          id: "internal",
          label: "Internal",
          link: "internal",
          icon: IconDashboard,
        },
      ],
    },
  ];
  return menu;
};
