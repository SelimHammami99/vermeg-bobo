import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mantine/core";

const Page = ({ children }) => <Box>{children}</Box>;

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
