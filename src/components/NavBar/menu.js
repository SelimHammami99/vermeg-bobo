import {
  IconDashboard,
  IconUserCircle,
  IconWreckingBall,
  IconLayoutDashboard,
  IconUpload,
  IconBrowser,
} from "@tabler/icons-react";

export const getMenu = () => {
  const menu = [
    {
      id: "demo",
      defaultLabel: "Demo",
      link: "demo",
      icon: IconWreckingBall,
    },
    {
      id: "productDashboard",
      defaultLabel: "Product",
      icon: IconDashboard,
      links: [
        {
          id: "client",
          label: "Client",
          icon: IconUserCircle,
          links: [
            {
              id: "eik",
              link: "eik",
              label: "EIK",
              icon: IconLayoutDashboard,
            },
            {
              id: "upload",
              link: "upload",
              label: "Upload",
              icon: IconUpload,
            },
          ],
        },
        {
          id: "internal",
          link: "internal",
          label: "Internal Virtual Machine",
          icon: IconBrowser,
        },
      ],
    },
  ];
  return menu;
};
