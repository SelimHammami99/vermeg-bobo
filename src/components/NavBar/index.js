import React, { useMemo } from "react";
import { createStyles, ScrollArea, Navbar, Box } from "@mantine/core";
import { getMenu } from "./menu";
import LinksGroup from "../NavBarLinksGroup/index";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.nav,
    paddingBottom: 0,
    paddingTop: 0,
    zIndex: 10,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.black,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    margin: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
}));

const AppNavbar = () => {
  const { classes } = useStyles();

  const menu = useMemo(() => getMenu(), []);

  const links = menu.map((item) => <LinksGroup key={item.id} {...item} />);

  return (
    <Navbar
      width={{ sm: 200, lg: 300 }}
      p="md"
      hiddenBreakpoint="sm"
      className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <Box className={classes.linksInner}>{links}</Box>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
