import React from "react";
import propTypes from "prop-types";
import { Box, createStyles, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    borderBottom: `1px solid ${theme.colors.darkest}`,
    padding: 5,
    backgroundColor: theme.colors.white,
    marginLeft: 0,
    paddingBottom: 5,
    paddingTop: 10,
    minHeight: 50,
  },
  leftCol: {
    textAlign: "left",
  },
  centerCol: {
    textAlign: "center",
  },
  rightCol: {
    textAlign: "right",
  },
}));

export const HeaderLeft = ({ children }) => {
  return children || null;
};

export const HeaderRight = ({ children }) => {
  return children || null;
};

const PageHeader = ({ children }) => {
  const { classes } = useStyles();
  const headerLeft = () =>
    React.Children.toArray(children).find((child) => child.type === HeaderLeft);
  const headerRight = () =>
    React.Children.toArray(children).find(
      (child) => child.type === HeaderRight
    );

  return (
    <Group className={classes.root} position="apart">
      <Box className={classes.leftCol}>{headerLeft()}</Box>
      <Box className={classes.rightCol}>{headerRight()}</Box>
    </Group>
  );
};

PageHeader.propTypes = {
  children: propTypes.node,
};
HeaderRight.propTypes = {
  children: propTypes.node,
};
HeaderLeft.propTypes = {
  children: propTypes.node,
};

export default PageHeader;
