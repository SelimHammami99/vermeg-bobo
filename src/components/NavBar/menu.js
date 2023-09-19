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
          open: false,
          links: [
            {
              id: "eik",
              link: "elk",
              label: "ELK",
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
          label: "Internal Dashboard",
          icon: IconBrowser,
          open: false,
          links: [
            {
              id: "vm1",
              link: "virtualmachine1",
              label: "Virtual Machine 1",
              icon: IconLayoutDashboard,
            },
            {
              id: "vm2",
              link: "virtualmachine2",
              label: "Virtual Machine 2",
              icon: IconLayoutDashboard,
            },
          ],
        },
      ],
    },
  ];
  return menu;
};
