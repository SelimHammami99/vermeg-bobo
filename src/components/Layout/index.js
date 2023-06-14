import React from "react";
import PropTypes from "prop-types";
import { AppShell, Box } from "@mantine/core";
import AppHeader from "../Header";
import AppNavbar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <AppShell header={<AppHeader />} navbar={<AppNavbar />}>
      <Box>{children}</Box>
    </AppShell>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
