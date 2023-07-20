import React from "react";
import {
  createStyles,
  Header,
  Container,
  rem,
  Image,
  Text,
} from "@mantine/core";
import logo from "../../logo/vermeg.png";

const HEADER_HEIGHT = rem(90);

const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 1000,
    backgroundColor: theme.colors.nav,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingLeft: "0.1rem",
    paddingRight: "1rem",
    maxWidth: "90rem",

    marginRight: "auto",
    [theme.fn.smallerThan("xl")]: {
      maxWidth: "70rem",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    color: theme.colors.darkBackground,
  },
  item: {
    "&[data-hovered]": {
      backgroundColor: "#fff",
      color: theme.colors.dark,
    },
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Header
      height={HEADER_HEIGHT}
      className={classes.root}
      sx={{ border: "none" }}>
      <Container className={classes.header}>
        {/* <Image src={logo} width={450} height={50} fit="contain" /> */}
        <Text weight={900} size={90} style={{ color: "white" }}>
          VERMEG
        </Text>
      </Container>
    </Header>
  );
};

export default AppHeader;
