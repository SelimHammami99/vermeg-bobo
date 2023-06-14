import React from "react";
import PropTypes from "prop-types";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  container: {
    marginTop: 10,
  },
}));

const PageContent = ({ children }) => {
  const { classes } = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

PageContent.propTypes = {
  children: PropTypes.node,
};

export default PageContent;
